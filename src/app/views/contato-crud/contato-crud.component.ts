import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-crud',
  templateUrl: './contato-crud.component.html',
  styleUrls: ['./contato-crud.component.css']
})
export class ContatoCrudComponent {

  constructor(private router: Router) {}

  navigateToContatoRead(): void {
    this.router.navigate(['/contatos']);
  }

}
