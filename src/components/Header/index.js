import React from "react";


import Person from '../../assets/admin.svg'
import Cart from '../../assets/carrinho.svg'
import Logo from '../../assets/logo2.svg'
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
    return (
        <Container>
            <ContainerHeader>
                <ContainerLeft>
                    <img src={Logo} alt="carrinho" />
                    <PageLink>Home</PageLink>
                    <PageLink>Ver Produtos</PageLink>
                </ContainerLeft>

                <ContainerRight>
                    <PageLink>
                        <img src={Cart} alt="carrinho" />
                    </PageLink>
                    <Line></Line>
                    <PageLink>
                        <img src={Person} alt="pessoa" />
                    </PageLink>

                    <ContainerText>
                        <p>Ola Fabio</p>
                        <PageLinkExit>
                            Sair
                        </PageLinkExit>
                    </ContainerText>
                </ContainerRight>
            </ContainerHeader>

            <SectionHeader>

            </SectionHeader>

        </Container>



    )

}

