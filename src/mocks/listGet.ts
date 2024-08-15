import { http, HttpRequestHandler, HttpResponse } from 'msw'

import {CoffeeShopPriceProps} from '../components/CoffeeShopPrice'
import data from '../list/PriceAddressList/priceAddressList.json';
import {LocationType} from '../list/PriceAddressList/utils/locations'

// coffeelist params interface
interface CoffeeListParams {

}

interface GetCoffeeLocationsListRequestBody {
    data:LocationType;
    
}

interface GetCoffeeLocationsListResponseBody{
    coffeedata:CoffeeShopPriceProps[];
}

export const handlers=[ 
    http.get<
        CoffeeListParams,
        GetCoffeeLocationsListRequestBody,
        GetCoffeeLocationsListResponseBody,
        '/list'
    >('/list', async () => {
        
        return HttpResponse.json({
            "coffeedata":data.args_1
        })
    }),
]