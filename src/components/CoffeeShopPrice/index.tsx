import {BrewImage, BrewImageProps} from '../BrewImage';
import { NameAddressRating, NameAddressRatingProps } from '../NameAddressRating';
import { Distance, MilesProps} from '../Distance';
import { PriceProps, Price} from '../Price';

export type CoffeeShopPriceProps ={
    ImageProps:BrewImageProps;
    NameAddressRatingsProps:NameAddressRatingProps;
    DistanceProps:MilesProps;
    PriceProps:PriceProps;

}


export function CoffeeShopPrice ({ImageProps, NameAddressRatingsProps, PriceProps}:CoffeeShopPriceProps):JSX.Element{
    return(
        <div className='flex flex-nowrap max-w-sm w-full'>
            <div className="w-[45px] flex items-center">
            <BrewImage
                alt={ImageProps.alt}
                src={ImageProps.src}
            />
            </div>
            <div className="flex-grow flex items-center">
            <NameAddressRating
                name={NameAddressRatingsProps.name}
                address={NameAddressRatingsProps.address}
                miles={NameAddressRatingsProps.miles}
                ratings={NameAddressRatingsProps?.ratings}
                rating={NameAddressRatingsProps?.rating}
            />
            </div>
            <div className="w-1/4 flex items-center border-black justify-end">
            <Price
                price={PriceProps.price}
                menuItem={PriceProps.menuItem}
                reporter={PriceProps.reporter}

            />
            </div>
        </div>

    )
}


