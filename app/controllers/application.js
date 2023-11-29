import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import move from 'ember-animated/motions/move';
import { easeOut, easeIn } from 'ember-animated/easings/cosine';

export default class ApplicationController extends Controller {
  @tracked showThing = false;

  @action
  toggleThing() {
    this.showThing = !this.showThing;
  }

  *transition({ insertedSprites, keptSprites, removedSprites }) {
    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ x: window.innerWidth });
      yield move(sprite, { easing: easeOut });
    }

    for (let sprite of keptSprites) {
      yield move(sprite);
    }

    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: window.innerWidth });
      yield move(sprite, { easing: easeIn });
    }
  }
}
