import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = ( category ) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  
  useEffect( () => {

    getGifs( category )
        .then( imgs => {
          setTimeout(()=>{
            setState({
                data: imgs,
                loading: false
            });
          },3000)
        })

}, [category]);

  /* setTimeout(()=>{
     setState({
        data: [1,2,2,4],
        loading: false
      }  
     )
   },3000) */

  return state; //data :[] ,loading: true
};
