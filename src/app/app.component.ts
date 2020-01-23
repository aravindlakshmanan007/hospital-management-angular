import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HMS-Angular';
  showLogin = true;
  constructor(private loginService : LoginService){ 
    if(loginService.getUsername != null ){
       this.showLogin = !this.showLogin;
    }
  }

}
