import "./preloading.css";
// import { LoaderContext } from "../../Contexts/LoaderContext";
// import { useContext } from "react";
const PreloadingPage = () => {
  // const { setLoad, load } = useContext(LoaderContext);

  setTimeout(() => {
    // setLoad(!load);
  }, 5000);
  return (
    <>
      <div id="overlayer"></div>
      <div class="preloader">
        <div class="loader">
          <span class="loader-inner"></span>
        </div>
        <p>صفحه در حال بارگیری</p>
      </div>
    </>
  );
};
export default PreloadingPage;
