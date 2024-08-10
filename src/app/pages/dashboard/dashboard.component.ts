import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AddFormService } from '../../services/add-form.service';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatTableModule, ClipboardModule, MatIconModule, MatIconButton, MatSnackBarModule, MatButton],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  forms: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'details', 'link'];

  constructor(private addFormService: AddFormService, private clipboard: Clipboard, private snackBar: MatSnackBar, private router: Router) {}
  
  ngOnInit() {
    this.addFormService.getAllForms().subscribe(
      (data: any[]) => {
        this.forms = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  copyLink(id: string) {
    const link = `http://localhost:4200/form-response/${id}`;
    this.clipboard.copy(link);
    this.snackBar.open('Lien copié dans le clipboard', 'Fermer', {
      duration: 2000,
    });
    //console.log(`${link}`);
  }

  reviewForm(id: string) {
    this.router.navigate([`/form-details/${id}`]);
  }

}
