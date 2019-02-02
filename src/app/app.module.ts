// Pre-Defined Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Third Party Modules
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


// App Components
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
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
