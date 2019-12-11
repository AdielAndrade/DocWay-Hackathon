import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router) { }

  value : string;

  isDoctor(){
    return this.value === "1"
  }

  isHospital(){
    return this.value === "2"
  }

  goHome() {
    this._router.navigate(['/home'])
  }      

  ngOnInit() {
  }

  goback(){
    this._router.navigate(['/login'])
  }

}
