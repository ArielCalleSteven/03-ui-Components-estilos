import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css'
})
export class BreadcrumbsComponent {
  items = input<{ label: string; link?: string }[]>([]);
}