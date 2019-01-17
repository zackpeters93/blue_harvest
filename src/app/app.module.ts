import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { EventComponent } from './public/event/event.component';
import { SettingsComponent } from './public/settings/settings.component';
import { EventResourcesComponent } from './public/event/event-resources/event-resources.component';
import { OverviewComponent } from './public/event/overview/overview.component';
import { StepsComponent } from './public/event/steps/steps.component';
import { FlowchartComponent } from './public/event/steps/flowchart/flowchart.component';
import { StepComponent } from './public/event/steps/step/step.component';
import { TrackerComponent } from './public/event/steps/tracker/tracker.component';
import { EquipmentComponent } from './admin/equipment/equipment.component';
import { EquipEditComponent } from './admin/equipment/equip-edit/equip-edit.component';
import { EventsComponent } from './admin/events/events.component';
import { EventEditComponent } from './admin/events/event-edit/event-edit.component';
import { EventStepsComponent } from './admin/events/event-steps/event-steps.component';
import { StepEditComponent } from './admin/events/event-steps/step-edit/step-edit.component';
import { ResourcesComponent } from './admin/resources/resources.component';
import { ResourceEditComponent } from './admin/resources/resource-edit/resource-edit.component';
import { SystemSettingsComponent } from './admin/system-settings/system-settings.component';
import { UsersComponent } from './admin/users/users.component';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import { UserItemComponent } from './admin/users/user-list/user-item/user-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PublicComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    EventComponent,
    SettingsComponent,
    EventResourcesComponent,
    OverviewComponent,
    StepsComponent,
    FlowchartComponent,
    StepComponent,
    TrackerComponent,
    EquipmentComponent,
    EquipEditComponent,
    EventsComponent,
    EventEditComponent,
    EventStepsComponent,
    StepEditComponent,
    ResourcesComponent,
    ResourceEditComponent,
    SystemSettingsComponent,
    UsersComponent,
    UserDetailComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    JwBootstrapSwitchNg2Module,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
