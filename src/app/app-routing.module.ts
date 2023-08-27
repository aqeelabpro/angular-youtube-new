import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  { path: 'employees', component: EmployeesComponent, pathMatch: 'full' },
  {
    path: 'about/:id',
    component: AboutComponent,
    pathMatch: 'full',
  },

  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
