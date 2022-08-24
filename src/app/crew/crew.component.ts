import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: string[] = ["Johnny Walker", "Raja Chari", "Jasmin Moghbeli"];

  constructor() { }

  ngOnInit(): void {
  }

}
