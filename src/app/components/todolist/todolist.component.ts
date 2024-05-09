import { Component } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todos: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) {
  }
  ngOnInit() {
    this.todos = this.todoService.todoObs;
  }
  deleteTodo(id: any) {
    this.todoService.remove(id)
  }
}
