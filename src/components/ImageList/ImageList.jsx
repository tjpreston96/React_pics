import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return (
      <img key={id} alt={description} src={urls.small} />
    );
  });
  return (
    <div>
      ImageList <br />
      {images}
    </div>
  );
};

export default ImageList;
