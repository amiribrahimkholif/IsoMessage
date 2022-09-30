import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { SendMessagesService } from '../send-messages.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private _SendMessagesService:SendMessagesService) { }
  error='';
  success='';
  transactionType='';

  transactions = [
    {Id:1,type:'ATM-On-US',operations:[{Id:1,type:'Cash Deposit'},{Id:2,type:'Cash Withdraw'},{Id:3,type:'Transfer'}]},
    {Id:2,type:'ATM-Off-US',operations:[{Id:4,type:'Cash Withdraw'},{Id:5,type:'Balance Inquiry'}]},
    {Id:3,type:'POS',operations:[{Id:6,type:'POS'}]}
  ];

  createMessageForm = new FormGroup({
    transactionType:new FormControl(null,[Validators.required]),
    pan:new FormControl(null,[Validators.required,Validators.maxLength(16)]),
    processingCode:new FormControl(null,[Validators.required,Validators.maxLength(6)]),
    transactionAmount:new FormControl(null,[Validators.required,Validators.maxLength(12)]),
    settlementAmount:new FormControl(null,[Validators.required,Validators.maxLength(12)]),
    AccountId1:new FormControl(null,[Validators.required,Validators.maxLength(28)]),
    AccountId2:new FormControl(null,[Validators.required,Validators.maxLength(38)]),
  })

  submitIsoMessage(formData:FormGroup){
    console.log(formData.value);
    this._SendMessagesService.SendIsoMessage(formData).subscribe((response)=>{

      if(response.message =='success')
      {
       //done
      }
      else{
        //Problem
      }
    })
  }
  ngOnInit(): void {
  }

}
