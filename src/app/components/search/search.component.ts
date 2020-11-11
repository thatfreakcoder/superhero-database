import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	public searchRes : string;
	apiData:any = {}
  constructor(private api : ApiRequestService) { }

  ngOnInit(): void {
  }
  search(name:string){
  	console.log(name);
  	const promise = this.api.searchByName(name).toPromise();
  	promise.then((data) => {
  		this.apiData = data;
  		console.log(JSON.stringify(this.apiData));
  	})
  	promise.catch((error) => {
  		console.log(JSON.stringify(error));
  	})
  }
}
