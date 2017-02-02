import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Inject } from '@angular/core';
import { Request } from '@angular/http';

export class DevelopmentBackend implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    let jsonData = require('./mock.json');
    // let jsonData = [
    //   {
    //     "id": "1",
    //     "name": "Windstorm"
    //   },
    //   {
    //     "id": "2",
    //     "name": "Bombasto"
    //   },
    //   {
    //     "id": "3",
    //     "name": "Magneta"
    //   },
    //   {
    //     "id": "4",
    //     "name": "Tornado"
    //   }
    // ];
    return jsonData;
  }
}
