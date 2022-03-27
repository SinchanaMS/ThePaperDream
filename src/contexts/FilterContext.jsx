import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext()

const initialState = {
    sortby:"",
    category:[],
    rating:"",
    range: 200
}

const FilterProvider = ({children}) => {
    const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
    
return(
    <FilterContext.Provider value={{filterState, filterDispatch}}>
        {children}
    </FilterContext.Provider>
)
}

const useFilter = () => useContext(FilterContext)

export {FilterProvider, useFilter}