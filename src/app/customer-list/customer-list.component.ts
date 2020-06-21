import { Component, OnInit } from '@angular/core';
import { Customer } from '../store/models/customer.model';
import { Observable } from 'rxjs';
import { AppState } from '../store/models/app-state.model';
import { Store } from '@ngrx/store';
import {
  SelectCustomerAction,
  LoadCustomerAction,
} from '../store/actions/customer.action';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  public customerList$: Observable<Array<Customer>>;
  public loadingCustomer$: Observable<Boolean>;
  public error$: Observable<Error>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.customerList$ = this.store.select((store) => store.customer.list);
    this.loadingCustomer$ = this.store.select(
      (store) => store.customer.loading
    );
    this.error$ = this.store.select((store) => store.customer.error);

    this.store.dispatch(new LoadCustomerAction());
  }

  selectCustomer(customer: Customer): void {
    this.store.dispatch(new SelectCustomerAction(customer));
  }
}
