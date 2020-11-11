import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	apiData:any = {};
	apiList:any = [];
	start = 1;
	end = 20;
	count = 731;

  constructor(private api : ApiRequestService) { }

  ngOnInit(): void {
  	this.apiCall(this.start, this.end)
  }
  apiCall(start:number, end:number){
	this.apiList = [];
  	for (var i = start; i <= end; ++i) {
  		const promise = this.api.searchByID(i).toPromise();
  		promise.then((data) => {
  			this.apiList.push(data);
  		})
  	}
  	console.log(start);
  	console.log(end);
  }
  getNextList(){
  	this.start += 20;
  	this.end += 20;
  	this.apiCall(this.start, this.end);
  }
}
