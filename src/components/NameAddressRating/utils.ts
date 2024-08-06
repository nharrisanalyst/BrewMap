

export function formatAddress(add:string):string{
    add = add.replace(",","")
    const streetNumber = add.split(' ')[0]
    const streetName = add.split(' ')[1]
    const streetType = add.split(' ')[2];

    return streetNumber+ " "+streetName+" "+streetType+"...";
}