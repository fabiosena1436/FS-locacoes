import React, { useEffect, useState } from "react";
import api from "../../../services/api";

import { Container, Label, Imput, ButtonStyles, LabelUpload } from "./styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

function NewProduct() {
  const [fileName, setfileName] = useState(null);
  const [categories, setcategories] = useState(null);
  const { register, handleSubmit, control } = useForm;
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
        <Imput type="text" {...register("Name")} />

        <Label>Preço</Label>
        <Imput type="namber" {...register("price")} />

        <Label>Uploade da imagem</Label>

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
              setfileName(value.target.files[0]?.name);
            }}
          />
        </LabelUpload>

        <Controller
          name="category_id"
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

        <ButtonStyles>Adicionar produto</ButtonStyles>
        <Imput />
      </form>
    </Container>
  );
}

export default NewProduct;
