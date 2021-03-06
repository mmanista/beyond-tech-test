import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTitleComponent } from './components/app-title/app-title.component';
import { HttpClientModule } from '@angular/common/http';
import { VideosService } from './services/videos.service';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideosListResolver } from './components/videos-list/videos-list.resolver';
import { SingleVideoTileComponent } from './components/single-video-tile/single-video-tile.component';
import { DateTimePipe } from './pipes/date-time.pipe';
import { TextEllipsisPipe } from './pipes/text-ellipsis.pipe';
import { PublicVideosOnlyPipe } from './pipes/public-videos-only.pipe';
import { PlayVideoComponent } from './components/play-video/play-video.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ArrowSvgComponent } from './components/arrow-svg/arrow-svg.component';

@NgModule({
    declarations: [
        AppComponent,
        AppTitleComponent,
        VideosListComponent,
        SingleVideoTileComponent,
        PlayVideoComponent,
        ArrowSvgComponent,
        DateTimePipe,
        TextEllipsisPipe,
        PublicVideosOnlyPipe,
        SafeUrlPipe
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
