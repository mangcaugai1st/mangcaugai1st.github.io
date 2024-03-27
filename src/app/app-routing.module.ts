import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/end_user/home/home.component";
import {AComponent} from "./components/end_user/a/a.component";
import {BComponent} from "./components/end_user/b/b.component";

import {ThinkPadE590Component} from "./components/end_user/a/think-pad-e590/think-pad-e590.component";
import { FountainPenComponent } from './components/end_user/a/fountain-pen/fountain-pen.component';

import {CComponent} from "./components/end_user/c/c.component";

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'A', title: 'Bài viết', component: AComponent},
  {path: 'A/ThinkPad-E590', title: 'Review ThinkPad E590 sau 4 năm sử dụng', component: ThinkPadE590Component},
  {path: 'A/my_fountain_pen_corner', title: 'Góc chơi bút máy của tôi', component: FountainPenComponent },

  {path: 'B', title: 'Tài liệu', component: BComponent},

  {path: 'C', title: 'Tools', component: CComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
