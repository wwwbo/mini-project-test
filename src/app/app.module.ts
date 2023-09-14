import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


import { SidenavComponent } from './containers/sidenav/sidenav.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { FooterComponent } from './containers/footer/footer.component';
import { VideosComponent } from './pages/videos/videos.component';
import { PeopleComponent } from './pages/people/people.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { SearchComponent } from './shared/search/search.component';
import { DisplayContentComponent } from './shared/display-content/display-content.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    VideosComponent,
    PeopleComponent,
    DocumentsComponent,
    ChannelsComponent,
    ActivityComponent,
    SearchComponent,
    DisplayContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
