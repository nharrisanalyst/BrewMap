import {Suspense} from 'react'
import { PriceAddressFetch } from '../../list/PriceAddressList/PriceAddressFetch'





export function LoadCoffeeList():JSX.Element{
    
    return (
        <Suspense fallback={<LoadingCoffeList />}>
            <PriceAddressFetch />
        </Suspense>
    )
}


export function LoadingCoffeList():JSX.Element{
    return(
        <div className="rounded-t-lg max-w-sm overflow-scroll max-h-full border-t-2 border-l-2 border-r-2 border-gray-200 p-3 h-16">
            Fetching Coffee Locations...
        </div>
    )
}