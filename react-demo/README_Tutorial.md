```JavaScript
/* export const ClickHandler=()=>{
    const clickHandler=()=> {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
} */
// Event handler receive the default args as event 
export const ClickHandler=()=>{
    const clickHandler=(event)=> {
        console.log('Button clicked', event)
    }
    const clickHandlerWithParameter=(event,count=1)=> {
        console.log('Button clicked', event, count)
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* It can be possible that we can pass the 2nd aguments and 1st arg is event. */}
            <button onClick={(event)=> clickHandlerWithParameter(event,5)}>Click 5</button>
        </div>
    )
}


```