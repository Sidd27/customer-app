import { Address } from '../models/address.model';
import { AddressActions, AddressActionTypes } from '../actions/address.action';

export interface AddressState {
  list: Address[];
  loading: boolean;
  error: Error;
}

const initialState: AddressState = {
  list: [],
  loading: false,
  error: undefined,
};

export function AddressReducer(
  state: AddressState = initialState,
  action: AddressActions
) {
  switch (action.type) {
    case AddressActionTypes.LOAD_ADDRESS:
      return {
        ...state,
        loading: true,
      };
    case AddressActionTypes.LOAD_ADDRESS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case AddressActionTypes.LOAD_ADDRESS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
