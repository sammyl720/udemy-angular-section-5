import { Component, Input, ViewEncapsulation, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ViewChild , ContentChild} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("srvElement") element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string
  constructor() {
    console.log('constructor called!')
  }

  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef
  ngOnInit(){
    console.log('ngOnInit called!')
    console.log('Text Content' + this.header.nativeElement.textContent)
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('NgOnChange called')
    console.log(changes)
  }
  ngDoCheck(){
    console.log('ngDoCheck called!')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    console.log('Text Content' + this.header.nativeElement.textContent)
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
}
