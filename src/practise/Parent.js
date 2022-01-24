import React, { useState } from 'react';
import Child from './Child';

function Parent() {

    const title = 'our children are here';
    const description = 'we are practising';

    const [count, setCount] = useState(0);

    const handleDecrement = () => {
      setCount(count-1)   
    }
    const handleReset = () => {
            setCount(0)
    }
    const handleIncrement = () => {
        setCount(count+1)

    }


    return <div>
            <h1>
                parent component
            </h1>
            <Child 
                count= {count}
                handleDecrement={handleDecrement}
                handleReset={handleReset}
                handleIncrement={handleIncrement}
            />

    </div>;
    
}

export default Parent;
