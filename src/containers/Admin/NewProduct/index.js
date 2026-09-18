import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { ErrorMessage } from "../../../components";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { push } = useHistory();

  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Escolha uma categoria"),
    file: Yup.mixed()
      .test("required", "Carregue uma imagem", (value) => {
        return value && value.length > 0;
      })
      .test("type", "Carregue apenas arquivos JPEG ou PNG", (value) => {
        return (
          value &&
          value[0] &&
          (value[0].type === "image/jpeg" || value[0].type === "image/png")
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

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price);
    productFormData.append("category_id", data.category.id);
    productFormData.append("file", data.file[0]);

    await toast.promise(api.post("products", productFormData), {
      pending: "Criando novo produto...",
      success: "Produto criado com sucesso",
      error: "Falha ao criar o produto",
    });

    setTimeout(() => {
      push("/listar-produtos");
    }, 1500);
  };

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("categories");
        setCategories(data);
      } catch (err) {
        console.error("Erro ao carregar categorias", err);
      }
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
            placeholder="Digite o nome do produto"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            step="0.01"
            {...register("price")}
            placeholder="Digite o valor do produto"
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
              onChange={(e) => {
                setFileName(e.target.files[0]?.name);
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
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyles type="submit">Adicionar produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default NewProduct;
