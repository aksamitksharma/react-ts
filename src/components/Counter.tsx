import { useReducer } from "react";

const initialState = {count:0};

type counterState = {
    count: number
}

type updatedAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type resetAction = {
    type: 'reset'
}

type counterAction = updatedAction | resetAction

function reducer(state: counterState, action:counterAction){
    switch(action.type){
        case "increment":
            return {count: state.count+action.payload}
        case "decrement":
            return {count: state.count-action.payload}
        case "reset":
            return initialState
        default:
            return state
    }
}

export const Counter = ()=> {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            count: {state.count}
            <button onClick={()=>dispatch({type: 'increment', payload: 10})}>
                Increment by 10
            </button>

            <button onClick={()=>dispatch({type: 'decrement', payload: 10})}>
            Decrement by 10
            </button>

            <button onClick={()=>dispatch({type: 'reset'})}>
            Reset
            </button>
        </>
    )
}