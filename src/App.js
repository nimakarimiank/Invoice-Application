import "./AppImport.js";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.css";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "./Pages/Customer/CustomerPage";
import InvoicePage from "./Pages/Invoice/InvoicePage";
import ProductPage from "./Pages/Product/ProductPage";
import LoaderContextProvider from "./Contexts/LoaderContext.js";
import ProductListPage from "./Pages/Product/ProductListPage.js";
import ProductProvider from "./Contexts/ProductContext.js";
function App() {
  return (
    <>
      {" "}
      <ProductProvider>
        <LoaderContextProvider>
          <BrowserRouter>
            <Routes>
              {" "}
              <Route path="/" element={<Layout />}>
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/invoice" element={<InvoicePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/ProductList" element={<ProductListPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LoaderContextProvider>{" "}
      </ProductProvider>
    </>
  );
}

export default App;
