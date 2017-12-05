import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event-service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 events</h1>
        <hr> 
        <div class="row">
            <div *ngFor="let eventDetails of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbNailClick(eventDetails.name)" [event] = eventDetails > </event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit { 
  events : IEvent[]
    constructor(private eventService: EventService, private toastr: ToastrService,
    private route:ActivatedRoute ) {

    } 

    ngOnInit(){
      this.events = this.route.snapshot.data['eventsList']
    }

    handleThumbNailClick(eventName){
      this.toastr.success(eventName)
    }
}