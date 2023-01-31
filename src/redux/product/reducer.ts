import { Product } from '../../interfaces/Product'

const initialState = {
  products: [],
}

interface IAction {
  type: string
  payload: Product[]
}

const productReducer = (state = initialState, action:IAction) => {
    if (action.type === 'ADD_PRODUCT') {
      return {
      ...state,
      products: action.payload
      // products: [...state.products, ...action.payload] ERRO
      }
    }
    return state
}

export default productReducer