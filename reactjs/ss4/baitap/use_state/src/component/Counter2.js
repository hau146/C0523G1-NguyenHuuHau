import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => {
        const newValue = count + 2;
        setCount(newValue);
    };

    return (
        <div>
            Count2: {count}
            <div>
                <button onClick={increase}>Click</button>
            </div>
        </div>
    );
}
export default Counter;
