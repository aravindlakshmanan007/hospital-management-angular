import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../Shared/forbitten-name.directive';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    age: ['',Validators.min(18)],
    phoneNumber: [''],
    street: [''],
    city: [''],
    state: [''],
    email: this.fb.array([
      this.fb.control('')
    ],forbiddenNameValidator(/@gmail.com/))
  })
  user: any;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private fb: FormBuilder) {
    const id = this.route.snapshot.paramMap.get("id");
    const role = this.route.snapshot.paramMap.get("role");
    console.log(id);
    if (+role == 2) {
      let observable = this.userService.setPatientById(+id);
      observable.subscribe((response) => {
        this.user = response;
        this.profileForm.patchValue({
          firstName: this.user.data.userFirstname,
          lastName: this.user.data.userLastname,
          age: this.user.data.userAge,
          phoneNumber: this.user.data.userPhonenumber,
          street: this.user.data.userStreet,
          city: this.user.data.userCity,
          email: [this.user.data.userEmail],
          state: this.user.data.userState
        })
        console.log(this.user);
      })
    } else if (+role == 3) {
      let observable = this.userService.setDoctorById(+id);
      observable.subscribe((response) => {
        this.user = response;
        this.profileForm.patchValue({
          firstName: this.user.data.userFirstname,
          lastName: this.user.data.userLastname,
          age: this.user.data.userAge,
          phoneNumber: this.user.data.userPhonenumber,
          street: this.user.data.userStreet,
          city: this.user.data.userCity,
          email: [this.user.data.userEmail],
          state: this.user.data.userState
        })
        console.log(this.user.data.userFirstname);
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

  ngOnInit() {

  }

  get email() {
    return this.profileForm.get('email') as FormArray;
  }

  addemail() {
    this.email.push(this.fb.control(''));
  }

  get firstName(){
    return this.profileForm.get('firstName');
  }

  get age(){
    return this.profileForm.get('age');
  }
  
  get lastName(){
    return this.profileForm.get('lastName');
  }
}

