import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoServizi from '../todos.service';

@Component({
  template: `
    <div>
      <ng-container *ngIf="tasks; else elseTemplate">
      <div *ngIf="tasks.length > 0; else elseNoTask">
        <div *ngFor="let task of tasks; let i = index"  >
          <div>
            - {{task.title}}
            <button class="complete" (click)="aggiorna(task,i)" >❎</button>
          </div>
        </div>
      </div>
      </ng-container>
      <ng-template #elseTemplate>
      <p>Recupero Tasks...</p>
      </ng-template>
    </div>
    <div class="footer">
      <input type="text" [(ngModel)]="newTaskTitle" >
      <button (click)="aggiungi()" >✅</button>
    </div>
    <ng-template #elseNoTask>
      <p>Ops, non ci sono Task</p>
    </ng-template>
  `,
  styles: [
    `
    button.complete{
      background:transparent;
      border:none;
      cursor:pointer
    }
    .footer{
      margin-top:1rem
    }
    `
  ]
})
export class TodosPage implements OnInit {
  tasks!:Todo[]

  newTaskTitle:string | undefined
  constructor() {
    TodoServizi.get().then(todos=>this.tasks = todos.filter(todo=>!todo.completed))
  }

  ngOnInit(): void {
  }
  async aggiungi(){
   const nTodo =  await TodoServizi.add({title:this.newTaskTitle as string,completed:false})
   this.tasks.push(nTodo);
   this.newTaskTitle = ''
  }
  async aggiorna(todo:Todo,i:number){
    await TodoServizi.update({completed:true},todo.id)
    this.tasks.splice(i,1)
  }

}
