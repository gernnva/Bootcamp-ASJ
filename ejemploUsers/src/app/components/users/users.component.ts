import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UserService) {}

  usuarios: any = [];

  ngOnInit(): void{
    this.userService.getUsers().subscribe((res) =>
    console.log( 'respuiesta del get ', res.data));
    
  }

}
