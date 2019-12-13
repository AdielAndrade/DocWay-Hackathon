import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Hospital } from '../models/Hospital.model'
import { Doctors } from '../models/Doctors.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router) { }

  value : string = '';
  crm : string = '';
  cnpj : string = '';
  name: string = '';
  email : string = '';
  password : string = '';
  phone :string = '';
  city : string = '';
  specialization : string = '';



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

  createHospital(){
   let hospital  = new Hospital(null, this.name, this.email, this.city, this.password, this.phone, this.cnpj, null);

  }

  createDoctor(){
    let doctor = new Doctors(null, this.name, this.email, this.city, this.password, this.crm, this.phone, this.specialization, null)

  }

}
