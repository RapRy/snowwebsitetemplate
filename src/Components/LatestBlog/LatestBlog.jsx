import React, { Component } from 'react'

import styled from 'styled-components'

class LatestBlog extends Component {
    constructor(){
        super()
        this.blogs = [
            {
                image: "blog-nature-1.jpg",
                category: "Nature",
                title: "Something I need to tell you",
                date: "MAY 16, 2016",
                description: "Aliquam leo lacus, vehicula ac eros vel, imperdiet convallis tortor. Ut porta turpis id urna venenatis, ac egestas mauris euismod."
            },
            {
                image: "blog-branding-1.jpg",
                category: "Branding",
                title: "Are you doing the right way?",
                date: "MAY 28, 2016",
                description: "Aenean faucibus egestas egestas. Integer volutpat tellus vitae ligula mollis varius. Duis in eros malesuada, auctor diam ut, feugiat urna."
            },
            {
                image: "blog-design-1.jpg",
                category: "Design",
                title: "Why you should always first",
                date: "June 01, 2016",
                description: "Nulla id odio hendrerit, convallis mauris et, pellentesque ligula. Etiam venenatis eget felis eu aliquam. Pellentesque rhoncus odio eros, a vestibulum lectus porta ac."
            },
            {
                image: "blog-branding-2.jpg",
                category: "Branding",
                title: "Something I need to tell you",
                date: "MAY 16, 2016",
                description: "Aliquam leo lacus, vehicula ac eros vel, imperdiet convallis tortor. Ut porta turpis id urna venenatis, ac egestas mauris euismod."
            },
            {
                image: "blog-design-2.jpg",
                category: "Design",
                title: "Why you should always first",
                date: "June 01, 2016",
                description: "Nulla id odio hendrerit, convallis mauris et, pellentesque ligula. Etiam venenatis eget felis eu aliquam. Pellentesque rhoncus odio eros, a vestibulum lectus porta ac."
            },
            {
                image: "blog-nature-3.jpg",
                category: "Nature",
                title: "Something I need to tell you",
                date: "MAY 16, 2016",
                description: "Aliquam leo lacus, vehicula ac eros vel, imperdiet convallis tortor. Ut porta turpis id urna venenatis, ac egestas mauris euismod."
            },
            {
                image: "blog-city-1.jpg",
                category: "City",
                title: "Something I need to tell you",
                date: "MAY 16, 2016",
                description: "Aliquam leo lacus, vehicula ac eros vel, imperdiet convallis tortor. Ut porta turpis id urna venenatis, ac egestas mauris euismod."
            },
        ]
        this.blogsCont = []
        this.state = {
            blogsCont: [],
            bullets: []
        }
        // this.blogSlideRef = React.createRef()
        // this.blogBulletRef = React.createRef()
        this.slideRefs = []
        this.bulletRefs = []
        this.index = 0;
        this.blogSlide = React.createRef();
    }

    divideBlogs = () => {
        let bullets = [];
        let contLimit = 3;
        let divLimit = this.blogs.length / contLimit;
        let blogsCont = [];

        for(let i = 0; i < divLimit; i++){
            blogsCont.push(this.blogs.splice(0, contLimit))
            bullets.push(i);
        }

        this.setState({blogsCont, bullets}, () => {
            this.sliderFunction()
        })
    }

    sliderFunction(){    
        this.blogSlide.current.style.cssText = `height:${this.slideRefs[0].clientHeight + 70}px`;
        
        setInterval(() => {
            if(this.index >= this.bulletRefs.length){
                this.index = 0
            }else{
                this.slideRefs.forEach((slide) => slide.classList.remove("active"))
                this.bulletRefs.forEach((bullet) => bullet.classList.remove("activeBullet"))
                this.slideRefs[this.index].classList.add("active")
                this.bulletRefs[this.index].classList.add("activeBullet")
                this.blogSlide.current.style.cssText = `min-height:${this.slideRefs[this.index].clientHeight + 10}px`;
                this.index++
            }
        }, 5000)
    }

    clickHandler(i){
        this.slideRefs.forEach((slide) => slide.classList.remove("active"))
        this.bulletRefs.forEach((bullet) => bullet.classList.remove("activeBullet"))
        this.slideRefs[i].classList.add("active")
        this.bulletRefs[i].classList.add("activeBullet")
        this.index = i;
    }

    componentDidMount(){
        this.divideBlogs();
    }

