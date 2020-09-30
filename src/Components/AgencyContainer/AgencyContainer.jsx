import React from 'react'

import styled from 'styled-components'

import BgPattern from '../../images/bg-pattern.jpg';

import { BusinessCenterOutlined, AccessTimeOutlined, StarBorderOutlined, FavoriteBorderOutlined } from '@material-ui/icons'

export default function AgencyContainer() {
    const AgencyContainer = styled.div`
        background:url(${props => props.bgPattern}) no-repeat top center;

        .agencyIcons{
            padding:40px 10px;
            text-align:center;
            display:grid;
            grid-template-columns:repeat(2, 1fr);
            grid-gap:5px;
        }
    `;

    const AgencyIcon = styled.div`
        color:#fff;
        padding-bottom:20px;

        &:nth-child(3){padding-bottom:0;}
        &:nth-child(4){padding-bottom:0;}

        .iconFontsize{
            font-size:2rem;
        }

        .iconText{
            padding-top:5px;

            span{
            font-family: "Work Sans", sans-serif;
            display:block;
            font-size:.75rem;

            &:first-child{
                font-size:.8rem;
                font-weight:600;
            }
            }
        }
    `;
    return (
        <AgencyContainer bgPattern={BgPattern}>
            <div className="agencyIcons">

                <AgencyIcon>
                    <BusinessCenterOutlined className="iconFontsize" />
                    <div className="iconText">
                    <span>548</span>
                    <span>PROJECTS COMPLETED</span>
                    </div>
                </AgencyIcon>

                <AgencyIcon>
                    <AccessTimeOutlined className="iconFontsize" />
                    <div className="iconText">
                    <span>1465</span>
                    <span>WORKING HOURS</span>
                    </div>
                </AgencyIcon>

                <AgencyIcon>
                    <StarBorderOutlined className="iconFontsize" />
                    <div className="iconText">
                    <span>612</span>
                    <span>POSITIVE FEEDBACKS</span>
                    </div>
                </AgencyIcon>

                <AgencyIcon>
                    <FavoriteBorderOutlined className="iconFontsize" />
                    <div className="iconText">
                    <span>735</span>
                    <span>HAPPY CLIENTS</span>
                    </div>
                </AgencyIcon>

            </div>
        </AgencyContainer>

    )
}