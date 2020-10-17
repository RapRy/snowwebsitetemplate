import React from 'react'

import styled from 'styled-components'

import partner1 from '../../../images/partner-1.png';
import partner2 from '../../../images/partner-2.png';
import partner3 from '../../../images/partner-3.png';
import partner4 from '../../../images/partner-4.png';
import partner5 from '../../../images/partner-5.png';

export default function Partners() {
    const PartnersWrap = styled.div`
        padding:10px 10px 20px;

        @media all and (min-width:510px){
            padding:20px 15px;
        }

        ul{
            display:grid;
            grid-template-columns:repeat(6, 1fr);
            grid-gap:5px;

            li{
                :nth-child(1){grid-column: 1/3;}
                :nth-child(2){grid-column: 3/5;}
                :nth-child(3){grid-column: 5/7;}
                :nth-child(4){grid-column: 2/4;}
                :nth-child(5){grid-column: 4/6;}

                img{
                    @media all and (min-width:510px){
                        width:80%;
                    }
                }
            }
        }
    `;

    return (
        <PartnersWrap>
            <ul>
                <li><img src={partner4} alt="partner4"/></li>
                <li><img src={partner5} alt="partner5"/></li>
                <li><img src={partner3} alt="partner3"/></li>
                <li><img src={partner1} alt="partner1"/></li>
                <li><img src={partner2} alt="partner2"/></li>
            </ul>
        </PartnersWrap>
    )
}
