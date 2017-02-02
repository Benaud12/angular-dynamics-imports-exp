import { Component, OnInit } from '@angular/core';
import { LoadDataService } from './services/load-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private service: LoadDataService) { }

  public ngOnInit(): void {
    this.service.loadStuff().subscribe((r) => {
      debugger;
    });
  }
}
