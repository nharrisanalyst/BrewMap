import type { ComponentProps } from "react";
import { Image } from "@unpic/react";


export type BrewImageProps = {
    alt:string;
    src:string;
    height?:number;
    width?:number;
    layout?:ComponentProps<typeof Image>["layout"];
}


export function BrewImage({src, alt, height=100, width=100, layout="constrained"}:BrewImageProps){
    return( 
    <div className="w-[35px] h-[35px] rounded-full border-sky-950 border">
        <Image 
        src={src}
        layout={layout}
        width={width}
        height={height}
        alt={alt}
        style={{'border-radius':'9999px'}}

        />
    </div>
    )
}

