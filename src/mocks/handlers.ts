import { http, HttpResponse } from 'msw'
import {CoffeeShopPriceProps} from '../components/CoffeeShopPrice'
import data from '../List/PriceAddressList/priceAddressList.json'

// coffeelist params interface
interface CoffeeListParams{

}

interface GetCoffeeLocationsListRequestBody {
    lat:number;
    long:number;
}

interface GetCoffeeLocationsListResponseBody{
    coffeeList:CoffeeShopPriceProps[];
}

http.get<
CoffeeListParams,
GetCoffeeLocationsListRequestBody,
GetCoffeeLocationsListResponseBody,
'/list'
>('/list', async ({request}) => {

    const locationData = await request.json();
    locationData.lat
    
    return HttpResponse.json({
        coffeeList:data.args_1
    })
}) 