import { Component, OnInit } from '@angular/core';
import { Api } from '../providers/service/api';
import { Router } from '@angular/router';
import { AuthGuardService } from '../providers/auth-guard/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential: any = {};

  constructor(public auth: AuthGuardService, public api: Api, public router: Router) { }

  ngOnInit() {
    this.auth.isLogedIn();
  }

  async login() {
    try {
      const res: any = await this.api.post('/user/signin', this.credential);
      window.localStorage.setItem('user', JSON.stringify(res.data));
      this.router.navigate(['/dashboard']);
    } catch (err) {
      this.credential = {
        email: '',
        password: ''
      };
      console.log(err.error);
    }
  }

}
