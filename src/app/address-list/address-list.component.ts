import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Address } from '../store/models/address.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.model';
import { LoadAddressAction } from '../store/actions/address.action';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public addressList$: Observable<Array<Address>>;
  public loadingAddress$: Observable<Boolean>;
  public error$: Observable<Error>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.addressList$ = this.store.select((store) => store.address.list);
    this.loadingAddress$ = this.store.select((store) => store.address.loading);
    this.error$ = this.store.select((store) => store.address.error);

    this.subscription = this.store
      .select((store) => store.customer.selected)
      .subscribe((customer) => {
        if (customer) {
          this.store.dispatch(new LoadAddressAction(customer.id));
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
