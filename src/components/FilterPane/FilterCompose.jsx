import { useFilter } from "../../contexts/FilterContext"

const sortByPrice = ({sortby}, products) => {
    const sortedList = [...products]
    switch (sortby){
        case "HIGH-TO-LOW":
            return sortedList.sort((prod1, prod2) => prod2.price.discounted - prod1.price.discounted)
        case "LOW-TO-HIGH":
            return sortedList.sort((prod1, prod2) => prod1.price.discounted - prod2.price.discounted)
        default:
            return sortedList
    }
}

const filterByRating = ({rating}, products) => {
    return products.filter(product => product.rating >= rating)
}

const filterByCategory = ({category}, products) => {
    return category.length===0 ? products : products.filter(product => category.includes(product.categoryName))
}

const filterByPriceRange = ({range}, products) => {
    return products.filter(product => product.price.discounted<=range)
}

const applyFilters = (filterState, ...args)=>(products)=>{
    return args.reduce((acc,curr)=>{
        return curr(filterState, acc)
    },products)
}

export const getProductList =(filterState, products)=> applyFilters(
    filterState,
    sortByPrice,
    filterByRating,
    filterByCategory,
    filterByPriceRange
)(products)