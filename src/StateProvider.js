import React , {useReducer, useContext} from "react"


const StateContext = React.createContext()

export function StateProvider({children, initialState, reducer}) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)