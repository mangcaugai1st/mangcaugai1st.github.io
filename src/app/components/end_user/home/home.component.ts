import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "mangcaugai1st's blog";
  constructor(private meta: Meta, private titleService: Title) { }
  ngOnInit()
  {
    this.titleService.setTitle(this.title);
    this.meta.addTags([
      {name: 'description', content: 'Viết về những sở thích của tôi.'},
    ])
  }
}
