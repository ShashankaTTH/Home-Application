import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addhome',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './addhome.component.html',
  styleUrl: './addhome.component.css'
})
export class AddhomeComponent implements OnInit{
  homeForm: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.homeForm = this.fb.group({
      id: [null, Validators.required],
      home: [''],
      name: [''],
      des: [''],
      owner: [''],
      location: [''],
      contact: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.homeForm.valid) {
      const formData = this.homeForm.value;
      console.log(formData);
      // You can now send this data to your backend or handle it as needed
    } else {
      // Handle form validation errors
    }
  }
}

