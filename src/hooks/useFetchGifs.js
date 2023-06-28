import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const[isLoading, setIsLoading] = useState (true);
    
    const getImges = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImges();
    }, []);


    
    return{
        images,
        isLoading
    }
}

export default useFetchGifs
