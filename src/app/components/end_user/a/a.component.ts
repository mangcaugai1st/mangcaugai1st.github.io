import { Component } from '@angular/core';
import {Post} from "../../../Models/post.model";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
// định nghĩa một interface để mô tả cấu trúc của các objects trong mảng

export class AComponent  {
  post: Post[]; // khai báo mảng chứa các objects Post
  constructor() { // khởi tạo mảng post với các objects Post
    this.post = [
      {thumbnail: 'ThinkPad-logo.webp', title: 'Review Thinkpad E590 sau hơn 4 năm sử dụng', link: '/A/ThinkPad-E590', status: '(Bài viết còn tiếp tục cập nhật.)', first_release: new Date("2023-04-11"), last_update: new Date("2023-10-26") },
      {thumbnail: '20240308_185057.jpg', title: 'Góc chơi bút máy của tôi', link: '/A/my_fountain_pen_corner', status: '(Bài viết còn tiếp tục cập nhật.)', first_release: new Date("2024-03-08"), last_update: new Date("2024-03-08") },
    ];
  }
}
