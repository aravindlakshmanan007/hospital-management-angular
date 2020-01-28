import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  isLoaded: boolean = false;
  patient: any;

  constructor(private userService: UserService) {
    let observable = this.userService.setPatient();
    observable.subscribe((response) =>
      this.patient = response
    )
    this.isLoaded = true
  }

  ngOnInit() {
    console.log(this.patient);

  }

  delete(userId) {
    let observable = this.userService.deletePatient(userId);
    observable.subscribe((response) =>
      console.log(response)
    )
    observable = this.userService.setPatient();
    observable.subscribe((response) =>
      this.patient = response
    )
    this.isLoaded = true
  }

}
