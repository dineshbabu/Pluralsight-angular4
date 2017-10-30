import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event-service'

@Component({
    selector: 'events-list',
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
  events : any[]
    constructor(private eventService: EventService) {

    } 

    ngOnInit(){
      this.events = this.eventService.getEvents()
    }

    handleThumbNailClick(eventName){
      toastr.success(eventName)
    }
}