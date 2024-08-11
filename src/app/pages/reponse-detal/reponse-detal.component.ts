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
import { ViewreponseService } from '../../services/viewreponse.service';

interface Option {
  id: number;
  optionText: string[];
}

interface Question {
  id : number;
  questionText: string;
  type: string;
  responseText : string
  options?: Option[];
}

interface Form {
  formTitle: string;
  formDescription: string;
  questions: Question[];
}

@Component({
  selector: 'app-reponse-detal',
  standalone: true,
  imports: [CommonModule,MatCard, MatCardModule, MatRadioButton, MatRadioGroup, MatLabel, MatCardModule, MatFormField, MatRadioButton, MatRadioGroup, MatLabel, MatInput, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatHint, MatFormFieldModule, FormsModule],
  templateUrl: './reponse-detal.component.html',
  styleUrl: './reponse-detal.component.scss'
})
export class ReponseDetalComponent implements OnInit {

  form: Form = {
    formTitle: '',
    formDescription: '',
    questions: []
  };

  constructor(private viewresponse : ViewreponseService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.viewresponse.getreponses(+id).subscribe(
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

 

}
