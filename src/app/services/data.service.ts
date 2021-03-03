import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ISpaeker } from '../models/speaker';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _speakers: Subject<Array<ISpaeker>> = new BehaviorSubject<Array<ISpaeker>>([]);
  public readonly speakers: Observable<Array<ISpaeker>> = this._speakers.asObservable();

  private _info: Subject<string> = new BehaviorSubject<string>('');
  public readonly info: Observable<string> = this._info.asObservable();

  private _sessions: Subject<Array<ISpaeker>> = new BehaviorSubject<Array<ISpaeker>>([]);
  public readonly sessions: Observable<Array<ISpaeker>> = this._sessions.asObservable();

  constructor(private apiService: ApiService) { }

  // get and set Speakers
  getSpeakers() {
    this.apiService.fetchSpeakers().subscribe((res: ISpaeker[]) => {
      this._speakers.next(res)
    })
  }
  // get and set  spkaer detail
  getSpeakerDetail(url: string) {
    this._info.next('loading...')  
    this.apiService.fetchSpeakerDetail(url).subscribe((res: string) => {
      this._info.next(res)      
    })
  }

  // get sopeker sessions
  getSessions(url: string) {
    this._sessions.next(null)
    this.apiService.fetchSessions(url).subscribe((res: ISpaeker[]) => {
      this._sessions.next(res)
    })
  }
}
