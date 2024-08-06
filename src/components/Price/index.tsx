import { Money } from './Money';


type PriceProps = {
    price:number;
    menuItem:string;
    reporter?:string;
}


export function Price({menuItem, price, reporter='BrewMapData'}:PriceProps){

    return(
           <div className="flex">
            <Money price={price} />
            <div>{menuItem}</div>
            <div>{reporter}</div>


           </div>
    );
}