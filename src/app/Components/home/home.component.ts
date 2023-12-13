import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Observable, filter, map } from 'rxjs';
import { ToDoFormComponent } from '../to-do-item/to-do-form.component';
import { ToDo } from '../../Interfaces/toDo';
import { ToDoService } from '../../Services/to-do.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ToDoComponent } from '../to-do/to-do.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, ToDoFormComponent, AsyncPipe, ToDoComponent, JsonPipe, CommonModule],

})
export class HomeComponent implements OnInit {

  filteredToDo$: Observable<any>;

  constructor(private titleService: Title, private router: Router, public toDoService: ToDoService) { 
   this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(res => {
     this.titleService.setTitle(this.getTitle(this.router.routerState.root));
   })
   this.filteredToDo$ = this.toDoService.getToDo().pipe(filter(res => res !== null))
  }

  ngOnInit() {

  }

  
  //Add to the end of the array
  saveToDo(event$: ToDo) {
   this.toDoService.addToDo(event$)
  }

  //Hand off to the state service;
  completeToDo($event: ToDo) {
    this.toDoService.completeToDo($event);
  }

  //Update in a new component?
  editToDo($event: ToDo) {
    console.log($event);
  }

  getTitle(route: ActivatedRoute) {
    let routeTitle = '';
    while(route!.firstChild) {
      route = route.firstChild;
    }
    if(route.snapshot.data['title']) {
      routeTitle = route.snapshot.data['title'];
    }
    return routeTitle
  }

}
