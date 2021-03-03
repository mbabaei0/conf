import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ISpaeker } from 'src/app/models/speaker';

@Component({
  selector: 'app-conf-list',
  templateUrl: './conf-list.component.html',
  styleUrls: ['./conf-list.component.scss']
})
export class ConfListComponent implements OnInit {

  speakers$: Observable<ISpaeker[]>;
  sessions$: Observable<ISpaeker[]>;
  info$: Observable<string>;
  panelOpenState = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // get speakers and set it in store 
    this.dataService.getSpeakers();

    this.speakers$ = this.dataService.speakers;
    this.sessions$ = this.dataService.sessions;
    this.info$ = this.dataService.info;

  }

  // on open panel get detail from server
  openPanel(spk: ISpaeker){
    this.dataService.getSessions(spk.links[0].href)
  }
  // gets info on hover
  getInfo(spk: ISpaeker){
    this.dataService.getSpeakerDetail(spk.href)
  }

}
