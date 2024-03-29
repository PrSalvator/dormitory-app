import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dormitory-app';
  images:string[] = [
    "https://dobroe-ytro.ru/wp-content/uploads/2023/02/ANEA-1-IORO-10.jpg",
    "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042500_03.jpg",
    "https://fotorelax.ru/wp-content/uploads/2016/02/Beautiful-photos-and-pictures-on-different-topics-01.jpg",
    "https://незабываемая.москва/blog/samyye_krasivyye_mosty_moskvy_0.jpg",
    "https://giffun.ru/wp-content/uploads/2019/04/180-1.jpg",
    "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042718_14.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHmi4stRYVTFJWsmZqW8lkJfSGLIC3I6ldw&usqp=CAU",
    "https://top15moscow.ru/storage/photos/March2022/thumbnails/1x/ugtWaHtFklGvw3ho6i67.jpg?1648032529",
    "https://kartinka-kartinki.ru/wp-content/uploads/2018/11/33.jpg"
  ];
}
