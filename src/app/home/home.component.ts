import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  employeeData: Employee[] = [];
  isEditMode: boolean = false;
  isViewModalOpen: boolean = false;
  isAddEditModalOpen: boolean = false;
  selectedEmployee: Employee | null = null;
  constructor() {}
  ngOnInit(): void {}
  openAddModal(): void {
    this.isEditMode = false;
    this.selectedEmployee = null;
    this.isAddEditModalOpen = true;
    console.log('openAddModal()');
  }
  openEditModal(employee: Employee): void {
    this.isEditMode = true;
    this.selectedEmployee = employee;
    this.isAddEditModalOpen = true;
  }

  openViewModal(employee: Employee): void {
    this.selectedEmployee = employee;
    this.isViewModalOpen = true;
  }
  deleteEmployee(employee: Employee): void {
    this.employeeData = this.employeeData.filter((e) => e !== employee);
  }
  onSave(employee: Employee) {
    if (this.isEditMode) {
      const index = this.employeeData.findIndex((e) => e.id == employee.id);
      this.employeeData[index] = employee;
    } else {
      employee.id = this.employeeData.length + 1;
      this.employeeData.push(employee);
    }
    this.closeModals();
  }
  closeModals() {
    this.isAddEditModalOpen = false;
    this.isViewModalOpen = false;
  }
}
