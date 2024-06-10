import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from "./components/main/main.component";

import {ThinkPadE590Component} from "./components/main/think-pad-e590/think-pad-e590.component";
import {KakunoComponent} from "./components/main/kakuno/kakuno.component";

const routes: Routes = [
  {path: '', title: 'mangcaugai1st\'s blog', component: MainComponent},
  {path: 'thinkpad-e590', title: 'Review ThinkPad E590 sau 4 năm sử dụng', component: ThinkPadE590Component},
  {path: 'pilot-kakuno', title: 'Pilot Kakuno', component: KakunoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
