import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEditEmployeeModalComponent } from './add-edit-employee-modal/add-edit-employee-modal.component';
import { ViewEmployeeModalComponent } from './view-employee-modal/view-employee-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EmployeeTableComponent,
    AddEditEmployeeModalComponent,
    ViewEmployeeModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
