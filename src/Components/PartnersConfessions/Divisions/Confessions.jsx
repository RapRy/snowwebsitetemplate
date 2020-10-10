import React, {useEffect, useState} from 'react'

import styled from 'styled-components'

import BgPattern from '../../../images/bg-pattern.jpg';

export default function Confessions() {
    const confessions = [
        {message: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.",
            author: "MICHAEL HOPKINS"},
        {message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptatem officiis voluptatum nam cumque nihil dolorem, praesentium enim? Quas, perspiciatis?",
            author: "sit amet consectetur"}
    ]

    const [height, setHeight] = useState(0);

    const confessionRefs = []

    const confessRef = React.createRef();

    const ConfessionsWrap = styled.div`
        padding:40px 10px;
        text-align:center;
        background:url(${props => props.bg}) no-repeat top center;

        .confessionsSlider{
            margin-bottom:30px;
            position:relative;
            min-height:${props => props.height}px;
        }

        .confessionSlide{
            width:100%;
            position:absolute;
            top:0;
            left:0;
            opacity:0;

            &.active{
                opacity:1;
            }

            p{
                font-family: "Playfair Display", serif;
                font-style:italic;
                line-height:1.6;
                font-size:.85rem;
                color:#fff;
                padding-bottom:10px;
                font-weight:400;
            }

            span{
                font-family: "Work Sans", sans-serif;
                font-size:.8rem;
                text-transform:uppercase;
                color:#fff;
            }
        }

        .confessionsSliderBullet{
            span{
                width:4px;
                height:4px;
                display:inline-block;
                background:#5f5f5f;
                border-radius:5px;
                vertical-align:middle;
                margin-right:5px;

                &:last-child{margin-right:0;}

                &.activeBullet{
                    background:#fff;
                    width:8px;
                    height:8px;
                }
            }
        }
    `;

    useEffect(() => {
        setHeight(confessionRefs[0].clientHeight)
    })

    return (
        <ConfessionsWrap bg={BgPattern} height={height}>
            <div className="confessionsSlider">
                {
                    confessions.map((confess, i) => {
                        return(
                            <div ref={confessRef => confessionRefs.push(confessRef)} key={i} className={`confessionSlide confessionSlide${i} ${(i === 0) ? "active" : ""}`}>
                                <p>{`" ${confess.message} "`}</p>
                                <span>{confess.author}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="confessionsSliderBullet">
                {
                    confessions.map((bullet, i) => <span key={i} className={`${(i === 0) ? "activeBullet" : ""}`}></span>)
                }
            </div>
        </ConfessionsWrap>
    )
}

