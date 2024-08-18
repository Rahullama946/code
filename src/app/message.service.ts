import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:string[]=[];

  addMsg(msg:string){
    this.messages.push(msg);
  }
  
  clearMsg(){
    this.messages=[];
  }
}
