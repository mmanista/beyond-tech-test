import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppTitleComponent } from './components/app-title/app-title.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { SingleVideoTileComponent } from './components/single-video-tile/single-video-tile.component';
import { PlayVideoComponent } from './components/play-video/play-video.component';
import { ArrowSvgComponent } from './components/arrow-svg/arrow-svg.component';
import { DateTimePipe } from './pipes/date-time.pipe';
import { TextEllipsisPipe } from './pipes/text-ellipsis.pipe';
import { PublicVideosOnlyPipe } from './pipes/public-videos-only.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
