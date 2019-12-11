import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout(){
    this._router.navigate(['/home'])

  }

  goAboutUs(){
    this._router.navigate(['/aboutUs'])
  }

  showFiller = false;

}
