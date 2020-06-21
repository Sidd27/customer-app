import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../store/models/customer.model';
import { Address } from '../store/models/address.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>('/api/customer');
  }

  getCustomerAddress(id: number): Observable<Array<Address>> {
    return this.http.get<Array<Address>>(`/api/customer/${id}/address`);
  }
}
