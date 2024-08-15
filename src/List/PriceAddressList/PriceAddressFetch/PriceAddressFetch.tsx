import {useEffect, useState} from 'react';
import { PriceAddressList } from '..'
import { CoffeeShopPriceProps } from '../../../components/CoffeeShopPrice'
import { getLocation, LocationType } from '../utils/locations'
import axios, { AxiosResponse } from 'axios'

type PAFResponseType  ={
    coffeedata:CoffeeShopPriceProps[]
}

export  function PriceAddressFetch():JSX.Element{
   const [data, setData] = useState<CoffeeShopPriceProps[]>([]) 
   const [status, setStatus] = useState<'isError'|'isLoading'|'success'|'idle'>('idle')
   useEffect(()=>{
      setStatus('isLoading');
      const fetchData = async() =>{
        try{
            const latLong:LocationType = await getLocation();
            const response: AxiosResponse<PAFResponseType>  = await axios.get('/list',{
                headers:{
                    'content-type': 'application/json'
                },
                data:{
                    ...latLong
                }
            });
           
            setData(response.data.coffeedata);
            setStatus('success');
        }catch(error){
            console.log('printed the main error', error);
            setStatus('isError');
        }
    }
    fetchData(); 
   },[])

   if(status =='isLoading'){
    return <LoadingCoffeList text={'Fetching Coffee Locations...'} />
   }
   if(status =='isError'){
    return <LoadingCoffeList text={'There was an Error Fetching Coffee Locations'} />
   }
   
   return(<PriceAddressList data={data} />)

}



export function LoadingCoffeList({text}:{text:string}):JSX.Element{
    return(
        <div className="rounded-t-lg max-w-sm overflow-scroll max-h-full border-t-2 border-l-2 border-r-2 border-gray-200 p-3 h-16">
            {text}
        </div>
    )
}