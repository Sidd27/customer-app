import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get('/api/customer');
  }

  getCustomerAddress(id: number) {
    return this.http.get(`/api/customer/${id}/address`);
  }
}
