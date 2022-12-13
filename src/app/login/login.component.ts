import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim="your perfect banking partner"
  data="Enter Account Number"
  // acno=''
  // psw=''

  userDetails:any={
    1000:{acno:1000,username:"Anu",password:123,balance:0},
    1001:{acno:1001,username:"Amal",password:123,balance:0},
    1002:{acno:1002,username:"Arun",password:123,balance:0},
    1003:{acno:1003,username:"Megha",password:123,balance:0}

  }

   constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

   loginForm=this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
   psw:['',[Validators.required,Validators.pattern('[a-z0-9]+')]]
  })

  login(){
    var acno=this.loginForm.value.acno
    var psw=this.loginForm.value.psw
    
    if(this.loginForm.valid){
      const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect username or password')
    }

    }
    else{
      alert('Invalid Form')
    }
    // alert('login clicked')
  }
//  login(a:any,b:any){
//   this.acno=a.value
//   this.psw=b.value
//   var acno=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails

//     if(acno in userDetails){
//       if(psw==userDetails[acno]["password"]){
//         alert("login success")
//       }
//       else{
//         alert("incorrect password")
//       }
//     }
//     else{
//       alert("incorrect username")
//     }
//   // alert('login clicked')
// }

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  // }

  // pswChange(event:any){
  //   this.psw=event.target.value
  //   console.log(this.psw);
    
  // }

}
