import { Component, OnInit } from '@angular/core';
import { Api } from '../providers/service/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credential: any = {
    gender: ''
  };

  constructor(public api: Api, public router: Router) { }

  ngOnInit() {
  }

  async register() {
    const date = new Date(this.credential.birthday.year + '-' + this.credential.birthday.month + '-' + this.credential.birthday.day);
    this.credential.birthDay = date;
    try {
      const res: any = await this.api.post('/user/signup', this.credential);
      this.router.navigate(['/login']);
    } catch (err) {
      console.log(err.error);
    }
  }

}
