import { createContext, useState } from "react";

export const ContextProvider = createContext();

function PagesProvider( {children} ) {
  const [page, setPage] = useState('');
  const apiKey = '6oAAdyBTjZeLo1huPSHFZGzFl5fe8CJA'

  return (
    <ContextProvider value={{page, setPage, apiKey}}>
      {children}
    </ContextProvider>
  )
}

export default PagesProvider;