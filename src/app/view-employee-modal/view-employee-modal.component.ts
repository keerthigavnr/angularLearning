import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-view-employee-modal',

  templateUrl: './view-employee-modal.component.html',
  styleUrl: './view-employee-modal.component.scss',
})
export class ViewEmployeeModalComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
  onClose() {
    this.close.emit();
  }
}
