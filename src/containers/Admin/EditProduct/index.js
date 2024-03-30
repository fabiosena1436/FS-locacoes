import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Container,
  Label,
  Input,
  ButtonStyles,
  LabelUpload,
  ContairneInput,
} from "./styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { ErrorMessage } from "../../../components";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState(null);

  const {
    push,
    location: {
      state: { product },
    },
  } = useHistory();



  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Escolha uma categoria"),
    offer: Yup.bool(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const productDataFomData = new FormData();

    productDataFomData.append("name", data.name);
    productDataFomData.append("price", data.price);
    productDataFomData.append("category_id", data.category.id);
    productDataFomData.append("file", data.file[0]);
    productDataFomData.append("offer", data.offer);

    await toast.promise(api.put(`products/${product.id}`, productDataFomData), {
      pending: "Editando o produto ...",
      success: "Produto editado com sucesso",
      error: "Falha ao editar o produto",
    });

    setTimeout(() => {
      push("/listar-produtos");
    }, 1500);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <h1>Editar produto</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            defaultValue={product.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}

            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register("file")}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="...Selecione a categoria"
                  defaultValue={product.category}
                />
              );
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ContairneInput>
          <input
            type="checkbox"
            {...register("offer")}
            defaultChecked={product.offer}
          />
          <Label>Produto em destaque?</Label>
        </ContairneInput>
        <ButtonStyles>Editar produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default EditProduct;
