import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["one punch","samurai x","dragon ball"]
 /*  const [categories, setCategories] = useState([
    "one punch",
    "samurai x",
    "dragon ball",
  ]); */

  const [categories, setCategories] = useState([
    "one punch"
  ])

//   const handleAdd = () => {
//     setCategories((cats) => [...cats, "hunter"]);
//     /* setCategories(["hunter",...categories,]) */
//     //otra forma de agregar otro elemento
//   };

  return (
    <>
      <h2>git expert app</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

      {/* <button onClick={() => handleAdd()}>Agregar</button> */}

      <ol>
        {categories.map((category) => 
          <GifGrid 
          key={category}
          category={category}/>)
        }
      </ol>
    </>
  );
};
