import { use, useEffect, useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Sahil");
    useEffect(() => {
        console.log("Count has been updated to:", count);
    }, [count]);
    useEffect(() => {
        console.log("Name has been updated to:", name);
    }, [name]);
    return(
        <div style={{padding:20}}>
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setName('mehta')}>Change Name</button>
        </div>
    );
}