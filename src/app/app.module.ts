// Pre-Defined Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// Third Party Modules
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';


// App Components
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelSecondaryComponent } from './channel-secondary/channel-secondary.component';
import { FeedsComponent } from './feeds/feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ChannelSecondaryComponent,
    FeedsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
