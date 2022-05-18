import {Get} from "../Adapter/Api.js"

export const getAllProductsList = {url:"Product",type:"get"}




export default class ProductService {
  searchAllProduct() {
    return Get(getAllProductsList);
  }
}
