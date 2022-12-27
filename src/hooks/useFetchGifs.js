import { getGifs } from "../services/getGifs" //helper que conecta a la APi de ghifpy
import { useState,useEffect } from "react"

//Custom hook que se realiza un fetch
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    getGifs(category).then(newImages => setImages(newImages)) //getGifs es una promesa por eso usa then
    setIsLoading(false)

    //Otra forma de realizer esto es
    // const getImages = async () => setImages(await getGifs(category))
    // useEffect(() => { getImages() }, [])
  }, [])

  return {
    images,
    isLoading
  }
}

