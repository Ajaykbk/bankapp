import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {

  @Input() item:String|undefined
  
  //event creation
  //EventEmitter

  @Output() onCancel=new EventEmitter()

  constructor(){}

  cancel(){
    
    this.onCancel.emit()
  }

}
