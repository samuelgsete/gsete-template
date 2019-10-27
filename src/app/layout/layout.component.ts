import { Component, OnInit } from '@angular/core';
import { Routers } from '../shared/Routers';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private r: Routers) { 
    console.log(r);
  }

  ngOnInit() {
  }

}
