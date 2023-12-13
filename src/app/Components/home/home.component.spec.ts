/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { ToDoService } from '../../Services/to-do.service';
import { ToDo } from '../../Interfaces/toDo';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToDoFormComponent } from '../to-do-item/to-do-form.component';
import { ToDoComponent } from '../to-do/to-do.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HomeComponent, CommonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get from service', () => {
  //   let mockObject: ToDo = {date: new Date(), description: '', header: '',id: 1, state: 'Open'};
  //   //Before
  //   component.filteredToDo$.subscribe(res => {
  //     expect(res.length).toBe(0);
  //   })
  //   //execute
  //   component.saveToDo(mockObject);
  //   //Check after
  //   component.filteredToDo$.subscribe(res => {
  //     expect(res.length).toBeGreaterThan(0);
  //   })
  // })

  /**saveToDo(event$: ToDo) {
   this.toDoService.addToDo(event$)
  }

  //Hand off to the state service;
  completeToDo($event: ToDo) {
    this.toDoService.completeToDo($event);
  }

  //Update in a new component?
  editToDo($event: ToDo) {
    console.log($event);
  } */
});
