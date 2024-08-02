import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatRadioButton } from '@angular/material/radio';

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
    MatRadioButton
  ],
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  questions: { text: string; options: string[]; answer: string }[] = [];

  addQuestion() {
    this.questions.push({ text: '', options: ['Option 1'], answer: '' });
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  addOption(questionIndex: number) {
    this.questions[questionIndex].options.push('New Option');
  }
}