    render() {
        const BlogContainer = styled.div`
            background-color:#ebebeb;
            border-bottom:1px solid #cfcfcf;

            .latestBlog{
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

                .blogHeading{
                    @media all and (min-width:510px){
                        padding-bottom:20px;
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
                        font-size:.8rem;
                        padding-bottom:15px;
                        line-height:1.4;
                        color:#252525;
                        font-family:"Work Sans", sans-serif;

                        @media all and (min-width:510px){
                            font-size:.9rem;
                        }
                    }
                }

                .blogSlide{
                    padding-bottom:10px;
                    position:relative;

                    @media all and (min-width:510px){
                        padding-bottom:20px;
                    }

                    .slide{
                        width:100%;
                        position:absolute;
                        top:0;
                        left:0;
                        opacity:0;
                        transition:opacity 500ms ease-in-out;

                        @media all and (min-width:700px){
                            display:grid;
                            grid-template-columns:repeat(3, 1fr);
                            grid-gap:20px;
                        }

                        &.active{
                            opacity:1;
                        }
                    }

                    .blogPost{
                        display:grid;
                        grid-template-columns:repeat(2, 1fr);
                        grid-gap:10px;
                        padding:5px;
                        background-color:#f6f6f6;
                        box-shadow:0px 0px 10px rgba(0,0,0,.2);
                        margin-bottom:10px;

                        @media all and (min-width:510px){
                            grid-template-columns:200px 1fr;
                        }

                        @media all and (min-width:700px){
                            grid-template-columns:1fr;
                            padding:10px;
                            align-content:start;
                        }

                        .postImgWrapper{
                            position:relative;
                            top:0;
                            left:0;

                            @media all and (min-width:700px){
                                height:180px;
                            }

                            img{
                                @media all and (min-width:700px){
                                    object-fit:cover;
                                    width:100%;
                                    height:100%;
                                }
                            }

                            span{
                                display:inline-block;
                                text-transform:uppercase;
                                position:absolute;
                                padding:5px;
                                bottom:9px;
                                right:5px;
                                font-family:"Work Sans", sans-serif;
                                font-weight:400;
                                color:#fff;
                                font-size:.7rem;
                                background:#252525;

                                @media all and (min-width:510px){
                                    font-size:.8rem;
                                }

                                @media all and (min-width:700px){
                                    font-size:.9rem;
                                    bottom:5px;
                                    padding:8px 12px;
                                }
                            }
                        }

                        .postDetails{
                            text-align:left;

                            h3{
                                font-family: "Playfair Display", serif;
                                font-size:1rem;
                                padding-bottom:5px;
                            }

                            span{
                                font-family: "Work Sans", sans-serif;
                                font-weight:600;
                                font-size:.7rem;

                                @media all and (min-width:510px){
                                    padding-bottom:10px;
                                    display:inline-block;
                                }
                            }

                            p{
                                display:none;

                                @media all and (min-width:510px){
                                    font-size: .8rem;
                                    font-family: "Work Sans", sans-serif;
                                    line-height: 1.4;
                                    display:block;
                                }

                                @media all and (min-width:700px){text-align:justify;}
                            }
                        }
                    }
                }

                .blogSlideBullet{
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
                            background:#252525;
                            width:8px;
                            height:8px;
                        }
                    }
                }
            }
        `;


        return (
            <BlogContainer>
                <div className="latestBlog">
                    <div className="blogHeading">
                        <h1>Latest Blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend tristique nisl at elementum. Maecenas vitae convallis ante, sit amet egestas ipsum.</p>
                    </div>
                    <div className="blogSlide" ref={this.blogSlide}>
                        {
                            this.state.blogsCont.map((cont, i) => {
                                return(
                                    <div className={`slide slide${i} ${(i === 0) ? "active" : ""}`} key={i} ref={slide => this.slideRefs.push(slide)}>
                                        {
                                            cont.map((blog, x) => {
                                                const { image, category, title, date, description } = blog;

                                                return(
                                                    <div className="blogPost" key={x}>
                                                        <div className="postImgWrapper">
                                                            <img src={require(`../../images/${image}`)} alt={category}/>
                                                            <span>{category}</span>
                                                        </div>
                                                        <div className="postDetails">
                                                            <h3>{title}</h3>
                                                            <span>{date}</span>
                                                            <p>{description}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="blogSlideBullet">
                        {
                            this.state.bullets.map((blog, i) => <span key={i} className={`${(i === 0) ? "activeBullet" : ""}`} ref={bullet => this.bulletRefs.push(bullet)} onClick={() => this.clickHandler(i)}></span>)
                        }
                    </div>
                </div>
            </BlogContainer>
        )
    }
}

export default LatestBlog
