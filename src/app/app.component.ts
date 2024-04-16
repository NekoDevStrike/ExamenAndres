import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from "./popup/popup.component";
import { TableOverviewExample } from "./example/table-overview-example";





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PopupComponent, TableOverviewExample]
})
export class AppComponent {
  title = 'my-app';
}
