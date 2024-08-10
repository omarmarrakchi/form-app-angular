import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { FormDetailsService } from '../../services/form-details.service';


@Component({
  selector: 'app-form-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule],
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.scss'
})
export class FormDetailComponent implements OnInit {

  formId: string = '';
  responses: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private formDetailsService: FormDetailsService
  ) {}

  ngOnInit(): void {
    this.formId = this.route.snapshot.paramMap.get('id')!;
    this.loadFormResponses();
  }

  loadFormResponses(): void {
    this.formDetailsService.getFormResponses(this.formId).subscribe(
      (data) => {
        this.responses = data;
      },
      (error) => {
        console.error('Error fetching form responses', error);
      }
    );
  }

  viewResponse(responseId: string): void {
    // Logic to view the response details
    console.log('View response', responseId);
  }

}
