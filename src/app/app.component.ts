import { Component } from '@angular/core';

type ToolbarItem = {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'karatesaul.github.io';
  public toolbarItems: ToolbarItem[] = [{
    label: 'Main',
    routerLink: 'main'
  }, {
    label: 'Games',
    routerLink: 'games',
  }, {
    label: 'Links',
    routerLink: 'links'
  }];
}
