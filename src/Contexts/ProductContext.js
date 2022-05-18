import { createContext, useReducer } from "react";
import ProductService from "../Backend/Services/ProductService";
import ProductReducer from "../Reducers/ProductReducer";

const initialProductState = {
  productListModel: [],
};
export const ProductContex = createContext(null);

const productinstance = new ProductService();

const ProductProvider = ({ children }) => {
  const [productState, dispatch] = useReducer(
    ProductReducer,
    initialProductState
  );
  const { productListModel } = productState;
  const SearchAllProductContext = async () => {
    try {
      const getproductList = await productinstance.searchAllProduct();
      dispatch({ type: "setProductList", payload: getproductList });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <ProductContex.Provider
      value={{ productListModel, SearchAllProductContext }}
    >
      {children}
    </ProductContex.Provider>
  );
};
export default ProductProvider;
