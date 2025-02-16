import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-employee-modal',

  templateUrl: './add-edit-employee-modal.component.html',
  styleUrl: './add-edit-employee-modal.component.scss',
})
export class AddEditEmployeeModalComponent implements OnInit {
  @Input() isEditMode: boolean = false;
  @Input() employee: Employee | null = null;
  @Output() save = new EventEmitter<Employee>();
  @Output() close = new EventEmitter<void>();
  employeeForm!: FormGroup;
  departments: string[] = [
    'Human Resources',
    'Information Technology',
    'Finance',
    'Marketing',
    'Operations',
    'Sales',
    'Research & Development',
    'Legal',
  ];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      doj: ['', Validators.required],
    });

    if (this.employee) {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave() {
    if (this.employeeForm.valid) {
      this.save.emit(this.employeeForm.value);
      this.close.emit();
    }
  }
  onClose() {
    this.close.emit();
  }
}
