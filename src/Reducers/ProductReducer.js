const ProductReducer = (state, action) => {
  switch (action.type) {
    case "setProductList": {
      return { ...state, productListModel: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ProductReducer;
