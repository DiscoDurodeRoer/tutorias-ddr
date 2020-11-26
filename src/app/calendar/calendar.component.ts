import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public show: boolean;
  public data: any;

  constructor(private config: DdrConfigurationService) {
    const infoJSON = this.config.getAllData();
    this.show = infoJSON.available;
    this.data = infoJSON.availability;
  }

  ngOnInit() {
  }

}
