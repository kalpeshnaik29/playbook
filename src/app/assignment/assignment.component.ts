import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { playAreaObj } from '../playAreaObj';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  colors = [
    'red',
    'blue',
    'yellow',
    'green',
    'pink',
    'gray'
  ];

  sketches = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg'
  ];

  playArea: playAreaObj[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: any, flag1: number) {
    if (event.previousContainer != event.container) {
      console.log(event.item.data);
      if (event.item.data.ele === 'color') {
        event.container.data.splice(1, 0, { 'color': event.item.data.color, 'sketch': '' });
      } else {
        this.playArea[event.currentIndex].sketch = event.item.data.sketch;
      }
    }
  }
}

