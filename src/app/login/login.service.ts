import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../app.api'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
}
