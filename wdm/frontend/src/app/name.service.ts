import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  name: string;
  receivedFilter: EventEmitter<string>;

  constructor(private http: HttpClient) { 
    this.receivedFilter = new EventEmitter<string>();
  }

  raiseEvent(name: string): void {
    this.name = name;
    this.receivedFilter.emit(this.name);
  }

}
