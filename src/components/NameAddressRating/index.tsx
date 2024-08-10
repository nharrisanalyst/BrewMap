import StarRatings from 'react-star-ratings';
import {formatAddress} from "./utils";

export type NameAddressRatingProps ={
    name:string;
    rating?:number;
    ratings?:number;
    address:string;
}


export function NameAddressRating({name,rating,ratings,address}:NameAddressRatingProps):JSX.Element{
       return(
        <div className="text-sm">
        <h3 className='font-bold'>{name}</h3>
        {ratings && rating?(
                <div className="flex flex-row gap-1 leading-5">
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