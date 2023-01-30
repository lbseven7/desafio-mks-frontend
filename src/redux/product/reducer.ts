import { Product } from '../../interfaces/Product'

const initialState = {
  products: [],
}

interface IAction {
  type: string
  payload: Product[]
}

const productReducer = (state = initialState, action:IAction) => {
    if (action.type === 'SET_CURRENT_PRODUCT') {
      return {
      ...state,
      product: [...state.products, action.payload,]
      }
    }
    return state
}

export default productReducer