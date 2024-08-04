import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AddFormService } from '../../services/add-form.service';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatRadioModule,
    MatOption,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInput,
  ],
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  formTitle: string = '';
  formDescription: string = '';
  questions: { text: string; options: string[]; answer: string, type: 'radio' | 'input' }[] = [];

  constructor(private addFormService: AddFormService) {}

  addQuestion() {
    this.questions.push({ text: '', options: ['Option 1'], answer: '', type: 'radio' });
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  addOption(questionIndex: number) {
    this.questions[questionIndex].options.push('New Option');
  }

  removeOption(questionIndex: number, optionIndex: number) {
    this.questions[questionIndex].options.splice(optionIndex, 1);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  onSubmit() {
    const formData = {
      title: this.formTitle,
      description: this.formDescription,
      questions: this.questions.map(question => ({
        questionText: question.text,
        type: question.type,
        options: question.type === 'radio' ? question.options.map(option => ({ optionText: option })) : []
      }))
    };
  
    console.log('Form Data:', formData);
  
    this.addFormService.addForm(formData).subscribe(
      response => {
        console.log('Response from server:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}