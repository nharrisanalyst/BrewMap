import {formatAddress} from "./utils";

describe('test for formatAddress', ()=>{
    it('correctly formats long addresses', ()=>{
        const unformattedAddress = '325 Douglas Blvd, Roseville, CA 95678';
        const formatted = formatAddress(unformattedAddress);

        expect(formatted).toBe("325 Douglas Blvd...")
        
    })

})