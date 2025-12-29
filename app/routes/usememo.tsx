import { useMemo, useState } from "react";

export default function useMemoExample(){
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);
    const heavycul = useMemo(() => {
        console.log("Heavy Calculation");
        let adds = 0;
        for(let i=0; i<10000; i++){
            adds += i;
        }
        return adds + add;
    }, [add]);
    return(
       <>
       {heavycul}
       <h1>Learning useMemo Hook</h1>
       <button onClick={() => setAdd(add + 1)}>Add</button>{add}
       <br />
       <button onClick={() => setMinus(minus - 1)}>Minus</button>{minus}
       </>
    );
}