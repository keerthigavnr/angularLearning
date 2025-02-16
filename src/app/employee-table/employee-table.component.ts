import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent implements OnInit {
  @Input() data: Employee[] = [];
  @Output() edit = new EventEmitter<Employee>();
  @Output() view = new EventEmitter<Employee>();
  @Output() delete = new EventEmitter<Employee>();
  constructor() {}

  ngOnInit(): void {}

  onEdit(employee: Employee): void {
    this.edit.emit(employee);
  }

  onView(employee: Employee): void {
    this.view.emit(employee);
  }

  onDelete(employee: Employee): void {
    this.delete.emit(employee);
  }
}
