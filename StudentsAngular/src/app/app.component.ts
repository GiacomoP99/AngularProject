import { Component } from '@angular/core';
import { StaticRepository } from './model/static-repository';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  repository: StaticRepository;

  constructor() {
    this.repository = new StaticRepository();
  }

  addStudent(
    name: HTMLInputElement,
    surname: HTMLInputElement,
    degree: HTMLInputElement,
    hired: HTMLInputElement
  ) {
    if (name.value != '' && surname.value != '' && degree.value != '') {
      this.repository.Students.push(
        new Student(
          this.repository.Students.length + 1,
          name.value,
          surname.value,
          degree.value,
          hired.checked
        )
      );
      name.value = '';
      surname.value = '';
      degree.value = '';
      hired.checked = false;
    }
  }
}
