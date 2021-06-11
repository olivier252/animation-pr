import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedBacSableService {
  itemsMenu: any[] = [
    { index: 1, utilRoute: "zone", style: "blue", matIcon: "archive" },
    { index: 2, utilRoute: "price", style: "blue", matIcon: "euro" }
    // { index: 3, utilRoute: "ventes-sold", style: "blue", matIcon: "payment" },
    // { index: 4, utilRoute: "picture", style: "blue", matIcon: "add_a_photo" }
  ];
  constructor() { }
}
