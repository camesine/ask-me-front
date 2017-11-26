import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css']
})
export class ConceptoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.collapsible').collapsible();
    jQuery('.not-collapse').on('click', function(e) { e.stopPropagation(); });
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
