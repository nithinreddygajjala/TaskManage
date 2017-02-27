import { Component } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'my-app',
    templateUrl: 'app/main.component.html',
    viewProviders: [DragulaService],

})
export class MainComponent {

  public groups: Array<any> = [
      {
        name: 'Group A',
        items: [{name: 'Item A'},{name: 'Item B'},{name: 'Item C'},{name: 'Item D'}]
      },
      {
        name: 'Group B',
        items: [{name: 'Item 1'},{name: 'Item 2'},{name: 'Item 3'},{name: 'Item 4'}]
      }
    ];

}
