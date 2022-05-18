import { Nav } from "react-bootstrap";
import "../Product/product.css";
const ProductPage = () => {
  return (
    <div className="productPage">
      <h4>محصولات</h4>
      <Nav style={{ direction: "rtl" }} variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          {" "}
          <Nav.Item>
            <Nav.Link eventKey="link-0">اطلاعات محصول </Nav.Link>
          </Nav.Item>
        </Nav.Item>
        <Nav.Item>
          {" "}
          <Nav.Item>
            <Nav.Link eventKey="link-1">تصاویر محصول</Nav.Link>
          </Nav.Item>
        </Nav.Item>
        <Nav.Item>
          {" "}
          <Nav.Item>
            <Nav.Link eventKey="link-2 ">گروه بندی محصول</Nav.Link>
          </Nav.Item>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default ProductPage;
