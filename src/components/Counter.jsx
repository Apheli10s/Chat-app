import { useState } from "react";

export function Counter (props){
    const[count, setCount]= useState(props.initialValue);

   /* function handleClick () {
        setCount(count + 1);
        console.log(count)
    } */

    function handleClickminus(){
        setCount(count - props.step)   
    }

    function handleClickPlus(){
        setCount(count + props.step)
    }

    return (
        <div>
            <button onClick={handleClickminus}>-</button>
            {/* <button onClick={handleClick}>{count}</button> */}
            <span>{count.toFixed(props.precision) || 0}</span>   {/*/0 stavljamo 'ako precision nije definiran' u App.js */}

            <button onClick={handleClickPlus }>+</button>
        </div>
    );
}