import { Action } from '@ngrx/store';
import { Customer } from '../models/customer.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum CustomerActionTypes {
  LOAD_CUSTOMER = '[CUSTOMER] Load Customer List',
  LOAD_CUSTOMER_SUCCESS = '[CUSTOMER] Load Customer Success',
  LOAD_CUSTOMER_FAILURE = '[CUSTOMER] Load Customer Failure',
  SELECT_CUSTOMER = '[CUSTOMER] Select Customer'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadCustomerAction implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER;
}

export class LoadCustomerSuccessAction implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;

  constructor(public payload: Array<Customer>) {}
}

export class LoadCustomerFailureAction implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_FAILURE;

  constructor(public payload: string) {}
}

export class SelectCustomerAction implements Action {
  readonly type = CustomerActionTypes.SELECT_CUSTOMER;

  constructor(public payload: Customer) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type CustomerActions =
  | LoadCustomerAction
  | LoadCustomerSuccessAction
  | LoadCustomerFailureAction
  | SelectCustomerAction;

