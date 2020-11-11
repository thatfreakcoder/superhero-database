import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {
	private subscriber: any;
	charId:number = 1;
	info: any = {};
  constructor(private router : ActivatedRoute, private api : ApiRequestService) { }

  ngOnInit(): void {
  	this.subscriber = this.router.params.subscribe(params => {
  		console.log(parseInt(params.id));
  		this.charId = parseInt(params.id);
  		this.getCharacter(this.charId);
  	})
  }
  getCharacter(id:number){
  	const promise = this.api.searchByID(id).toPromise();
  	promise.then((data) => {
  		this.info = data;
  		console.log(this.info);
  	})
  }
  ngOnDestroy(): void{
  	this.subscriber.unsubscribe();
  }

}
