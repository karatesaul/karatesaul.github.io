import { Component } from '@angular/core';

export type Link = {
  href: string;
  inactive?: boolean
  linkText: string;
  name: string;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  public links: Link[] = [{
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saul-winer-30b69858/',
    linkText: 'www.linkedin.com/in/saul-winer-30b69858/'
  }, {
    name: 'Old Portfolio',
    href: 'https://saulwiner.carbonmade.com',
    inactive: true,
    linkText: 'saulwiner.carbonmade.com'
  }, {
    name: 'Shocase Profile',
    href: 'https://www.shocase.com/saulwiner',
    inactive: true,
    linkText: 'www.shocase.com/saulwiner'
  }]
}
