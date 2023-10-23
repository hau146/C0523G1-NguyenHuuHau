import {useState} from "react";

export function Counter(props){
    const [count, setCount] = useState(props);
    const increment = (amount) => {
        setCount(count + amount);
    };
    return [count, increment];
}