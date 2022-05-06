import PropTypes from "prop-types";

import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageContext";

function Image(props) {
  const [hovered, setHovered] = useState(false);
  const { changeFavorite, addToCart, imageOnCart, removeFromCart } = useContext(ImageContext);
  const isInCart = imageOnCart(props.img.id);

  function handleHover() {
    setHovered((prev) => !prev);
  }

  <i className="ri-heart-fill favorite"></i>;

  const favIcon = props.img.isFavorite ? (
    <i
      className="ri-heart-fill favorite"
      onClick={() => changeFavorite(props.img.id)}
    ></i>
  ) : (
    hovered && (
      <i
        className="ri-heart-line favorite"
        onClick={() => changeFavorite(props.img.id)}
      ></i>
    )
  );

  const cartIcon = isInCart ? (
    <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img.id)}></i>
  ) : (
    hovered && (
      <i
        className="ri-add-circle-line cart"
        onClick={() => addToCart(props.img.id)}
      ></i>
    )
  );

  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img className="image-grid" src={props.img.url} alt="" />
      {favIcon}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
