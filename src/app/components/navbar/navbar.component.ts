import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	apiData: any = {};

  constructor(private api : ApiRequestService) { }

  ngOnInit(): void {
  }
}
