import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./Blog_Init";

import Toggle from "../components/darkMode/ToggleContainer";
import { useTheme } from "../components/darkMode//useTheme";
import { Wrapper } from "../components/darkMode/Wrapper";

export default function Post() {
  const [postData, setPost] = useState(null);
  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <div className={darkMode === "true" ? "dark-theme" : ""}>
      <Wrapper>
        <main
          id="blog"
          className={darkMode === "true" ? "dark-theme" : "white-theme"}
        >
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
          <h1 className="lg-heading textShadow">
            <span className={darkMode === "true" ? "white" : "heading-about"}>
              My
            </span>
            <i
              className={
                darkMode === "true"
                  ? "specialColor custom-text"
                  : "dark-heading gold-headings"
              }
            >
              {" "}
              Blog
            </i>
          </h1>
          <section className="">
            <div className="blog-flex">
              {postData &&
                postData.map((post, index) => (
                  <article className="blog-article" key={index}>
                    <Link
                      to={"/post/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <span className="blog-list" key={index}>
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt}
                          className={
                            darkMode === "true"
                              ? "blog-author-image-dark"
                              : "blog-author-image"
                          }
                        />
                        <h3
                          className={
                            darkMode === "true"
                              ? "custom-text"
                              : "post-title-dark"
                          }
                        >
                          {post.title}
                        </h3>
                      </span>
                    </Link>
                  </article>
                ))}
            </div>
          </section>
        </main>
      </Wrapper>
    </div>
  );
}
