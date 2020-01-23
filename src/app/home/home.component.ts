import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  doctorEnable : boolean = false;
  patientEnable : boolean = false;

  constructor(private loginService : LoginService) { 
      console.log(this.loginService.getUsername());
   }

  ngOnInit() {
  }

  doctor(){
    this.doctorEnable = true;
    this.patientEnable = false;
  }

  patient(){
    this.patientEnable = true;
    this.doctorEnable = false;
  }

}
