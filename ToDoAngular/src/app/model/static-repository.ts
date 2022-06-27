import { TodoItem } from './todo-item';

export class StaticRepository {
  user: String = 'Giacomo';
  items: TodoItem[] = [
    new TodoItem(1, 'Lunch break', true),
    new TodoItem(2, 'Quick Revision', true),
    new TodoItem(3, 'Afternoon break', false),
    new TodoItem(4, 'Publish online the project', false),
  ];
}
