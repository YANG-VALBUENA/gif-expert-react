import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category, onRemoveCategory}) => {
    
    const {images, isLoading} = useFetchGifs(category);


    return (
        <>
            <div className="category-header">
                <h3>{ category }</h3>
                <button onClick={() => onRemoveCategory(category)}>
                    Eliminar
                </button>
            </div>


            {
               isLoading && (<h2>Cargando...</h2>)
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }    
           </div>
        </>
    )
}
