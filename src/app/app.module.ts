import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleComponent } from './components/app-title/app-title.component';
import { HttpClientModule } from '@angular/common/http';
import { VideosService } from './services/videos.service';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideosListResolver } from './components/videos-list/videos-list.resolver';

@NgModule({
    declarations: [
        AppComponent,
        AppTitleComponent,
        VideosListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [VideosService, VideosListResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
