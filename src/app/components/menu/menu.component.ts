import { Component, OnInit } from '@angular/core';
import { Data } from '../../data.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  todos: [];
  constructor(public dataService: Data) { }

  ngOnInit() {
  }

  refresh() {
    
  }

}
