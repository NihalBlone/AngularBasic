import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 allowAddServer: boolean = false;
 serverCreated:boolean= false;
 serverName: string ;
 servers: string[] = [];
  
 constructor() { 
    setTimeout(()=>{
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onClick(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }

  updateServerName(event: any){
    this.serverName = event.target.value;
  }

}
