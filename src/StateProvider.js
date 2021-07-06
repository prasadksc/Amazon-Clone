
import React, { createContext, useReducer, useContext } from 'react';


//create datalayer
export const StateContext = createContext();

//data provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//data pull from data layer
export const useStateValue = () => useContext(StateContext)