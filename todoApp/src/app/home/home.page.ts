import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isOpen : boolean = false;
  tasks : any[] = [];
  newTask : string = '';
  constructor() {}

addNewTask(){
  var task = {
    isChecked  : false,
    content : this.newTask
  }
  this.newTask = '';  
  this.tasks.push(task);
}
onChecked(event: any, i: any){
  this.tasks[i].isChecked = event.detail.checked;
}

deleleteTask(i :any){
  this.tasks.splice(i, 1);
}

}
