import { useRef, useState } from "react";

export default function RefExample(){
    const nameRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("Sahil");
    // console.log("nameRef current:", nameRef.current);
    function focusInput(){ 
        if (nameRef.current) {
            nameRef.current.style.color = "blue";
            nameRef.current.style.backgroundColor = "lightgray";
            nameRef.current.focus();
        } 
    };
    return(
       <>
       <h1>Learing useRef Hook</h1>
         <input ref={nameRef} type="text" value={name} onChange={e => setName(e.target.value)} />
         <button onClick={focusInput}>Focus Input</button>
       </>
    );
}