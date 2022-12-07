import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  acno=''
  psw=''
  amnt=''

  constructor(private ds:DataService){}

   deposit(){

    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt} credited to your account and the balance is ${result}`)
    }
    else{
      alert("incorrect account number or password")
    }

   }
   
   withdraw(){
    
   }
}
