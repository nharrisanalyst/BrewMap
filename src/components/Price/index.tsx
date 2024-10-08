import { Money } from './Money';


export type PriceProps = {
    price:number;
    menuItem:string;
    reporter?:string;
}


export function Price({menuItem, price, reporter='BrewMapData'}:PriceProps):JSX.Element{

    return(
           <div className="flex flex-col items-center ">
            <div className='*:-ml-2 *:leading-5 *:text-2xl'><Money price={price} /></div>
            <div className='font-normal text-sm leading-3 text-slate-700'>{menuItem}</div>
            <div className='font-extralight text-tiny leading-4 text-slate-400'>{reporter}</div>


           </div>
    );
}