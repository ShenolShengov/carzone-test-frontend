import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PrimeIcons, MenuItem} from 'primeng/api';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, MenuModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'carzone-test-frontend';
  items!: MenuItem[];

  ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: PrimeIcons.PLUS,
            },
            {
                label: 'Delete',
                icon: PrimeIcons.TRASH
            }
        ];
    }
}
