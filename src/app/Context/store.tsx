'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react'
import { CONST_PRODUCTS } from './constants';

type DataType = {
  firstName: string
}
// Code above are not required
type ProductDataType = {
  img: string,
  category: string,
  title: string,
  desc: string,
  price: string
}

interface ContextProps {
  userId: string,
  setUserid: Dispatch<SetStateAction<string>>,
  data: DataType[],
  setData: Dispatch<SetStateAction<DataType[]>>,
  // Code above are not required
  products: ProductDataType[],
  selectedProduct: ProductDataType[]
  setSelectedProduct: Dispatch<SetStateAction<ProductDataType[]>>,

}

const GlobalContext = createContext<ContextProps>({
  userId: '',
  setUserid: (): string => '',
  data: [],
  setData: (): DataType[] => [],
  products: [],
  selectedProduct: [],
  setSelectedProduct: (): ProductDataType[] => []
})

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [userId, setUserid] = useState('')
  const [data, setData] = useState<[] | DataType[]>([])
  // States above are not required
  const [selectedProduct, setSelectedProduct] = useState<ProductDataType[]>([]); 
  const products = CONST_PRODUCTS

  return (
    <GlobalContext.Provider value={{
      userId,
      setUserid,
      data,
      setData,
      // Code above are not required
      products,
      selectedProduct,
      setSelectedProduct
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)