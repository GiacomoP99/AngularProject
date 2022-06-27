import { Component } from '@angular/core';
import { StaticRepository } from './model/static-repository';
import { TodoItem } from './model/todo-item';

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

  addActivity(elem: HTMLInputElement) {
    if (elem.value != '') {
      this.repository.items.push(
        new TodoItem(this.repository.items.length + 1, elem.value, false)
      );
    }
    elem.value = '';
  }
}
