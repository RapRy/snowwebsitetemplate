import React from 'react'

import styled from 'styled-components'

import Portfolio1 from '../../images/portfolio-1.jpg'
import Portfolio2 from '../../images/portfolio-2.jpg'
import Portfolio3 from '../../images/portfolio-3.jpg'
import Portfolio4 from '../../images/portfolio-4.jpg'
import Portfolio5 from '../../images/portfolio-5.jpg'
import Portfolio6 from '../../images/portfolio-6.jpg'
import Portfolio7 from '../../images/portfolio-7.jpg'
import Portfolio8 from '../../images/portfolio-8.jpg'
import Portfolio9 from '../../images/portfolio-9.jpg'

export default function BestProjects() {
    const BestProjectsCont = styled.div`
        padding:40px 10px;
        text-align:center;

        @media all and (min-width:510px){
            padding:60px 15px;
        }

        @media all and (min-width:700px){
            padding:90px 15px;
        }

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
                font-size:1.7rem;
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
            }
        }

        .projectsImg{
            @media all and (min-width:510px){
                display:grid;
                grid-template-columns:repeat(2,1fr);
                grid-auto-rows:180px;
                grid-gap:10px;

                .imgCont{
                    &:nth-child(1){
                        grid-column:1/2;
                        grid-row:1/2;
                    }

                    &:nth-child(2){
                        grid-column:2/3;
                        grid-row:1/span 2;
                    }

                    &:nth-child(3){
                        grid-column:1/2;
                        grid-row:2/3;
                    }

                    &:nth-child(6){
                        grid-column:1/2;
                        grid-row:3/span 2;
                    }

                    &:nth-child(7){
                        grid-column:1/2;
                        grid-row:5/span 2;
                    }

                    img{
                        object-fit:cover;
                        width:100%;
                        height:100%;
                    }
                }
            }

            @media all and (min-width:700px){
                grid-template-columns:repeat(3,1fr);
                grid-auto-rows:240px;
                grid-gap:15px;

                .imgCont{
                    &:nth-child(2){
                        grid-row:span 2;
                    }
    
                    &:nth-child(3){
                        grid-column: 3/4;
                        grid-row:1/2;
                    }
    
                    &:nth-child(6){
                        grid-column: 3/4;
                        grid-row:2/span 2;
                    }
    
                    &:nth-child(7){
                        grid-column: 1/2;
                        grid-row:3/span 2;
                    }
                }
            }
        }
    `;

    const images = [Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6, Portfolio7, Portfolio8, Portfolio9];

    return (
        <BestProjectsCont>
            <h1>Best Projects</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend tristique nisl at elementum. Maecenas vitae convallis ante, sit amet egestas ipsum.</p>
            <div className="projectsImg">
                {
                    images.map((img, i) => {
                        return(
                            <div className="imgCont" key={i}>
                                <img src={img} alt={`portfolio${i+1}`} />
                            </div>
                        )
                    })
                }
            </div>
        </BestProjectsCont>
    )
}
