import { CustomerState } from '../reducers/customer.reducer';
import { AddressState } from '../reducers/address.reducer';

export interface AppState {
  readonly customer: CustomerState;
  readonly address: AddressState;
}
