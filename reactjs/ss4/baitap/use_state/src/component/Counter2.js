import { useState } from "react";
import * as useCounter from "./Counter";
function Counter2() {
    const [count, setCount] = useCounter;

    return (
        <div>
            Count2: {count}
            <div>
                <button onClick={() => setCount + 2}>Click</button>
            </div>
        </div>
    );
}
export default Counter2;
