


export interface LocationType {
    lat:number;
    long:number;

}



const getCoords = async ():Promise<LocationType> => {
    const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    };
};

export const getLocation = async():Promise<LocationType> =>{
    const coords = await getCoords();
    return coords;
    
}