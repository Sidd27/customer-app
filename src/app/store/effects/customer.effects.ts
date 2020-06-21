/*
    Dependencies
*/
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
/*
 * In project dependencies
 */
import { CustomerService } from 'src/app/services/customer.service';
import {
  LoadCustomerAction,
  CustomerActionTypes,
  LoadCustomerSuccessAction,
  LoadCustomerFailureAction,
  SelectCustomerAction,
} from '../actions/customer.action';

@Injectable()
export class CustomerEffects {
  @Effect() loadCustomer$ = this.actions$.pipe(
    ofType<LoadCustomerAction>(CustomerActionTypes.LOAD_CUSTOMER),
    mergeMap(() =>
      this.customerService.getCustomers().pipe(
        switchMap((data) => [
          new LoadCustomerSuccessAction(data),
          new SelectCustomerAction(data[0]),
        ]),
        catchError((error) => of(new LoadCustomerFailureAction(error.error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
