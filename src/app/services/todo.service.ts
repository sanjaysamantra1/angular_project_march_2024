import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: any;
  value: string;
}
const initialTodos = [
  { id: 1, value: 'Todo 1' },
  { id: 2, value: 'Todo 2' },
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoSubject = new BehaviorSubject<Todo[]>(initialTodos);
  readonly todoObs = this.todoSubject.asObservable();

  private todosArr: Todo[] = initialTodos;
  private currentId = 2;
  create(item: Todo) {
    item.id = ++this.currentId;
    this.todosArr.push(item);
    this.todoSubject.next([...this.todosArr]);
  }
  remove(id: number) {
    this.todosArr = this.todosArr.filter(todo => todo.id != id);
    this.todoSubject.next(Object.assign([], this.todosArr));
  }
}
