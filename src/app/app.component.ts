import { Component, OnInit } from '@angular/core';
import {CommonService} from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';

  isEdit=false;
  userObj={
    fname:'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }
  allUser: Object;
  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.getLatestUser();
  }
  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.commonService.getAllUSer().subscribe((response)=>
    {
      this.allUser=response
    })
  }
  editUser(user){
    this.isEdit=true;
    this.userObj=user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>
    {
    this.getLatestUser();
    })
  }cd
  updateUser(){
    this.isEdit=!this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
    this.getLatestUser();
    }
    )
}
}