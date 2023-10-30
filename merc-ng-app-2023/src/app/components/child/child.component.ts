import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @Input()
  parentDataInChild: string = '';
  
  childData: string = 'Shakespeare';

  @Output()
  passData = new EventEmitter<string>();

  sendDataToParent = () => {
    this.passData.emit(this.childData);
  };
}
