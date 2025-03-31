import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { InputsHandleDirective } from './directives/inputs-handle.directive';

@Component({
  selector: 'app-root',
  imports: [CardComponent, InputsHandleDirective ,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputValue = 'hello';

  showForConsole(element: any) {
    console.log(element);
  }
}
