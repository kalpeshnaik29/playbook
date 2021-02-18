import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // artists = [
  //   { bgcolor: 'red'},
  //   { bgcolor: 'green'},
  //   { bgcolor: 'gray'},
  //   { bgcolor: 'pink'},
  //   { bgcolor: 'yellow'},
  // ];
  // alteArtists = [
  //   {url:'../assets/images/crop-pic.jpg'},
  //   {url:'../assets/images/crop-pic.jpg'},
  //   {url:'../assets/images/crop-pic.jpg'},
  //   {url:'../assets/images/crop-pic.jpg'},
  //   {url:'../assets/images/crop-pic.jpg'},

  //   ];
  //   alteArtistsAll = [
  //   ];
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer !== event.container) {
  //     transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex)
  //   } else {
  //     moveItemInArray(this.artists, event.previousIndex, event.currentIndex);
  //     moveItemInArray(this.alteArtists, event.previousIndex, event.currentIndex);
  //   }
  //   }

  first_artists = [
    { bgcolor: 'red'},
    { bgcolor: 'green'},
    { bgcolor: 'gray'},
    { bgcolor: 'pink'},
    { bgcolor: 'yellow'},
    { bgcolor: 'blue'},
    { bgcolor: 'orange'},
    { bgcolor: 'purple'},
  ];

  second_artists = [
    {url:'../assets/images/1.jpg'},
    {url:'../assets/images/1.jpg'},
  ];

  // third_artists: any = [];

  third_artists =[
    {url:'../assets/images/1.jpg'}
  ]
  


  drop(event: CdkDragDrop<string[]>, flag1: number) {
    console.log("hi");
    if(flag1 == 0) {
      if (event.previousContainer !== event.container) {
        console.log("hi if start");
        // transferArrayItem(event.previousContainer.data,
        //   event.container.data, 
        //   event.previousIndex, 
        //   event.currentIndex)
          console.log("hi if end");
      } else {
        console.log("hi else");
        // moveItemInArray(this.third_artists,event.previousIndex, event.currentIndex);
        
      }
    } else {
      // this.third_artists.push(
      //   this.second_artists[0]
      // );
    }
    
  }
  
}
