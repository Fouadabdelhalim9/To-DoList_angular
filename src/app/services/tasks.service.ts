import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { tick } from '@angular/core/testing';
import { CheckboxControlValueAccessor } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
tasks :Task[] =[

]
  constructor() { 
    let storeTasks=localStorage.getItem('tasks');
    if(storeTasks){
        this.tasks =JSON.parse(storeTasks)
    }else{
      this.tasks=[]
    }

  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
    this.storeTasks()
  }
  addTask(TaskName:any,CreatorName:any,Description:any){
this.tasks.push({
  TaskName,
  CreatorName,
  Description
})
this.storeTasks()
  }
  storeTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  
  }
}

