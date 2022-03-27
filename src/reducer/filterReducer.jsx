export const filterReducer = (filterState, action) => {
    const initialState = {
        sortby:"",
        category:[],
        rating: "",
        range: 200
    }
    switch (action.type){
        case "SORT_BY":
            return {...filterState, sortby: action.payload}
        case "CATEGORY":
            const {category} = filterState
          return  category.includes(action.payload) ? {...filterState, category: category.filter(category => category!==action.payload)} :
           {...filterState, category: [...category, action.payload]} 
        case "RATING":
            return {...filterState, rating: action.payload}
        case "PRICE-RANGE":
            return {...filterState,range: action.payload }
        case "CLEAR":
            return initialState
        default:
           return filterState;
    }
}

