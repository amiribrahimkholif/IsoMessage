import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendMessagesService {

  constructor(private _HttpClient:HttpClient) { 

  }

  SendIsoMessage(formData:any) :Observable<any>{
    return this._HttpClient.post('',formData);
  }
}
