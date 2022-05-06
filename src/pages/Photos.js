import { useContext } from "react";

import { ImageContext } from "../context/ImageContext";
import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(ImageContext);
  const imageEl = allPhotos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));
  return <main className="photos">{imageEl}</main>;
}

export default Photos;
