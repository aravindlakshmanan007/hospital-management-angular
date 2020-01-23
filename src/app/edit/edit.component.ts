import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user : any;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    let observable = this.userService.setPatientById(+id);
    observable.subscribe((response)=>{
      this.user = response;
      console.log(this.user);
    })
  }
  updatePatient(){
    
  }
}
