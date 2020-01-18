import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css']
})
export class ServerstatusComponent implements OnInit {
  serverStatus: string = "offline";

  constructor() {}
   

  ngOnInit() {
    this.serverStatus = Math.random()>0.5? "online" : "offline";
  }

  getColour(){
    return this.serverStatus=='online'? 'green' : 'red';
  }

}
