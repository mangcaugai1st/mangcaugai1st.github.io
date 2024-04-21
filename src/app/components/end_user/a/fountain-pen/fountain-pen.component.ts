import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-fountain-pen',
  templateUrl: './fountain-pen.component.html',
  styleUrls: ['./fountain-pen.component.css']
})
export class FountainPenComponent {
  constructor(private meta: Meta) { }
  ngOnInit()
  {
      this.meta.addTags([
          {property: 'og:type', content: 'website'},
          {property: 'og:title', content: 'Góc chơi bút máy của tôi'},
          {property: 'og:description', content: 'Đây là bài viết chia sẻ những kiến thức, kinh nghiệm và trải nghiệm của tôi về bút máy và các loại mực dùng cho bút máy.'},
          {property: 'og:url', content: 'https://mangcaugai1st.github.io/A/my_fountain_pen_corner'},
          {property: 'og:image', content: 'https://mangcaugai1st.github.io/assets/images/20240308_185057.jpg'},
      ])
  }
}
