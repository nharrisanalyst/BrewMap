import { useTranslation } from 'react-i18next';
import { formatPrice } from './utils';



type MoneyProps = {
    price:number;
}

export function Money({price}:MoneyProps):JSX.Element{
    const { t } = useTranslation();
    
    return(
       <div className='font-black text-base'>
        <sup>{t('money')}</sup><span>{formatPrice(price)}</span>
       </div>
    )
}