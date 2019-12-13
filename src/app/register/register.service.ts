import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../app.api'
import { Hospital } from '../models/Hospital.model'
import { Doctors } from '../models/Doctors.model'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {   }

  registerDoctors(doctor : Doctors){}

  registerHospital( hospital : Hospital){}
}
