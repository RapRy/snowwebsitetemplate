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

        this.setState({blogsCont, bullets})
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
                            font-size:1.75rem;
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

                    @media all and (min-width:510px){
                        padding-bottom:20px;
                    }

                    .slide{
                        display:none;

                        &.active{
                            display:block;
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

                        .postImgWrapper{
                            position:relative;
                            top:0;
                            left:0;

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
                    <div className="blogSlide">
                        {console.log(this.state.bullets)}
                        {
                            this.state.blogsCont.map((cont, i) => {
                                return(
                                    <div className={`slide slide${i} ${(i === 0) ? "active" : ""}`} key={i}>
                                        {
                                            cont.map((blog, x) => {
                                                const { image, category, title, date, description } = blog;

                                                return(
                                                    <div className="blogPost" key={x}>
                                                        <div className="postImgWrapper">
                                                            <img src={require(`../../images/${image}`)} />
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
                            this.state.bullets.map((blog, i) => <span key={i} className={`${(i === 0) ? "activeBullet" : ""}`}></span>)
                        }
                    </div>
                </div>
            </BlogContainer>
        )
    }
}

export default LatestBlog
