import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()

export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.characters = angularFire.database.list('characters');

  }

  getCharacters() {
    return this.characters;
  }

  addCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
  }

  getCharacterbyId(characterId: string) {
    // return this.angularFire.database.object('characters/' + characterId);
    // characterId = this.Character.$key;
    return this.angularFire.database.object(characterId);

  }

}
