import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;
declare var tinymce: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery('ul.tabs').tabs();
    jQuery('.scrollspy').scrollSpy();
    jQuery('.collapsible').collapsible();
    jQuery('select').material_select();
    jQuery('.dropdown').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: false,
      gutter: 0,
      belowOrigin: true,
      alignment: 'left',
      stopPropagation: false
      });
    }


}
