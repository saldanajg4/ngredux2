import {NgRedux }from 'ng2-redux';
import {IAppState} from '../store';
import {Injectable} from '@angular/core';
import { CourseService } from './course.service';

export const FILTER_COURSES = 'courses/FILTERED';
export const REQUEST_COURSES_SUCCESS = 'courses/REQUEST_COURSES_SUCCESS';


//make it injectable and after you import it in app module and 
//added to service provider, now can be injected 
@Injectable()
export class CourseActions {
    constructor(private ngRedux: NgRedux<IAppState>,
        private courseService: CourseService){}

    filterCourses(searchText){
        this.ngRedux.dispatch({
            type: FILTER_COURSES,
        searchText,
        });
    }
    
    getCourses(){
        this.courseService.getCourses().subscribe(
            courses => {
                this.ngRedux.dispatch({
                    type: REQUEST_COURSES_SUCCESS,
                    courses,
                });
            });
    }

}