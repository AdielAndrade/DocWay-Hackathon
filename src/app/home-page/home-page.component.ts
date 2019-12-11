import { Component, OnInit,} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router: Router) { }

  goAboutUs() {
    this._router.navigate(['/aboutUs'])
  }

  goLogin() {
    this._router.navigate(['/login'])
  }

  goRegister() {
    this._router.navigate(['/register'])
  }
  ngOnInit() {
  }

}
