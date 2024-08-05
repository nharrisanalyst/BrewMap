import StarRatings from 'react-star-ratings';

type NameAdressRatingProps ={
    name:string;
    rating?:number;
    ratings?:number;
    address:string;
}


export function NameAddressRating({name,rating,ratings,address}:NameAdressRatingProps){
       return(
        <div>
        <h4>{name}</h4>
        {ratings && rating?(
                <div>
                    <StarRatings
                    rating={rating}
                    />
                    <div className="">({ratings})</div>
                </div>
            ):null
        }
        <div>
            {address}
        </div>
        </div>
    )
}