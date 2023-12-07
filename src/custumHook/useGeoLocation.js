import { useState } from 'react';

export default function useGeoLocation() {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPosition = () => {
        
        if(!navigator.geolocation)
        return setError('Your browser doesnt support it')
        navigator.geolocation.getCurrentPosition(
            (Pos)=>{
            setIsLoading(true)
            setPosition({
                lat: Pos.coords.latitude,
                lon : Pos.coords.longitude
            });
            setIsLoading(false);

        },
         (error)=>{
            setError(`Error getting geolocation: ${error.message}`);
            setIsLoading(false)
        });
    };

    // const Pos = (pos) => {
    //     setIsLoading(true);
    //     setPosition({
    //         lat: pos.coords.latitude,
    //         lon: pos.coords.longitude
    //     });
    //     setIsLoading(false);
    // };

    // const Eror = (error) => {
    //     setError(error.message);
    //     setIsLoading(false);
    // };

    return { position, error, isLoading ,getPosition};
}
