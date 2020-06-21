import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomerReducer } from './store/reducers/customer.reducer';
import { AddressReducer } from './store/reducers/address.reducer';
import { CustomerEffects } from './store/effects/customer.effects';
import { AddressEffects } from './store/effects/address.effects';

import { StoreModule } from '@ngrx/store';
import { LoaderComponent } from './loader/loader.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddressListComponent } from './address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCardComponent,
    AddressCardComponent,
    NavbarComponent,
    LoaderComponent,
    CustomerListComponent,
    AddressListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([CustomerEffects, AddressEffects]),
    StoreModule.forRoot({
      customer: CustomerReducer,
      address: AddressReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
