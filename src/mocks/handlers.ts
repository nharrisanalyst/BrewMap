import { http, HttpResponse } from 'msw'
import {CoffeeShopPriceProps} from '../components/CoffeeShopPrice'
import data from '../list/PriceAddressList/priceAddressList.json'
import {LocationType} from '../Suspense/LoadCoffeeList/utils/locations'

// coffeelist params interface
interface CoffeeListParams {

}

interface GetCoffeeLocationsListRequestBody extends LocationType {
    
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