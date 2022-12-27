import { useFetchGifs } from "../hooks/useFetchGifs" //Custom hook contiene llamada fetch y loader
import { GifItem } from "./GifItem"  //Componente mas pequeño muestra 10 gifs resultados de la busqueda.            

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{ category }</h3>
      { isLoading && (<h2>Cargando....</h2>) }
      <div className="card-grid">
        { images.map(image => <GifItem key={ image.id } { ...image } />) }
      </div>
    </>
  )
}
