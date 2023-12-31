
import GrifItem from './GrifItem';
import useFetchGifs from '../hooks/useFetchGifs';




export const GifGrind = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            
            {
                isLoading && (<h2>Cargando..</h2>)
                
            }
            

            <div className='card-grid'>

                {
                    images.map((image) => (
                        <GrifItem
                            key={image.id}
                            {...image} />
                            
                    ))
                }

            </div>

        </>
    )
}


