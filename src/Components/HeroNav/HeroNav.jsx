import React from 'react'

import logoLight from '../../images/logo-light.png';
import heroBg from '../../images/hero-bg.jpg';

import styled from 'styled-components'

function HeroNav() {
    const HeroNavCont = styled.div`
        background-image:url(${props => props.bg});
        background-size:cover;
        background-repeat:no-repeat;
        background-position:top center;

        .logoNavCont{
            display:grid;
            grid-template-columns:repeat(2, 1fr);
            align-items:center;
            padding:10px;

            img{
                justify-self:left;
                width:50%;
            }

            .navigation{
                justify-self:right;

                a.burgerIcon span{
                    width:30px;
                    height:5px;
                    display:block;
                    background-color:#fff;
                    margin-bottom:5px;
                    border-radius:2px;

                    &:last-child{margin-bottom:0;}
                }

                .navlinks{
                    display:none;
                    background:#252525;
                    padding:40px 0 0;
                    position:absolute;
                    right:0;
                    top:0;
                    width:60%;
                    height:100%;
                    text-align:right;
                }
            }
        }

        .heroPhrase{
            padding:40px 0 50px;
            text-align:center;

            h5{
                font-family: "Work Sans", sans-serif;
                font-weight:700;
                color:#fff;
                font-size:.8rem;
            }

            p{
                font-family: "Playfair Display", serif;
                font-weight:800;
                font-size:1.25rem;
                color:#fff;

                span{display:block;}

                .headingItalic{
                    font-weight:600;
                    font-style:italic;
                }
            }
        }
    `;

    return (
        <HeroNavCont bg={heroBg}>
            <div className="logoNavCont">
                <img src={logoLight} alt=""/>
                <nav className="navigation">
                    <a href="#" className="burgerIcon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <ul className="navlinks">
                        <li><a href="#">WORK</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <div className="heroPhrase">
                <h5>NEW BRANDING AGENCY</h5>
                <p>
                    <span>We are about to change the way</span>
                    <span className="headingItalic">you publish on web</span>
                </p>
            </div>
        </HeroNavCont>
    )
}

export default HeroNav;