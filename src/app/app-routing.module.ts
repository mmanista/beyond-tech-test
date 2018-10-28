import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideosListResolver } from './components/videos-list/videos-list.resolver';
import { PlayVideoComponent } from './components/play-video.component/play-video.component';

const routes: Routes = [
    {
        path: '',
        component: VideosListComponent,
        resolve: {
            videosData: VideosListResolver
        }
    },
    {
        path: 'play/:videoId',
        component: PlayVideoComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
