import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [CharacterService]
})
export class WelcomeComponent implements OnInit {

  constructor(public characterService: CharacterService) { }

  ngOnInit() {
  }

  submitCharacter(name: string, career: string, nationality: string) {
    var newCharacter: Character = new Character(name, career, nationality);
    this.characterService.addCharacter(newCharacter);
  }

}
