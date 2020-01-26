import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() users: any;
  showError: boolean = false;
  showSuccess: boolean = false;
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit() {
  }

  navigateEdit(userId, roleId) {
    this.router.navigate(["edit", userId, roleId]);
  }

  deleteUser(userId, roleId) {
    console.log(roleId);
    if (roleId == 2) {
      let observable = this.userService.deletePatient(userId);
      observable.subscribe((response) =>
        console.log(response)
      )
      this.showError = false;
      this.showSuccess = true;
    } else if (roleId == 3) {
      console.log(userId);
      let observable = this.userService.deleteDoctor(userId);
      observable.subscribe((response) =>
        console.log(response)
      )
      this.showError = false;
      this.showSuccess = true;
    }
  }

}
