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


export function CoffeeShopPrice ({ImageProps, NameAddressRatingsProps,DistanceProps, PriceProps}:CoffeeShopPriceProps):JSX.Element{
    return(
        <div>
            <BrewImage
                alt={ImageProps.alt}
                src={ImageProps.src}
            />
            <NameAddressRating
                name={NameAddressRatingsProps.name}
                address={NameAddressRatingsProps.address}
            />
            <Distance
            miles={DistanceProps.miles}
            />
            <Price
                price={PriceProps.price}
                menuItem={PriceProps.menuItem}
                reporter={PriceProps.reporter}

            />
        </div>

    )
}


