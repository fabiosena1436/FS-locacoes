import React from "react";
import { useForm, } from "react-hook-form"
import { Link, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from 'yup'

import { toast } from 'react-toastify';

import LoginImg from "../../assets/login1.svg";
import logo from "../../assets/logo2.svg";
import { Button } from "../../components";
import { useUser } from "../../hooks/UserContext";
import api from "../../services/api";

import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignInlink,
    ErrorMessage,
} from './styles'

function Login() {

    const history = useHistory()

    const { putUserData } = useUser()

    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória").min(6, " A senha deve ter pelo menos 6 digitos")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })


    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)',
                error: 'Verifique seu e-mail e senha'
            }
        )


        putUserData(data)

        setTimeout(() => {
            if (data.admin) {
                history.push('/pedidos')

            } else {
                history.push('/')
            }


        }, 1000)
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-imge" />
            <ContainerItens>
                <img src={logo} alt="logo" />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label >Email</Label>
                    <Input
                        type="email"
                        {...register("email")}
                        error={errors.email?.message} placeholder="Digite seu Email." />


                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label >Senha</Label>
                    <Input
                        type="password"
                        {...register("password")}
                        error={errors.password?.message} placeholder="Digite sua senha." />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>Sign In</Button>
                </form>
                <SignInlink>
                    Não possui conta? <Link to="/cadastro"> Sign Up</Link>
                </SignInlink>

            </ContainerItens>
        </Container>
    )
}

export default Login