import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddFormService } from '../../services/add-form.service';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

interface Option {
  id: number;
  optionText: string[];
}

interface Question {
  id : number;
  questionText: string;
  type: string;
  options?: Option[];
}

interface Form {
  title: string;
  description: string;
  questions: Question[];
}


@Component({
  selector: 'app-form-response',
  standalone: true,
  imports: [CommonModule,MatCard, MatCardModule, MatRadioButton, MatRadioGroup, MatLabel, MatCardModule, MatFormField, MatRadioButton, MatRadioGroup, MatLabel, MatInput, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatHint, MatFormFieldModule, FormsModule],
  templateUrl: './form-response.component.html',
  styleUrl: './form-response.component.scss'
})
export class FormResponseComponent implements OnInit {

  form: Form = {
    title: '',
    description: '',
    questions: []
  };

  responses: { [key: number]: string | Date } = {};

  constructor(private addFormService: AddFormService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.addFormService.getFormById(+id).subscribe(
        (data: Form) => {
          this.form = data;
          console.log('Form data:', this.form);
        },
        error => {
          console.error('Error fetching forms:', error);
        }
      );
    } else {
      console.error('No ID found in the URL');
    }
  }

  onSubmit() {
    console.log('Responses:', this.responses);
  }

}
