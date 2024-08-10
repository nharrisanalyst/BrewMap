
export type MilesProps = {
    miles:number;
}


export function Distance({miles}:MilesProps):JSX.Element{
    
    function formatMiles(milesUn:number):string{
        return milesUn.toPrecision(2).toString()
    }
    
    return (
        <div className="bg-slate-200 text-xs w-[50px] h-4 flex items-center justify-center rounded-lg font-thin">
            {formatMiles(miles) + " " + "mi"}
        </div>
    )
}