import React from 'react'

import styled from 'styled-components'

import SignatureImg from '../../images/about-me-signature.png'

export default function AboutAgency() {
    const AboutAgency = styled.div`
        padding:40px 10px;
        text-align:center;

        @media all and (min-width:510px){padding:90px 20px;}

        @media all and (min-width:1000px){
            width:1000px;
            margin:0 auto;
        }

        h1{
            font-family: "Playfair Display", serif;
            font-weight:800;
            font-size:1.25rem;
            padding-bottom:15px;
            color:#161616;

            @media all and (min-width:510px){
                font-size:1.8rem;
                padding-bottom:30px;
            }
        }

        p{
            font-family: "Work Sans", sans-serif;
            font-size:.8rem;
            padding-bottom:15px;
            line-height:1.4;
            color:#252525;

            @media all and (min-width:510px){
                font-size:.9rem;
                line-height:1.6;
                padding:0 60px 30px;
            }
        }
    `;

    return (
        <AboutAgency>
            <h1>About Our Agency</h1>
            <p>We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps. Clever use of technology and lean processes enable us to work faster and smarter</p>
            <img src={SignatureImg} alt="signature"></img>
        </AboutAgency>
    )
}
