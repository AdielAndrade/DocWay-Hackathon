import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this._router.navigate(['/home'])
  }
  
  goRegister(){
    this._router.navigate(['/register'])
  }

  goPainel(){
    this._router.navigate(['/painel'])
  }

}
