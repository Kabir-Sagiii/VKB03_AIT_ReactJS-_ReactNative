import {createContext} from "react"

export const ProductsContext = createContext<undefined | {state:{id:number,images:[string],category:string,price:number,title:string},setState:any}>(undefined)