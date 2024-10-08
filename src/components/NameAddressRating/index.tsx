import StarRatings from 'react-star-ratings';
import { Distance } from '../Distance';
import {formatAddress} from "./utils";

export type NameAddressRatingProps ={
    name:string;
    rating?:number;
    ratings?:number;
    address:string;
    miles:number;
}


export function NameAddressRating({name,rating,ratings,address,miles}:NameAddressRatingProps):JSX.Element{
       return(
        <div className="text-sm w-full">
        <div className="inline-flex items-center w-full">
            <h3 className='font-bold'>{name}</h3>
            <div className='flex justify-end flex-grow mr-1'>
            <Distance miles={miles} />
            </div>
        </div>
        {ratings && rating?(
                <div className="flex flex-row gap-1 leading-5 items-center">
                    <StarRatings
                    rating={rating}
                    starDimension="0.875rem"
                    starRatedColor="#ffd700"
                    />
                    <div className="text-xs self-end">({ratings})</div>
                </div>
            ):null
        }
        <div>
            {formatAddress(address)}
        </div>
        </div>
    )
}