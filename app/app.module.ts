import { NgModule } from'@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'

import { EventService } from './events/shared/event-service' 
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'

@NgModule({
    imports: [  
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent, 
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent
    ],
    providers: [
        EventService,
        ToastrService
    ],
    bootstrap: [EventsAppComponent]

})
export class AppModule{}