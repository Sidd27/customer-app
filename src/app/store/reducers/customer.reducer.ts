import { Customer } from '../models/customer.model';
import {
  CustomerActions,
  CustomerActionTypes,
} from '../actions/customer.action';

export interface CustomerState {
  list: Customer[];
  loading: boolean;
  error: Error;
  selected: Customer;
}

const initialState: CustomerState = {
  list: [],
  loading: false,
  error: undefined,
  selected: undefined,
};

export function CustomerReducer(
  state: CustomerState = initialState,
  action: CustomerActions
) {
  switch (action.type) {
    case CustomerActionTypes.LOAD_CUSTOMER:
      return {
        ...state,
        loading: true,
      };
    case CustomerActionTypes.LOAD_CUSTOMER_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case CustomerActionTypes.LOAD_CUSTOMER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CustomerActionTypes.SELECT_CUSTOMER:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
