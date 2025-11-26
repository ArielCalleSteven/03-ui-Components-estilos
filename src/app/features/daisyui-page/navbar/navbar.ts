import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '../../../shared/components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, ThemeSwitcherComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
