import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentColor: string|undefined;
  

  constructor(public taskServices:TasksService) { }

  ngOnInit(): void {
  }
  deleteTask(i:number){
    this.taskServices.deleteTask(i);
  }
  addTask(TaskName: { value: any; },CreatorName: { value: any; },Description: { value: any; }){
this.taskServices.addTask(TaskName.value,CreatorName.value,Description.value); 
  }
  changeColor(){
    this.currentColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }


}
