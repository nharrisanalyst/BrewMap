import {CoffeeShopPriceProps, CoffeeShopPrice} from '../../components/CoffeeShopPrice';

export type PirceAddressListProps ={
    data:CoffeeShopPriceProps[],
}


export function PriceAddressList({data}:PirceAddressListProps):JSX.Element{
    return(
        <div className=' [&>:first-child]:rounded-t-lg  max-w-sm overflow-scroll max-h-full'>
            {
                data.map((d,i)=>( 
                    <div key={i} className='border-2  border-gray-200 p-3'>
                        <CoffeeShopPrice {...d} />
                    </div>
                ))
            }
        </div>      
    )
}