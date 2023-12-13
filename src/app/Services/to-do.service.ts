import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from '../Interfaces/toDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private toDo$: BehaviorSubject<any[]> = new BehaviorSubject([null])

  constructor() { }

  getToDo() {
    return this.toDo$.asObservable();
  }

  addToDo(todo: ToDo) {
    let array = this.toDo$.value;
    if(array[0] === null) {
      array = [todo];
    } else {
      array.push(todo);
    }
    this.toDo$.next(array);
  }

  completeToDo(toDo: ToDo) {
    let array = this.toDo$.value
    const index = array.findIndex(res => res.id = toDo.id);
    array[index].state = 'Complete';
    this.toDo$.next(array);
  }

}
