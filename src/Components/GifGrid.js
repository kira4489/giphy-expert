import React from "react";
import { GridItem } from "./GridItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  /* const [counts,setCounts]=useState(0) */
  // const [images,setImages]=useState([])

  // useEffect(()=>{
  //  getGifs(category)
  //  /* .then(imgs=>setImages(imgs)) */
  //  .then(setImages)
  // },[category])

  /* const getGifs = async() => {
const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=W9lzd20ZUMcW0YG3ntVBABpVh0RqpQvB`
const resp = await fetch(url)
const {data} = await resp.json()

const gifs = data.map(img=>{
    return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }
})
console.log(gifs)
setImages(gifs)
} */

  return (
    <>
      <h3 className="text-title">{category}</h3>
      <div className="card-grid">
        {loading && <p>loading</p>}
          {images.map((img) => (
            <GridItem key={img.id} {...img} />
          ))}
      </div>
      {/* {loading ? "cargando..." : "fin carga"} */}
    </>
  );
};
