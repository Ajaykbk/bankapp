import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any
  currentuser=''
  currentacno=''

  constructor() { 
    this.getdetails()
  }

  savedetails(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentuser){
      localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
    }
    if(this.currentacno){
      localStorage.setItem("currentacno",JSON.stringify(this.currentacno))
    }
  }

  getdetails(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if(localStorage.getItem('currentuser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
    }
    if(localStorage.getItem('currentacno')){
      this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
    }
  }


  // userDetails:any={
  //   1000:{acno:1000,username:"Anu",password:123,balance:0,transaction:[]},
  //   1001:{acno:1001,username:"Amal",password:123,balance:0,transaction:[]},
  //   1002:{acno:1002,username:"Arun",password:123,balance:0,transaction:[]},
  //   1003:{acno:1003,username:"Megha",password:123,balance:0,transaction:[]}

  // }

   register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username:uname,password:psw,balance :0,transaction:[]}
      console.log(userDetails);
      this.savedetails()
      return true
    }
   }
   login(acno:any,psw:any){
    // var acno=this.acno
    // var psw=this.psw
    var userDetails=this.userDetails

      if(acno in userDetails){
        if(psw==userDetails[acno]["password"]){
          //store ac number
          this.currentacno=acno
          // alert("login success")
          // this.router.navigateByUrl('dashboard')
          //store username
          this.currentuser=userDetails[acno]["username"]
          this.savedetails()
          return true
        
        }
        else{
          // alert("incorrect password")
          return false
        }
      }
      else{
        return false
      }
    // alert('login clicked')
  }
  deposit(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        userDetails[acno]["balance"]+=amnt
        userDetails[acno]["transaction"].push({type:'CREDIT',amount:amnt})
        this.savedetails()
        return userDetails[acno]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }

  withdraw(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]["password"]){
        if(amnt<=userDetails[acno]["balance"]){
          userDetails[acno]["balance"]-=amnt
          userDetails[acno]["transaction"].push({type:'DEBIT',amount:amnt})
          this.savedetails()
          return userDetails[acno]["balance"]
        }
        else{
          alert('insufficient balance')
          return false
        }
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('incorrect account number')
      return false
    }
  }

  gettransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }

}
