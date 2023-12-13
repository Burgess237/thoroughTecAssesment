/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToDoFormComponent } from './to-do-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

describe('ToDoFormComponent', () => {
  let component: ToDoFormComponent;
  let fixture: ComponentFixture<ToDoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ToDoFormComponent, ReactiveFormsModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, BrowserAnimationsModule, CommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
