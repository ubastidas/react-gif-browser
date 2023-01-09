import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return(                
        <>
            { isLoading && <div>Cargando..</div> }
            <h3>{ category }</h3>
            <div key={category} >{category}</div>
            <div className="card-grid">
                {
                    images.map(( image ) => (
                        <GifItem key={ image.id } { ...image } />
                    ))
                }
            </div>          
        </>

    )
}
