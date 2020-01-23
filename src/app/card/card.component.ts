import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() users : any;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigateEdit(id){
    this.router.navigate(["edit",id]);
  }

}
