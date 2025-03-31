import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    'class': 'card',
    '[class.secondary]': 'isSecondary()'
  }
})
export class CardComponent {

  private isSecondary = signal<boolean>(false);

  toggleSecondary() {
    this.isSecondary.set(!this.isSecondary());
  }
}
