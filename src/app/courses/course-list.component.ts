import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, FilterService } from '../blocks/filter-text';
import {  IAppState } from '../store';//to dispatch action
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { CourseActions } from './course.action';
// filterCourses(searchText)

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  //subscribing to the filteredCourses from the store as a stream
  // so, include | async.  This is a much cleaner, effective way
  //to declare and subscribe to the store requesting properties from it
  @select('filteredCourses') filteredCourses$: Observable<Course>

  constructor(private ngRedux: NgRedux<IAppState>,
    private courseActions: CourseActions){}
  
    //now removed the dispatch from the store and add the one 
    //from courseActions.  Remove the store import and also check
    // the reducer for the courses course actions
  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    // store.dispatch(filterCourses(searchText));
    this.courseActions.filterCourses(searchText);
  }

  ngOnInit() {
    this.courseActions.getCourses();
    componentHandler.upgradeDom();
  }
}
