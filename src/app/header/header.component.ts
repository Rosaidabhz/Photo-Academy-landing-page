import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const barsMenu = document.querySelector<HTMLElement>('.bars_menu');
      const menuItems = document.querySelector<HTMLElement>('.menu_items');

      barsMenu?.addEventListener('click', () => {
        menuItems?.classList.toggle('active');
      });
    });
  }
}
