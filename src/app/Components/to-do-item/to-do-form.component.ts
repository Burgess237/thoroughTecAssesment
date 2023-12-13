import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToDo } from '../../Interfaces/toDo';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule]
})
export class ToDoFormComponent implements OnInit {

  toDoForm: FormGroup;

  @Output() submit = new EventEmitter<ToDo>();

  constructor(formBuilder: FormBuilder) {
    this.toDoForm = formBuilder.group({
      header: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
   }

  ngOnInit() {
  }

  submitForm(): void {
    let newToDo: ToDo = {...this.toDoForm.getRawValue(),
      date: new Date(),
      id: this.randomNumberGenerator(),
      state: 'Open'
    };
    this.submit.emit(newToDo);
    this.toDoForm.reset();
    this.toDoForm.updateValueAndValidity();
  }

  randomNumberGenerator() {
    return Math.floor((Math.random()*1000) + 1);
  }

}
