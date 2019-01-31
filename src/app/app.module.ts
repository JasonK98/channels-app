import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelSecondaryComponent } from './channel-secondary/channel-secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ChannelSecondaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
