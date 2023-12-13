import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../../Interfaces/toDo';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  standalone: true,
  imports: [MatCardModule, DatePipe, MatButtonModule, CommonModule]
})
export class ToDoComponent implements OnInit {

  @Input() toDo!: ToDo;
  @Output() onEdit = new EventEmitter<ToDo>();
  @Output() onComplete = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.onEdit.emit(this.toDo);
  }

  complete() {
    this.onComplete.emit(this.toDo);
  }


}
