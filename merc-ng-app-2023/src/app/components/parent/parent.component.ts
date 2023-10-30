import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData: string = "William";
  childDataInParent: string = '';

  getDataFromChild = (dataFc : string) => {
    this.childDataInParent = dataFc;
  };
}
