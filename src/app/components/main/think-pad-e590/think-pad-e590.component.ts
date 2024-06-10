import { Component } from '@angular/core';
interface my_laptop_spec {
  a : string;
  b: string;
}
interface Game_List {
  name : string;
  img : string;
}
interface IDE_List {
  name: string;
  img: string;
}
interface Linux_Distro {
  img : string;
}
@Component({
  selector: 'app-think-pad-e590',
  templateUrl: './think-pad-e590.component.html',
  styleUrls: ['./think-pad-e590.component.css']
})

export class ThinkPadE590Component {
  spec : my_laptop_spec[] = [
    {a: 'CPU', b: 'Intel® Core™ i5-8265U'},
    {a: 'Card đồ họa Onboard', b: 'Intel® UHD Graphics 620'},
    {a: 'Card đồ họa rời', b: 'AMD Radeon RX 550X'},
    {a: 'SSD', b: '256 GB'},
    {a: 'RAM', b: '16 GB (mặc định là 8 GB)'},
  ]
 game : Game_List[] = [
   {name: 'Genshin Impact', img : 'Genshin_Impact_Logo.webp'},
   {name: 'NieR:Automata', img : 'NierAutomata.webp'},
 ];
 ide :IDE_List[] = [
   {name: 'Visual Studio 2019-2022', img: 'Visual-Studio-Logo.png'},
   {name: 'JetBrains IntelliJ', img: 'IntelliJ_IDEA_Icon.svg.png'},
   {name: 'JetBrains PhpStorm', img: 'phpstorm_logo.png'},
   {name: 'JetBrains Rider', img: 'rider_logo.png'},
   {name: 'ReSharper', img: 'ReSharper_Icon.png'},
 ];
 linux : Linux_Distro[][] = [
   [{img: 'Ubuntu-Logo.png'},{img: 'Fedora_Logo.png'},{img: 'Red-Hat-logo.png'}],
   [{img: 'OpenSUSE_Logo.png'},{img: 'btw_i_use_arch.jpg'},{img: 'gentoo-linux-logo.png'}],
 ]
}
