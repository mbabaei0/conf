import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { ResObject } from '../models/speaker';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // get speaker from sever as collection 
  fetchSpeakers(){
    return this.http.get<ResObject>(`${this.baseUrl}/speakers`)
      .pipe(map( data => data.collection.items))
  }
  // get speaker deatil info
  fetchSpeakerDetail(url: string){
    return this.http.get(url, {responseType: 'text'})
      
  
  }
  // get speaker sessions
  fetchSessions(url: string){
    return this.http.get<ResObject>(url)
      .pipe(map( data => data.collection.items))
  }
}
