import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ReactSelect from "react-select";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { ErrorMessage } from "../../../components";
import api from "../../../services/api";
import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";

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
    file: Yup.mixed()
      .test("required", "Carregue uma imagem", (value) => {
        return value?.length > 0;
      })
      .test("type", "Carregue apenas aquivos JPEG", (value) => {
        return (
          value[0]?.type === "image/jpeg" || value[0]?.type === "image/png"
        );
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <h1>Cadastrar novos produtos</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            placeholder="Digite seu nome"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            placeholder="Digite o valor do porduto"
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
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="...Selecione a categoria"
                />
              );
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default EditProduct;
