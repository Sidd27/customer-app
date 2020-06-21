/*
    Dependencies
*/
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
/*
 * In project dependencies
 */
import { CustomerService } from 'src/app/services/customer.service';
import {
  LoadAddressAction,
  AddressActionTypes,
  LoadAddressSuccessAction,
  LoadAddressFailureAction,
} from '../actions/address.action';

@Injectable()
export class AddressEffects {
  @Effect() loadAddress$ = this.actions$.pipe(
    ofType<LoadAddressAction>(AddressActionTypes.LOAD_ADDRESS),
    mergeMap((data) =>
      this.customerService.getCustomerAddress(data.customerId).pipe(
        map((data) => new LoadAddressSuccessAction(data)),
        catchError((error) => of(new LoadAddressFailureAction(error.error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
