import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { response } from '../Model/response.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    const role = this.route.snapshot.paramMap.get("role");
    console.log(id);
    if (+role == 2) {
      let observable = this.userService.setPatientById(+id);
      observable.subscribe((response) => {
        this.user = response;
        console.log(this.user);
      })
    } else if (+role == 3) {
      let observable = this.userService.setDoctorById(+id);
      observable.subscribe((response) => {
        this.user = response;
        console.log(this.user);
      })
    }
  }
  updateUser(roleId) {
    console.log(this.user);
    let updatedUser = this.user.data;
    console.log(updatedUser);
    if (roleId == 2) {
      let observable = this.userService.updatePatient(updatedUser);
      observable.subscribe((response) => {
        console.log(response);
      })
    } else if (roleId == 3) {
      let observable = this.userService.updateDoctor(updatedUser);
      observable.subscribe((response) => {
        console.log(response);
      })
    }
    this.router.navigate(['home']);
  }

}
