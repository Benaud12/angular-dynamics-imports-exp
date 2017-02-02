import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class LoadDataService {
  constructor(private http: Http) { }

  public loadStuff() {
    return this.http.get('/api/heroes');
  }
}
