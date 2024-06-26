import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <tui-root>
      <div class="app__container">
        <tui-input
          [formControl]="searchControl"
          tuiTextfieldSize="s"
          tuiTextfieldIcon="tuiIconSearchLarge">
          Type a text
          <input tuiTextfield />
        </tui-input>
        <p select [color]="'yellow'" [text$]="selectedText$">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus dolores consequuntur aliquid iure maiores impedit. Quia assumenda amet accusantium perspiciatis facere fugiat quam explicabo, quisquam dolores sapiente unde tempora.</p>
      </div>
    </tui-root>
  `
})
export class AppComponent {
  title = 'EnKodTask5';
  searchControl: FormControl;
  selectedText$: Observable<string>;

  constructor() {
    this.searchControl = new FormControl('')
    this.selectedText$ = this.searchControl.valueChanges
  }


}
