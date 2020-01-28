import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  user: any;
  isLoaded: boolean = false;
  constructor(private userService: UserService) {
    let observable = this.userService.setDoctor();
    observable.subscribe((response) =>
      this.user = response
    )
    this.isLoaded = true;
    console.log(this.user);
  }

  ngOnInit() {
  }

  delete(userId) {
    console.log(userId);
    let observable = this.userService.deleteDoctor(userId);
    observable.subscribe((response) =>
      console.log(response)
    )
    observable = this.userService.setDoctor();
    observable.subscribe((response) =>
      this.user = response
    )
  }

}
