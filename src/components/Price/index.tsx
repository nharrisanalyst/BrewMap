





export function Price({name,price, reporter}:PriceProps){

    return(
           <div className="flex">
            <div>{price}</div>
            <div>{name}</div>
            <div>{reporter}</div>


           </div>
    );
}