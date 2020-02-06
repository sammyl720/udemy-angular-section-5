  
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  countList: number[] = []
  handleUpdate(event: { count: number }) {
    this.countList.push(event.count)
    }

  countIsEven(count:number): boolean {
    return count % 2 === 0
  }
}