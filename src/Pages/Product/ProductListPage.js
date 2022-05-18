import "./product.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { ProductContex } from "../../Contexts/ProductContext";
import { useContext } from "react";
const ProductListPage = () => {
  const { productListState, SearchAllProductContext } =
    useContext(ProductContex);
  // useEffect(()=>{
  //   SearchAllProduct();
  // })
  const onGridReady = () => {
    SearchAllProductContext();
  };
  return (
    // <div className="productPage">
    //   <h4>لیست محصولات</h4>

    //   <Nav style={{ direction: "rtl" }} variant="tabs" defaultActiveKey="/">
    //     <Nav.Item>
    //       {" "}
    //       <Nav.Item>
    //         <Nav.Link eventKey="link-0">اطلاعات محصول </Nav.Link>

    //       </Nav.Item>
    //     </Nav.Item>
    //     <Nav.Item>
    //       {" "}
    //       <Nav.Item>
    //         <Nav.Link eventKey="link-1">تصاویر محصول</Nav.Link>
    //       </Nav.Item>
    //     </Nav.Item>
    //     <Nav.Item>
    //       {" "}
    //       <Nav.Item>
    //         <Nav.Link eventKey="link-2 ">گروه بندی محصول</Nav.Link>
    //       </Nav.Item>
    //     </Nav.Item>
    //   </Nav>
    // </div>

    <div
      className="ag-theme-alpine agRowStyle"
      style={{ height: 400, width: "100%" }}
    >
      <AgGridReact
        rowData={productListState}
        onGridReady={onGridReady}
        enableRtl
        rowSelection={"multiple"}
        rowMultiSelectWithClick={true}
        pagination={true}
        paginationPageSize={20}
      >
        <AgGridColumn field="productName" headerName="نام محصول"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
export default ProductListPage;
