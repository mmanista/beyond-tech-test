import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosListComponent } from './components/videos-list/videos-list.component';
import { VideosListResolver } from './components/videos-list/videos-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: VideosListComponent,
        resolve: {
            videosData: VideosListResolver
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
