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

        h1{
            font-family: "Playfair Display", serif;
            font-weight:800;
            font-size:1.25rem;
            padding-bottom:15px;
            color:#161616;
        }

        p{
            font-family: "Work Sans", sans-serif;
            font-size:.8rem;
            padding-bottom:15px;
            line-height:1.4;
            color:#252525;
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
