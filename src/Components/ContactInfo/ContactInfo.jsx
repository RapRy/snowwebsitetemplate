import React, { Component } from 'react'

import styled from 'styled-components'

class ContactInfo extends Component {
    render() {
        const ContactContainer = styled.div`
            background:#ebebeb;

            .contactInfo{
                padding:40px 10px;
                text-align:center;

                .contactDetails{
                    padding-bottom:20px;

                    h1{
                        font-family: "Playfair Display", serif;
                        font-weight:800;
                        font-size:1.25rem;
                        padding-bottom:15px;
                        color:#161616;
                    }

                    p{
                        font-size:.8rem;
                        padding-bottom:15px;
                        line-height:1.4;
                        color:#252525;
                        text-align:justify;
                        font-family: "Work Sans", sans-serif;
                    }

                    ul{
                        text-align:left;

                        li{
                            font-size:.8rem;
                            font-family: "Work Sans", sans-serif;
                            padding-bottom:5px;
                            line-height:1.4;
                            color:#252525;

                            span{font-weight:600;}
                        }
                    }
                }

                .contactForm{
                    .formDiv{
                        padding-bottom:10px;

                        &:last-child{
                            padding-bottom:0;
                        }

                        input, textarea{
                            width:100%;
                            padding:8px;
                            font-size:.8rem;
                            color:#252525;
                            font-weight:600;
                            font-family: "Work Sans", sans-serif;
                            border:none;

                            &::placeholder{
                                font-weight:400;
                            }
                        }

                        textarea{
                            resize:none;
                        }

                        input[name=fullname]{
                            margin-bottom:10px;
                        }

                        input[type=button]{
                            background-color:#252525;
                            padding:16px 8px;
                            color:#fff;
                            font-weight:400;
                        }
                    }
                }
            }
        `;

        return (
            <ContactContainer>
                <div className="contactInfo">
                    <div className="contactDetails">
                        <h1>Contact Info</h1>
                        <p>Nullam magna lorem, rutrum quis nisi vitae, auctor mollis felis. Duis gravida pretium nulla vehicula lacinia. Nunc sodales dapibus sem, sed ultrices enim cursus a. Maecenas consequat commodo enim, at rhoncus purus lobortis nec. Proin rutrum diam eu velit sollicitudin vehicula. Nulla rutrum nunc elit, eu vehicula nunc pretium ut.</p>
                        <ul>
                            <li>
                                <span>Address:</span> 10111 Santa Monica Boulevard, LA
                            </li>
                            <li>
                                <span>Phone:</span> +44 987 065 908
                            </li>
                            <li>
                                <span>Email:</span> info@Example.com
                            </li>
                            <li>
                                <span>Fax:</span> +44 987 065 908
                            </li>
                        </ul>
                    </div>
                    <div className="contactForm">
                        <form>
                            <div className="formDiv">
                                <input type="text" name="fullname" placeholder="Your Name" />
                                <input type="email" name="email" placeholder="Your Email" />
                            </div>
                            <div className="formDiv">
                                <input type="text" name="title" placeholder="Your Title" />
                            </div>
                            <div className="formDiv">
                                <textarea name="comment" placeholder="Your Comment" cols="30" rows="10"></textarea>
                            </div>
                            <div className="formDiv">
                                <input type="button" value="SEND MESSAGE" />
                            </div>
                        </form>
                    </div>
                </div>
            </ContactContainer>
        )
    }
}

export default ContactInfo
