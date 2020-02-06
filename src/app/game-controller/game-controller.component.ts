import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  timer;
  count: number = 0
  @Output() update = new EventEmitter<{ count: number }>()
  constructor() { }

  ngOnInit() {
  }

  handleUpdate () {
    this.update.emit({count: this.count})
  }
  startTimer() {
    this.timer = setInterval(() => {
      this.count += 1
      this.handleUpdate()
      console.log(this.count)
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.timer)
  }
}
