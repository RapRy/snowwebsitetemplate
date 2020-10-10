import React, { Component } from 'react'

import styled from 'styled-components'

class LatestBlog extends Component {
    render() {
        const BlogContainer = styled.div`
            background-color:#ebebeb;
            border-bottom:1px solid #cfcfcf;

            .latestBlog{
                padding:40px 10px;
                text-align:center;

                .blogHeading{
                    h1{
                        font-family: "Playfair Display", serif;
                        font-weight:800;
                        font-size:1.25rem;
                        padding-bottom:15px;
                        color:#161616;
                    }

                    p{
                        font-size:.8rem;
                        padding-bottom:15px;
                        line-height:1.4;
                        color:#252525;
                        font-family:"Work Sans", sans-serif;
                    }
                }

                .blogSlide{
                    padding-bottom:10px;

                    .blogPost{
                        display:grid;
                        grid-template-columns:repeat(2, 1fr);
                        grid-gap:10px;
                        padding:5px;
                        background-color:#f6f6f6;
                        box-shadow:0px 0px 10px rgba(0,0,0,.2);
                        margin-bottom:10px;

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
                            }

                            p{
                                display:none;
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

        const blogs = [
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
            }
        ]

        return (
            <BlogContainer>
                <div className="latestBlog">
                    <div className="blogHeading">
                        <h1>Latest Blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend tristique nisl at elementum. Maecenas vitae convallis ante, sit amet egestas ipsum.</p>
                    </div>
                    <div className="blogSlide">
                        {
                            blogs.map((blog, i) => {
                                const { image, category, title, date, description } = blog;

                                return(
                                    <div className="blogPost">
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
                    <div className="blogSlideBullet">
                        {
                            blogs.map((blog, i) => <span key={i} className={`${(i === 0) ? "activeBullet" : ""}`}></span>)
                        }
                    </div>
                </div>
            </BlogContainer>
        )
    }
}

export default LatestBlog
