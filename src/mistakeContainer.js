import React, { useCallback, useEffect, useState } from 'react';


const initialCountValue = () => {
    console.log('Vay amk')
    return 0;
}

function UseStateMistake() {

    const [state, setState] = useState({
        name: 'Surname',
        surname: 'name',
        counter:  JSON.parse(window.localStorage.getItem('counter')) || 0,
    })


    const obs =() => {
        window.localStorage.setItem('counter', state.counter);
    };

    useEffect(()=> {
        obs();
    },[state.counter])

    useEffect(()=> {
        JSON.parse(window.localStorage.getItem('counter'))
    },[])

    let strCodeCorrect = `<button type='button' onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Inc Count</button>`;
    let strCodeWrong = `<button type='button' onClick={() => setCounter(() => counter + 1)}>Inc Count</button>`;

    // const [counter, setCounter] = useState(initialCountValue)
    return (
        <>
            <h2>
                useState() common Mistake
            </h2>
            <button type='button' onClick={() => setState((prevState) => ({...prevState, counter: prevState.counter + 1}))}>Inc Count</button>

            <div>
                {state.counter}
            </div>
            <div>
                <pre>Wrong: <code>{strCodeWrong}</code></pre>
                <hr />
                <p>Correct: <code>{strCodeCorrect}</code></p>
            </div>
        </>
    )
}

export default UseStateMistake;