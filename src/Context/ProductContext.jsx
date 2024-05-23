import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";
// import { SinglePro } from "../Data/SinglePro";

const ProductContext = createContext();
const API = "https://mocki.io/v1/9002e200-0d52-42a3-902a-2164d85fd476";

const initialState = {
  isError: false,
  isLoading: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      // const res = await axios.get(url);
      // const singleProduct = await res.data;
      const singleProduct = url;
      dispatch({ type: "SET_SINGLE_API_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

//custom hook

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProductContext };
