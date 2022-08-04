import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Output() eventEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  userName="provaMittente";

  emitChat(id_chat: number){
    this.eventEmitter.emit(id_chat);
  }

  openAddChat(){

  }
}
