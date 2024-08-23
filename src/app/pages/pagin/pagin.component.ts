import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagin',
  standalone: true,
  templateUrl: './pagin.component.html',
  styleUrls: ['./pagin.component.css']
})
export class PaginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("myform")?.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      
      const li = document.createElement('li');
      li.textContent = `Nombre: ${name}, Email: ${email}`;

      document.getElementById('formData')?.appendChild(li);

      (document.getElementById("name") as HTMLInputElement).value = '';
      (document.getElementById("email") as HTMLInputElement).value = '';
    });
  }
}
