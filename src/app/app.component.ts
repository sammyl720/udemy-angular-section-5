  
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  count: number = 0
  handleUpdate(event: { count: number }) {
    this.count = event.count
    console.log('app count' + event.count + "this count" + this.count)
  }

  countIsEven(): boolean {
    return this.count % 2 === 0
  }
}