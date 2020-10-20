import React, {useEffect, useRef} from 'react'

import styled from 'styled-components'

import BgPattern from '../../../images/bg-pattern.jpg';

export default function Confessions() {
    const confessions = [
        {message: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.",
            author: "MICHAEL HOPKINS"},
        {message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis voluptatem officiis voluptatum nam cumque nihil dolorem, praesentium enim? Quas, perspiciatis?",
            author: "sit amet consectetur"}
    ]

    const confessionRef = useRef(null);
    const confessionSlider = useRef(null);

    const confessionRefs = []

    const confessionBullet = []

    let ind = 0;

    const ConfessionsWrap = styled.div`
        padding:40px 10px;
        text-align:center;
        background:url(${props => props.bg}) no-repeat top center;

        @media all and (min-width:510px){
            padding:40px 15px;
        }

        .confessionsSlider{
            margin-bottom:30px;
            position:relative;

            @media all and (min-width:1000px){
                width:1000px;
                margin:0 auto 30px;
                padding-left:80px;
                padding-right:80px;
            }
        }

        .confessionSlide{
            width:100%;
            position:absolute;
            top:0;
            left:0;
            opacity:0;
            transition:opacity 500ms ease-in-out;

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

                @media all and (min-width:510px){
                    font-size:1rem;
                    padding-bottom:20px;
                }

                @media all and (min-width:700px){
                    padding-left:60px;
                    padding-right:60px;
                }
            }

            span{
                font-family: "Work Sans", sans-serif;
                font-size:.8rem;
                text-transform:uppercase;
                color:#fff;

                @media all and (min-width:510px){
                    font-size:.9rem;
                }
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

    const clickHandler = (i, e) => {
        confessionRefs.forEach((confess) => confess.classList.remove("active"))
        confessionBullet.forEach((bullet) => bullet.classList.remove("activeBullet"))
        confessionRefs[i].classList.add("active")
        confessionBullet[i].classList.add("activeBullet")
        ind = 0
    }

    useEffect(() => {
        confessionSlider.current.style.cssText = `min-height:${confessionRefs[0].clientHeight}px`;

        setInterval(() => {
            if(ind >= confessionRefs.length){
                ind = 0
            }else{
                confessionRefs.forEach((confess) => confess.classList.remove("active"))
                confessionBullet.forEach((bullet) => bullet.classList.remove("activeBullet"))
                confessionRefs[ind].classList.add("active")
                confessionBullet[ind].classList.add("activeBullet")
                confessionSlider.current.style.cssText = `min-height:${confessionRefs[ind].clientHeight}px`;
                ind++
            }
        }, 5000)

    }, [])

    return (
        <ConfessionsWrap bg={BgPattern} ref={confessionRef}>
            <div className="confessionsSlider" ref={confessionSlider}>
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
                    confessions.map((bullet, i) => <span ref={confessBullet => confessionBullet.push(confessBullet)} onClick={(e) => clickHandler(i,e)} key={i} className={`${(i === 0) ? "activeBullet" : ""}`}></span>)
                }
            </div>
        </ConfessionsWrap>
    )
}

