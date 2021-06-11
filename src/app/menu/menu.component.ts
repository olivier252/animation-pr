import { Component, OnInit } from '@angular/core';
import { SharedBacSableService } from '../shared-bac-sable.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})
export class MenuComponent implements OnInit {

  itemsFooterMenu: any[];
  constructor(private rayonService: SharedBacSableService) { }

  ngOnInit() {
    this.itemsFooterMenu = this.rayonService.itemsMenu;
    console.log(this.itemsFooterMenu);
  }

}
