/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToDoComponent } from './to-do.component';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  
  let fixture: ComponentFixture<ToDoComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ToDoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    component.toDo = {date: new Date(), description: '', header: '',id: 0, state: ''}
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
