import { Action } from '@ngrx/store';
import { Address } from '../models/address.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AddressActionTypes {
  LOAD_ADDRESS = '[ADDRESS] Load Address List',
  LOAD_ADDRESS_SUCCESS = '[ADDRESS] Load Address Success',
  LOAD_ADDRESS_FAILURE = '[ADDRESS] Load Address Failure',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadAddressAction implements Action {
  readonly type = AddressActionTypes.LOAD_ADDRESS;

  constructor(public customerId: number) {}
}

export class LoadAddressSuccessAction implements Action {
  readonly type = AddressActionTypes.LOAD_ADDRESS_SUCCESS;

  constructor(public payload: Array<Address>) {}
}

export class LoadAddressFailureAction implements Action {
  readonly type = AddressActionTypes.LOAD_ADDRESS_FAILURE;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AddressActions =
  | LoadAddressAction
  | LoadAddressSuccessAction
  | LoadAddressFailureAction;
