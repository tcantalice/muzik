import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void { }

}
