import React, { Fragment, useState } from "react";
import Modal from "react-awesome-modal";

const ImageComponent = ({ webp, jpg, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <picture>
        {/* If the browser supports WebP format use that*/}
        <source srcSet={webp} type="image/webp" />
        {/* If NOT use the regular JPG foramt insted*/}
        <source srcSet={jpg} type="image/jpeg" />
        {/* If the browser doesn't support the '<picture' tag use regular '<img> instead  */}
        <img
          style={{ cursor: "pointer" }}
          src={jpg}
          alt={title}
          onClick={() => setIsOpen(!isOpen)}
        />
      </picture>

      <Modal
        visible={isOpen}
        effect="fadeInUp"
        onClickAway={() => setIsOpen(!isOpen)}
      >
        <picture>
          <source srcSet={webp} type="image/webp" />
          <source srcSet={jpg} type="image/jpeg" />
          <img
            className="openImageModal"
            src={jpg}
            onClick={() => setIsOpen(!isOpen)}
            alt={title}
          />
        </picture>
      </Modal>
    </Fragment>
  );
};

export default ImageComponent;
