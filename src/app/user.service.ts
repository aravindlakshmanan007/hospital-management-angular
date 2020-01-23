import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  // setUser(user) {
  //   this.user = user;
  // }
  // getUser() {
  //   return this.user;
  // }

  setDoctor(): Observable<any> {
    let observable = this.http.get<any>("http://localhost:8080/readalldoctor/");
    return observable;
  }

  setPatient(): Observable<any> {
    let observable = this.http.get("http://localhost:8080/getallpatient/");
    return observable
  }
  setPatientById(id: number): Observable<JSON> {
    let observable = this.http.put<any>("http://localhost:8080/getpatient", {
      "pkUserId": id
    });
    return observable;
  }

  // getPatientById(){
  //   return this.patient;
  // }
}
