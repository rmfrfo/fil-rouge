import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly appName = 'TechCorp RH';
  protected readonly userName = signal('Claire Martin');
  protected readonly currentDate = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Etat d'ouverture de la navigation sur mobile.
  protected readonly navOpen = signal(false);

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }
}
