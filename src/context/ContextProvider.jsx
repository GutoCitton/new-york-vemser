import { createContext, useState } from "react";

export const ContextProvider = createContext({});

function PagesProvider( {children} ) {
  const [news, setNews] = useState([]);
  const apiKey = '6oAAdyBTjZeLo1huPSHFZGzFl5fe8CJA'

  return (
    <ContextProvider.Provider value={{apiKey, news, setNews}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default PagesProvider;