import { createContext, useState} from "react";

export const LoaderContext = createContext(null);

const LoaderContextProvider=({children})=>{
    const [load, setLoad] = useState(true);


    return (<LoaderContext.Provider value={{load , setLoad}}>
        {children}
    </LoaderContext.Provider>)
}
export default LoaderContextProvider;