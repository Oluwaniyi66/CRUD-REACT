import { createContext, useState } from "react";


// create the context and make it available globally by exporting it
export const CounterContext = createContext();

// now we create the context provider

const CounterContextProvider = ({children}) => {

    const [count, setcount] = useState(0);
    const increaseCount = () => {
        setcount(count+1);
    }
    const decreaseCount = () => {
        setcount(count-1);
    }
    const resetCount = () => {
        setcount(0);
    }

    const myBank = {
        count,setcount, increaseCount, decreaseCount, resetCount 
    }
    return(
        <CounterContext.Provider value={myBank}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;