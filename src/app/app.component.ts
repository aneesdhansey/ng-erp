import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menuItems = [
    {
      category : 'Home',
      menuItems : [
        {title : "Dashboard", targetUrl : '/dashboard'}
      ]
    },
    {
      category : 'Inventory',
      menuItems : [
        {title : "Stock Items", targetUrl : '/inventory/stockitems'},
        {title : "Faulty Items", targetUrl : '/inventory/faultyitems'},
        {title : "Shipments", targetUrl : '/inventory/shipments'}
      ]
    },
    {
      category : 'Purchase',
      menuItems : [
        {title : "Vendors", targetUrl : '/purchase/vendors'},
        {title : "Purchase Orders", targetUrl : '/purchase/purchaseorders'},
        {title : "Purchase Invoices", targetUrl : '/purchase/purchaseinvoices'},
        {title : "Payments", targetUrl : '/purchase/payments'}
      ]
    },
    {
      category : 'Sales',
      menuItems : [
        {title : "Customers", targetUrl : '/sales/customers'},
        {title : "Sales Orders", targetUrl : '/sales/salesorders'},
        {title : "Sales Invoices", targetUrl : '/sales/salesinvoices'},
        {title : "Receipts", targetUrl : '/sales/receipts'}
      ]
    },
    {
      category : 'Accounts',
      menuItems : [
        {title : "Chart of Accounts", targetUrl : '/accounts/chartofaccounts'},
        {title : "Account Balances", targetUrl : '/accounts/accountbalances'}
      ]
    },
    {
      category : 'Human Resources',
      menuItems : [
        {title : "Employees", targetUrl : '/humanresources/employees'},
        {title : "Courses", targetUrl : '/humanresources/courses'}
      ]
    },
    {
      category : 'Administration',
      menuItems : [
        {title : "User Management", targetUrl : '/administration/usermanagement'},
        {title : "Menu Configurations", targetUrl : '/administration/menuconfigurations'},
        {title : "Tenant Settings", targetUrl : '/administration/tenantsettings'}
      ]
    }
  ];
}
