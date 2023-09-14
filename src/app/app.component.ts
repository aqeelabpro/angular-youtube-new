import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesComponent } from './employees/employees.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Comments } from './comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employees = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Smith' },
  ];

  components = [
    { id: 1, name: EmployeesComponent },
    { id: 2, name: DynamicFormComponent },
  ];

  // pages = [
  //   { title: 'home', component: HomeComponent },
  //   { title: 'employees', component: EmployeesComponent },
  //   { title: 'dynamic Form', component: DynamicFormComponent },
  // ];
  // showProducts: boolean = true;
  // toggleProductsView() {
  //   this.showProducts = !this.showProducts;
  // }
  // isLoggedIn: boolean = false;
  // toggleUserAuthentication() {
  //   this.isLoggedIn = !this.isLoggedIn;
  // }
  // showAdditionalInformation: boolean = false;
  // products = [
  //   {
  //     id: 1,
  //     name: 'Samsung',
  //     price: '$1000',
  //     tags: ['smart phone', 'mobile phone '],
  //   },
  //   {
  //     id: 2,
  //     name: 'Apple',
  //     price: '$1400',
  //     tags: ['smart phone', 'mobile phone '],
  //   },
  // ];
  // showAdditionalData() {
  //   this.showAdditionalInformation = !this.showAdditionalInformation;
  // }
  // @ViewChild('home') home!: HomeComponent;
  // @ViewChild('paragraph', { static: true })
  // paragraph!: ElementRef;
  // saveInputData(value: any) {
  //   console.log('value of the input element ' + value);
  // }
  // users: any[] = [];
  // constructor(private backendService: BackendService) {}
  // ngAfterViewInit(): void {
  //   console.log(this.home);
  // }
  // getData() {
  //   this.backendService.getData().subscribe((users: any) => {
  //     console.log(users);
  //     this.users = users;
  //   });
  // }
  // formGroup!: FormGroup;
  // ngOnInit(): void {
  //   console.log(
  //     'Paragraph Element ' + JSON.stringify(this.paragraph.nativeElement)
  //   );
  //   this.getData();
  //   this.formGroup = new FormGroup({
  //     name: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', Validators.required),
  //   });
  // }
  // saveData(data: any) {
  //   console.log(data);
  // }
  // get name() {
  //   return this.formGroup.get('name');
  // }
  // get email() {
  //   return this.formGroup.get('email');
  // }
  // get password() {
  //   return this.formGroup.get('password');
  // }
  // print(value: any) {
  //   console.log(value);
  // }
}
