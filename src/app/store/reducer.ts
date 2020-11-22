import { state } from '@angular/core';
import { Course } from '../courses/course';
import {IAppState} from './IAppState';
// import {FILTER_COURSES} from './actions'
import {FILTER_COURSES, REQUEST_COURSES_SUCCESS} from '../courses/course.action'
// import * as actions from  './actions';

const courses = []

const initialState: IAppState = {
    courses: courses,
    filteredCourses: courses,
};

function filterCourses(state,action):IAppState{
    return Object.assign({}, state,{
        filteredCourses: state.courses.filter(c => c.name.toLowerCase()
            .indexOf(action.searchText.toLowerCase()) > -1),
    });
}

function getCourses(state, action):IAppState{
    return Object.assign({}, state,{
        courses: action.courses,
        filteredCourses: action.courses,
    });
}
export function reducer(state=initialState, action){
    switch(action.type){
        case FILTER_COURSES:
            return filterCourses(state,action);
        case REQUEST_COURSES_SUCCESS:
            return getCourses(state,action);
        default:
            return state;        
    }
    
}
