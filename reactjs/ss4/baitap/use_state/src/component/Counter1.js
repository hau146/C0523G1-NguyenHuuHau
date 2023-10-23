import * as useCounter  from "./Counter";
function Counter1() {
    const [count, setCount] = useCounter;

    return (
        <div>
            Count1: {count}
            <div>
                <button onClick={() => setCount + 1}>Click</button>
            </div>
        </div>
    );
}
export default Counter1;
