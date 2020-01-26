import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { user } from '../Model/User.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: user = new user();
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    // this.user.patientBloodGroup = "o+ve";
  }

  ngOnInit() {

  }
  updateUser(roleId) {
    console.log(this.user);
    if (roleId == 2) {
      this.user.fkRoleId = roleId;
      let observable = this.userService.createPatient(this.user);
      observable.subscribe((response) => {
        console.log(response);
      })
    }
    this.router.navigate(['']);
  }


}
