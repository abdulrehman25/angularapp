import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radiology-sidebar',
  templateUrl: './radiology-sidebar.component.html',
  styleUrls: ['./radiology-sidebar.component.css']
})
export class RadiologySidebarComponent {
  @Input() textFromParent='';

}
