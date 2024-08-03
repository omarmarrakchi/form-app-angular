import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';

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
    MatSelectModule
  ],
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  questions: { text: string; options: string[]; answer: string, type: 'radio' }[] = [];

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
}