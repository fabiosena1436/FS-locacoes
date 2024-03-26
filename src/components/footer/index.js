import React from "react";

import face from '../../assets/facebook-logo.svg'
import what from '../../assets/whatsapp-logo.svg'
import insta from '../../assets/instagramlogo.svg'
import logo from '../../assets/logo1.svg'

import {
    Container,
    SbFooter,
    SbFooterLinksDiv,
    SocialMedea,
    FooterimgDiv,
    Footerreserv

} from './styles'




export function Footer() {

    return (
        <Container>
            <SbFooter>

                <FooterimgDiv>
                    <img src={logo} alt="img logo" />
                </FooterimgDiv>
                <SbFooterLinksDiv>
                    <SocialMedea>
                        <a href="https://www.instagram.com/fernandosennats/" target="blank"><img src={what} alt="img what" /></a>
                        <a href="https://www.instagram.com/fernandosennats/" target="blank"><img src={insta} alt="img insta" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100002660650656&ref=xav_ig_profile_web" target="blank"><img src={face} alt="img face" /></a>
                    </SocialMedea>
                </SbFooterLinksDiv>
                <SbFooterLinksDiv>
                    <h4>Contato</h4>
                    <p>Fone: (18) 981088723 </p>
                    <p>Email: fernandosenna2009@hotmail.com</p>
                    <p>Horario de fincionamento:</p>
                    <p>Segunda a Sexta das 08h às 18:00h </p>
                    <p>Sábado 08h às 12h</p>
                </SbFooterLinksDiv>
            </SbFooter>
            <Footerreserv>
                <div>
                    <p>Copyright &copy; 2024 Fabio Sena | All Rights Reseved.</p>
                </div>       
            </Footerreserv>
        </Container>

    )

}

