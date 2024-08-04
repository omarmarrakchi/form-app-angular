import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AddFormService } from '../../services/add-form.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  forms: any[] = [];
  displayedColumns: string[] = ['title', 'description'];

  constructor(private addFormService: AddFormService) {}
  
  ngOnInit() {
    this.addFormService.getAllForms().subscribe(
      (data: any[]) => {
        this.forms = data;
      },
      error => {
        console.error('Error fetching forms:', error);
      }
    );
  }

}
