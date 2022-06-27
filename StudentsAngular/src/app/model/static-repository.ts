import { Student } from './student';

export class StaticRepository {
  Students: Student[] = [
    new Student(1, 'Giacomo', 'Parlatoni', 'Magari', true),
    new Student(2, 'Giovanni', 'Graziano', 'Fisica', true),
    new Student(3, 'Francesca', 'Barchietto', 'Matematica', false),
    new Student(4, 'Lorenzo', 'Battisti', 'Informatica', true),
  ];
}
