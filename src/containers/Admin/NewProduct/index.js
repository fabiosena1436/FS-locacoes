import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { ErrorMessage } from "../../../components";

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setcategories] = useState(null);

  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.string().required("Escolha uma categoria"),
    file: Yup.mixed()
      .test("required", "Digite o nome do produto", (value) => {
        return  value?.length > 0;
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

      setcategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register("Name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input type="number" {...register("price")} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

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
        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  );
}

export default NewProduct;
