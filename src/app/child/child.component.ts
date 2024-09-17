import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input({ required: true }) myColor: string; // = 'green';

  @Output() sendMsgToParent = new EventEmitter();

  sendMsg() {
    this.sendMsgToParent.emit('Message de la part du Child Component');
  }
}
