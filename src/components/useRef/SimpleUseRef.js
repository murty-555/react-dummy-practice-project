import React, { useEffect, useRef, useState } from 'react'

const SimpleUseRef = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('')
    const countRef = useRef(0)
    const inputRef = useRef()
    const previousName = useRef('')
    const handleCount = () => {
        setCount(count + 1);
        countRef.current++;
        console.log('state ', count);
        console.log('ref ', countRef.current)
    }
    const focus = () => {
        inputRef.current.focus();
    }
    useEffect(() => {
        previousName.current = text
    },[text])
    
  return (
    <div>
        <h1>Simple useRef</h1>
        <p>Unlike state, useRef doesn't rerender the component</p>
        <p>Eg:</p>
        {/* if we replace count with countRef.current without state then it will not update count value here*/}
        <h4>Count: {count}</h4>
        <button onClick={handleCount}>Inc</button>
        <div>
            <h3>Focusing on input element when button clicks using useRef with ref attribute</h3>
            <input ref={inputRef} type='text' placeholder='Enter somenthing here' onChange={(e) => setText(e.target.value)}/>
            <p>You entered: {text}, but previously it is {previousName.current}</p>
            <button onClick={focus}>Click to focus</button>
        </div>
    </div>
  )
}

export default SimpleUseRef