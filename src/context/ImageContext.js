import { createContext, useEffect, useState } from "react";

const ImageContext = createContext();

function ImageContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function changeFavorite(id) {
    setAllPhotos((prev) => {
      return prev.map((data) => {
        return data.id === id
          ? { ...data, isFavorite: !data.isFavorite }
          : data;
      });
    });
  }

  function addToCart(id) {
    // setCartItems(prev => [...prev], allPhotos.find(photo => photo.id === id))
    const pic = allPhotos.find((photo) => photo.id === id);
    setCartItems((prev) => [...prev, pic]);
  }

  function removeFromCart(id){
    setCartItems(cart => cart.filter(item => item.id !== id))
  }

  function imageOnCart(id) {
    return cartItems.find((item) => item.id === id);
  }

  return (
    <ImageContext.Provider
      value={{ allPhotos, changeFavorite, cartItems, addToCart, imageOnCart, removeFromCart }}
    >
      {props.children}
    </ImageContext.Provider>
  );
}

export { ImageContextProvider, ImageContext };
