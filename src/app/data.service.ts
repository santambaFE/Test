import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal'])
  goal = this.goals.asObservable();
  
  constructor() { }

  ChangeGoal(goal){
    this.goals.next(goal);
  }  
}
