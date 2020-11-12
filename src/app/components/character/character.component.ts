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
	powerstats:object;
	class:number;
  constructor(private router : ActivatedRoute, private api : ApiRequestService) { }

  ngOnInit(): void {
  	this.subscriber = this.router.params.subscribe(params => {
  		console.log(parseInt(params.id));
  		this.charId = parseInt(params.id);
  	});
  	this.getCharacterData(this.charId);
  }
  getCharacterData(id:number){
  	const promise = this.api.searchByID(id).toPromise();
  	promise.then((data) => {
  		this.info = data;
  		console.log(this.info);
  		this.powerstats = data['powerstats'];
	  	console.log(this.powerstats);
	  	this.getClass(this.powerstats)
  	});
  }
  getClass(powerstats:object):void{
  	this.class = (powerstats['intelligence']**1.3 + (powerstats['strength']*0.5 )**2 + (powerstats['speed']*0.5)**2 + powerstats['durability']^1.6 + (powerstats['power'] + powerstats['combat']**1.8 ))
  	console.log(this.class);
  	
}
  ngOnDestroy(): void{
  	this.subscriber.unsubscribe();
  }

}
