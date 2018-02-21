import { Component, OnInit } from '@angular/core'

//for route parameters
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

//for service 
import { DataService } from '../data.service';
@Component({
  selector: 'app-abount',
  templateUrl: './abount.component.html',
  styleUrls: ['./abount.component.scss']
})
export class AbountComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params .subscribe(res => console.log(res.id));
   } 

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
