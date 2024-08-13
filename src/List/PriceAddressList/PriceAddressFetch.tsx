import {useEffect, useState} from 'react';
import { PriceAddressList } from '.'
import { CoffeeShopPriceProps } from '../../components/CoffeeShopPrice'
import { getLocation, LocationType } from '../../Suspense/LoadCoffeeList/utils/locations'
import axios, { AxiosResponse } from 'axios'

export  function PriceAddressFetch():JSX.Element{
   const [data, setData] = useState<CoffeeShopPriceProps[]>([]) 
   useEffect(()=>{
      const fetchData = async() =>{
        try{
            const latLong:LocationType = await getLocation();
            const response: AxiosResponse<CoffeeShopPriceProps[]>  = await axios({
                method:'post',
                url:'/list',
                data:latLong,
            });
            setData(response.data);
        }catch(error){

        }
    }
    fetchData(); 
   },[])
   return (<><PriceAddressList data={data} /></>)

}