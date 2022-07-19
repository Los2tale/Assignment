import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(){
    setTimeout(() => {
      this.router.navigate(['chartcomponent']);
    }, 500);
    console.log("HERE");
  }
  title = 'Financial';
}
