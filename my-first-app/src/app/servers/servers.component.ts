import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: ['.five { color: white;}']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = ' ';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  hide = false;
  numberOfHides = 0;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server' + this.serverName + ' was created';
  }

  getColor() {
    return this.numberOfHides >= 5 ? 'blue' : 'white';
  }

  hideParagraph() {
    this.numberOfHides += 1;
    if (this.hide === false) {
      return this.hide = true;
    } else {
      return this.hide = false;
    }
  }
}
