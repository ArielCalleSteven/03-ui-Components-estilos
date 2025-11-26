import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-simpsons',
  standalone: true,
  imports: [],
  templateUrl: './hero-simpsons.html',
  styleUrl: './hero-simpsons.css'
})
export class HeroSimpsonsComponent {
  simpsonsCount = input.required<number>();
  totalPages = input.required<number>();
}