import React from "react";
import { useForm, } from "react-hook-form"
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import { toast } from 'react-toastify';

import logo from "../../assets/logo2.svg";
import RegisterImg from "../../assets/conta1.svg";
import {Button} from "../../components/Button";
import api from "../../services/api";
import {
    Container,
    RegisterImage,
    ContainerItens,
    Label,
    Input,
    SignInlink,
    ErrorMessage
} from './styles'

function Register() {

    const schema = Yup.object().shape({
        name: Yup.string("O seu nome é obrigatório").required(),
        email: Yup.string()
            .email("Digite um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: Yup.string()
            .required("A senha é obrigatória")
            .min(6, " A senha deve ter pelo menos 6 digitos"),
        confirmPassword: Yup.string()
            .required("A senha é obrigatória").oneOf([Yup.ref('password')], 'As senhas devem ser iguais!')

    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })


    const onSubmit = async clientData => {
        try {
            const { status } = await api.post('users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password
            },
                { validateStatus: () => true }
            )


            if (status === 201 || status === 201) {
                toast.success('Cadastro criado com sucesso');
            } else if (status === 409) {
                toast.error('E-mail ja cadastrado !faça login para continuar');
            } else {
                throw new Error()
            }

        } catch (err) {
            toast.error('Falha no sitema! Tente novamente')
        }
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="register-imge" />
            <ContainerItens>
                <img src={logo} alt="logo" />
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message} >Nome</Label>
                    <Input
                        type="text"
                        {...register("name")}
                        error={errors.name?.message} placeholder="o seu nome é obrigatório."
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message} >Email</Label>
                    <Input
                        type="email"
                        {...register("email")}
                        error={errors.email?.message} placeholder="Digite um Email."
                    />

                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message} >Senha</Label>
                    <Input
                        type="password"
                        {...register("password")}
                        error={errors.password?.message} placeholder="Digite uma senha."
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message} >Confirmar senha</Label>
                    <Input
                        type="password"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword?.message} placeholder="Confirme sua senha."
                    />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Sign Up</Button>
                </form>
                <SignInlink>
                    Já possui conta? <Link to="/login"> Sign In</Link>
                </SignInlink>

            </ContainerItens>
        </Container>
    )
}

export default Register