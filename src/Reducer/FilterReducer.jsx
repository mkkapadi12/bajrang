const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      //   console.log("priceArr :", priceArr);

      let maxPrice = Math.max(...priceArr);
      // console.log("maxPrice :", maxPrice);
      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice,
          Price: maxPrice,
        },
      };

    case "GRID_VIEW":
      return {
        ...state,
        Grid_View: true,
      };

    case "LIST_VIEW":
      return {
        ...state,
        Grid_View: false,
      };

    //set filter value

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      // console.log(value);
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    default:
      return state;
  }
};
export default FilterReducer;
