import React from 'react'

import styled from 'styled-components'

import BgPattern from '../../../images/bg-pattern.jpg';

export default function Partners() {
    const ConfessionsWrap = styled.div`
        padding:40px 10px;
        text-align:center;
        background:url(${props => props.bg}) no-repeat top center;
    `;

    return (
        <ConfessionsWrap bg={BgPattern}>
            <div className="confessionsSlider">
                <div className="confessionSlide">
                    <p>"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap."</p>
                    <span>MICHAEL HOPKINS</span>
                </div>
            </div>
            <div className="confessionsSliderBullet">
                <span className="activeBullet"></span>
                <span></span>
            </div>
        </ConfessionsWrap>
    )
}
