import {useEffect, useState} from 'react';
import { PriceAddressList } from '.'
import { CoffeeShopPriceProps } from '../../components/CoffeeShopPrice'
import { getLocation, LocationType } from './utils/locations'
import axios, { AxiosResponse } from 'axios'

type PAFResponseType  ={
    coffeedata:CoffeeShopPriceProps[]
}

export  function PriceAddressFetch():JSX.Element{
   const [data, setData] = useState<CoffeeShopPriceProps[]>([]) 
   const [isLoading, setIsLoading] =useState<boolean>(true);
   useEffect(()=>{
      const fetchData = async() =>{
        try{
            const latLong:LocationType = await getLocation();

            console.log('just more useless troubleshooting', latLong)
            const response: AxiosResponse<PAFResponseType>  = await axios.get('/list',{
                headers:{
                    'content-type': 'application/json'
                },
                data:{
                    ...latLong
                }
            });
           
            setData(response.data.coffeedata);
            setIsLoading(false);
        }catch(error){
            setIsLoading(true);
        }
    }
    fetchData(); 
   },[])
   return (isLoading?(<LoadingCoffeList />):(<PriceAddressList data={data} />))

}



export function LoadingCoffeList():JSX.Element{
    return(
        <div className="rounded-t-lg max-w-sm overflow-scroll max-h-full border-t-2 border-l-2 border-r-2 border-gray-200 p-3 h-16">
            Fetching Coffee Locations...
        </div>
    )
}