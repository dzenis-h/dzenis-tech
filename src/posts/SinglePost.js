import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "./Blog_Init";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import Toggle from "../components/darkMode/ToggleContainer";
import { useTheme } from "../components/darkMode/useTheme";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main
      id="single-post"
      className={darkMode === "true" ? "dark-theme" : "white-theme"}
    >
      <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>

      <Link to="/post">
        <i
          id={darkMode === "true" ? "arrow-left" : "arrow-left-dark"}
          className="fas fa-arrow-left fa-2x redShaddow arrow-left"
        >
          <span className={darkMode === "true" ? "back-btn" : "back-btn-dark"}>
            {" "}
            Go back
          </span>
        </i>
      </Link>
      <article className="">
        <div className="">
          <h1 className="blog-title work-heading-segments redShaddow">
            {singlePost.title}
          </h1>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="blog-images center-image single-post-image"
            id={
              darkMode === "true"
                ? "single-post-image"
                : "single-post-image-dark"
            }
          />
        </div>
        <div className="">
          <BlockContent
            blocks={singlePost.body}
            projectId="beq9vr6s"
            dataset="production"
          />
        </div>
      </article>

      <div className="">
        <img
          src={urlFor(singlePost.authorImage).url()}
          alt={singlePost.name}
          className={
            darkMode === "true" ? "blog-author-image-dark" : "blog-author-image"
          }
        />
        <p
          className={
            darkMode === "true" ? "blog-author-name" : "blog-author-name-dark"
          }
        >
          {singlePost.name}
        </p>
      </div>
    </main>
  );
}
