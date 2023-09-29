import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface LanguageTitles {
  spanish: string[];
  english: string[];
  french: string[];
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  passengerForm: FormGroup = new FormGroup({});
  showResults = false;
  formData: any;
  selectedLanguage = 'Español';


  languages = ['Spanish', 'English', 'French'];
  titlesByLanguage: LanguageTitles = {
    spanish: ['Sr.', 'Sra.', 'Srta.'],
    english: ['Mr.', 'Mrs.', 'Miss'],
    french: ['M.', 'Mme.', 'Mlle.']
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.passengerForm = this.fb.group({
      language: ['', Validators.required],
      title: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.passengerForm.valid) {
      this.showResults = true;
      this.formData = this.passengerForm.value;
    }
  }

  resetForm() {
    this.showResults = false;
    this.passengerForm.reset();
  }
}