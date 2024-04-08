import React from "react";
import { useHistory } from "react-router-dom";

import { useUser } from "../../hooks/UserContext";

import Person from '../../assets/admin.svg'
import Cart from '../../assets/carrinho.svg'
import Logo from '../../assets/logo1.svg'
import {
    Container,
    ContainerLeft,
    PageLink,
    ContainerRight,
    ContainerText,
    ContainerHeader,
    SectionHeader,
    PageLinkExit,
    Line
} from './styles'




export function Header() {

    const { logout, userData } = useUser()
    const {
        
        push,
        location: { pathname }

    } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerHeader>
                <ContainerLeft>
                    <img src={Logo} alt="carrinho" />
                    <PageLink onClick={() => push('/')} isActive={pathname === '/'} >Home</PageLink>
                    <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>Produtos</PageLink>
                    <PageLink onClick={() => push('/about')} isActive={pathname.includes('about')} >Sobre</PageLink>
                </ContainerLeft>

                <ContainerRight>
                    <PageLink onClick={() => push('/carrinho')}>
                        <img src={Cart} alt="carrinho" />
                    </PageLink>
                    <Line></Line>
                    <PageLink>
                        <img src={Person} alt="pessoa" />
                    </PageLink>

                    <ContainerText>
                        <p>Ola {userData.name}</p>
                        <PageLinkExit onClick={logoutUser}>
                            Sair
                        </PageLinkExit>
                    </ContainerText>
                </ContainerRight>
            </ContainerHeader>

            <SectionHeader>
                <p>Alugar e Decorar</p>
            </SectionHeader>

        </Container>



    )

}

