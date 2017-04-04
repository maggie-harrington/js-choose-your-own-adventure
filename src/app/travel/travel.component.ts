import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  providers: [CharacterService]
})
export class TravelComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  characterToDisplay;
  characterId: string;

  constructor(private router: Router, private location: Location, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
    // this.characterToDisplay.forEach((urlParameters) => {
    //   this.characterId = urlParameters['id'];
    // });
    // this.characterToDisplay = this.characterService.getCharacterbyId('0');
    // console.log(this.characterToDisplay);
  }
  onChange(thisCity) {
    if (thisCity === 'lima') {
      this.router.navigate(['lima']);
    }else if (thisCity === 'rio') {
      this.router.navigate(['lima']);
    }
  }

}
