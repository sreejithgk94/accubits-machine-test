import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppConstant } from '../../model/app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(private toastr: ToastrService,
              private router: Router,
              private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }
  reciveUserName($event){
    this.userName = $event.userName;
    this.password = $event.password;
    if (this.userName === AppConstant.USER_NAME && this.password === AppConstant.PASSWORD) {
      this.authentication.changeMessage(true);
      this.toastr.success('Sucessfully Login');
      this.router.navigate(['/home']);
    } else {
      this.toastr.error('wrong credentials ! please check your credentials');
    }
  }
}
