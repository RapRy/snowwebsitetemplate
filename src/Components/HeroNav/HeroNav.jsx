import React, { useState, useRef, useEffect } from 'react'

import logoLight from '../../images/logo-light.png';
import heroBg from '../../images/hero-bg.jpg';

import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'

function HeroNav() {
    const [navToggle, setNavToggle] = useState(false);
    const navLinksRef = useRef(null);

    const clickHandler = (e) => {
        e.preventDefault();
        if(navToggle === false){
            setNavToggle(true)
        }else{
            setNavToggle(false)
        }
    }

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

            @media all and (min-width:701px){
                padding-bottom:20px;
            }

            img{
                justify-self:left;
                width:50%;

                @media all and (min-width:701px){
                    width:30%;
                }
            }

            .navigation{
                justify-self:right;


                a.burgerIcon{
                    display:block;
                    width:30px;
                    height:20px;
                    position:relative;
                    top:0;
                    right:0;
                    z-index:2;

                    @media all and (min-width:701px){
                        display:none;
                    }

                    span{
                        width:30px;
                        height:5px;
                        background-color:#fff;
                        position:absolute;
                        top:0;
                        left:0;
                        border-radius:2px;

                        &:nth-child(2){
                            top:10px;
                        }

                        &:nth-child(3){
                            top:${props => (props.navToggle) ? "5px" : "20px"};
                        }
                    }
                }

                .navlinks{         
                    background:#252525;
                    padding:80px 0 0;
                    position:absolute;
                    right:-1000px;
                    top:0;
                    width:60%;
                    height:100%;
                    text-align:right;

                    @media all and (min-width:701px){
                        display:block;
                        position:relative;
                        background:none;
                        padding:0;
                        width:100%;
                        height:100%;
                    }

                    li{
                        padding:0 10px 30px 20px;
                        text-align:left;

                        &:last-child{
                            padding-bottom:0;
                        }

                        @media all and (min-width:701px){
                            border-bottom:none;
                            display:inline-block;
                            padding:10px;
                        }

                        a{
                            font-size:1rem;
                            color:#fff;
                            font-family:"Work Sans", sans-serif;
                            font-weight:500;  

                            // @media all and (min-width:701px){
                            //     font-size:1rem;
                            //     color:#fff;
                            //     font-family:"Work Sans", sans-serif;
                            //     font-weight:500;
                            // }
                        }
                    }
                }
            }
        }

        .heroPhrase{
            padding:40px 0 50px;
            text-align:center;

            @media all and (min-width:701px){
                padding:200px 0 140px;
            }

            h5{
                font-family: "Work Sans", sans-serif;
                font-weight:700;
                color:#fff;
                font-size:.8rem;

                @media all and (min-width:701px){font-size:1.5rem;}
            }

            p{
                font-family: "Playfair Display", serif;
                font-weight:800;
                font-size:1.25rem;
                color:#fff;

                @media all and (min-width:701px){font-size:2.3rem;}

                span{display:block;}

                .headingItalic{
                    font-weight:600;
                    font-style:italic;
                }
            }
        }
    `;

    const animateUl = useSpring({right: navToggle ? "0px" : "-1000px", from:{right: "-1000px"}, config:{duration:200}})

    const animateSpan1 = useSpring({
        transform: navToggle ? "rotate(45deg)" : "rotate(0deg)",
        top: navToggle ? "5px" : "0px",

        from:{
            top:"0px",
            transform: "rotate(0deg)"
        },
        config:{duration:200}
    })

    const animateSpan2 = useSpring({opacity: navToggle ? 0 : 1, from:{opacity:1}, config:{duration:200}})

    const animateSpan3 = useSpring({
        transform: navToggle ? "rotate(-45deg)" : "rotate(0deg)",
        top: navToggle ? "5px" : "20px",

        from:{
            top:"20px",
            transform: "rotate(0deg)"
        },
        config:{duration:200}
    })

    useEffect(() => {

        window.addEventListener('resize', function(){
            if(window.matchMedia('(min-width:701px)').matches){
                navLinksRef.current.style.right = "0px";
            }else{
                navLinksRef.current.style.right = "-1000px";  
            }
        })

        if(window.matchMedia('(min-width:701px)').matches){
            navLinksRef.current.style.right = "0px";
        }else{
            navLinksRef.current.style.right = "-1000px";  
        }

    }, [navLinksRef])

    return (
        <HeroNavCont bg={heroBg} navToggle={navToggle}>
            <div className="logoNavCont">
                <img src={logoLight} alt=""/>
                <nav className="navigation">
                    <a href="#" className="burgerIcon" onClick={clickHandler}>
                        <animated.span style={animateSpan1}></animated.span>
                        <animated.span style={animateSpan2}></animated.span>
                        <animated.span style={animateSpan3}></animated.span>
                    </a>
                    <animated.ul className="navlinks" ref={navLinksRef} style={animateUl}>
                        <li><a href="#">WORK</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </animated.ul>
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