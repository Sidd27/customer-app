import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public customerList;
  public addressList;
  constructor(private service: CustomerService) {}

  ngOnInit(): void {
    this.service.getCustomers().subscribe((res) => {
      this.customerList = res;
    });
  }

  getCustomerAddress(id: number) {
    this.service.getCustomerAddress(id).subscribe((res) => {
      this.addressList = res;
    });
  }
}
