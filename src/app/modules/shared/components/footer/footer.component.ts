import { Component } from '@angular/core';
import {  HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  cols!: number;

  constructor() { }

  ngOnInit(): void {
    this.updateCols();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateCols();
  }

  updateCols(): void {
    this.cols = window.innerWidth <= 700 ? 1 : 3;
  }
}

