import { useTranslation } from 'react-i18next';

type MoneyProps = {
    price:number;
}

export function Money({price}:MoneyProps){
    const { t, i18n } = useTranslation();
    
    function formatPrice(price:number):string{
        return price.toPrecision(3).toString();
    }

    return(
       <div>
        <sup>{t('money')}</sup><span>{formatPrice(price)}</span>
       </div>
    )
}