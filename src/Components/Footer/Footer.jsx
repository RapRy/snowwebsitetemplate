import React from 'react'

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGooglePlus, faBehance, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    const twits = [
        "Duis ullamcorper ut metus eu hendrerit. Quisque ultrices leo eget odio convallis.",
        "Aliquam leo lacus, vehicula ac eros vel, imperdiet convallis tortor.",
        "Duis in eros malesuada, auctor diam ut, feugiat urna."
    ]

    const instagram = [
        "instagram-1.jpg",
        "instagram-2.jpg",
        "instagram-3.jpg",
        "instagram-4.jpg",
        "instagram-5.jpg",
        "instagram-6.jpg",
        "instagram-7.jpg",
        "instagram-8.jpg"
    ];

    const FooterWrapper = styled.div`
        background-color:#161616;

        .social{
            text-align:center;
            padding:40px 10px;

            h4{
                font-weight:800;
                font-size:1rem;
                padding-bottom:15px;
                color:#fff;
                font-family: "Playfair Display", serif;
            }

            p{
                font-size:.8rem;
                padding-bottom:15px;
                line-height:1.4;
                color:#fff;
                font-weight:300;
                text-align:justify;
                font-family: "Work Sans", sans-serif;
            }

            .aboutUs{
                padding-bottom:20px;

                ul{
                    padding-top:10px;

                    li{
                        display:inline-block;
                        margin-right:15px;

                        &:last-child{
                            margin-right:0;
                        }

                        a{
                            color:#fff;
                            font-size:1.5rem;
                        }
                    }
                }
            }

            .latestTwits{
                padding-bottom:20px;

                .twits{
                    article{
                        display:grid;
                        grid-template-columns:auto 1fr;
                        grid-column-gap:15px;
                        padding-bottom:10px;

                        &:last-child{
                            padding-bottom:0;
                        }

                        svg{
                            color:#fff;
                            font-size:1rem;
                            align-self:center;
                            justify-self:end;
                        }

                        p{
                            padding-bottom:0px;
                            text-align:left;
                        }
                    }
                }
            }

            .instaImgs{
                display:grid;
                grid-template-columns:repeat(4, 1fr);
                grid-gap:5px;   
            }
        }

        .footer{
            border-top:1px solid #5f5f5f;
            padding:15px 0px;

            p{
                font-family: "Work Sans", sans-serif;
                text-align:center;
                font-size:.7rem;
                font-weight:400;
                color:#fff; 
            }
        }
    `;

    return (
        <FooterWrapper>
            <div className="social">
                <div className="aboutUs">
                    <h4>About Us</h4>
                    <p>Aliquam euismod consequat ex at blandit. Nam lectus odio, ultricies sed nibh id, convallis laoreet ipsum. Pellentesque nec nulla vulputate, tincidunt nibh porttitor, iaculis eros. Nunc id pulvinar dolor, et aliquam quam. Vestibulum dapibus arcu eget sem interdum rutrum. Praesent sagittis congue tellus porttitor blandit.</p>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
                <div className="latestTwits">
                    <h4>Latest Twits</h4>
                    <div className="twits">
                        {
                            twits.map((twit, id) => {
                                return(
                                    <article key={id}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <p>{twit}</p>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="instagram">
                    <h4>Instagram</h4>
                    <div className="instaImgs">
                        {
                            instagram.map((img, id) => <img src={require(`../../images/${img}`)} key={id} />)
                        }
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>© 2016. Created by Unvab.</p>
            </div>
        </FooterWrapper>
    )
}

export default Footer
