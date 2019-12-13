import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../app.api'

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  constructor(private http: HttpClient) { }

  search( location :String, specialization : String){

  }

  call( id : String){

  }
}
