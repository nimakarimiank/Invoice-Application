import "./AppImport.js";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.css";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "../src/Pages/Customer/CustomerPage";
import InvoicePage from "../src/Pages/Invoice/InvoicePage";
import ProductPage from "../src/Pages/Product/ProductPage";
import LoaderContextProvider from "./Contexts/LoaderContext.js";

function App() {
  return (
    <>
      {" "}
      <LoaderContextProvider>
        <BrowserRouter>
          <Routes>
            {" "}
            <Route path="/" element={<Layout />}>
              <Route path="/customer" element={<CustomerPage />} />
              <Route path="/invoice" element={<InvoicePage />} />
              <Route path="/product" element={<ProductPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderContextProvider>
    </>
  );
}

export default App;
