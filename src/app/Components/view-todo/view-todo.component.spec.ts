/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewTodoComponent } from './view-todo.component';

describe('ViewTodoComponent', () => {
  let component: ViewTodoComponent;
  let fixture: ComponentFixture<ViewTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ViewTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
