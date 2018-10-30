import { browser } from 'protractor';
import { SingleVideoComponent } from '../components/single-video/single-video.component';
import { PlayVideoComponent } from '../components/play-video/play-video.component';
import { VideosListComponent } from '../components/videos-list/videos-list.component';

const videoData = {
    publishedOn: '',
    description: ''
};


describe('A user, when having a list of videos', () => {
    it('wants to store the data of 4th video from the second page', async() => {
        browser.get(browser.baseUrl);
        VideosListComponent.getNextPageButton().click();
        SingleVideoComponent.videoElement(3).waitForVisible();
        videoData.publishedOn = await SingleVideoComponent.publishedOnElement(3).getText();
        videoData.description = await SingleVideoComponent.descriptionElement(3).getText();
        expect(videoData.publishedOn).toBeTruthy();
    });
    it('then go to this video', () => {
        SingleVideoComponent.videoElement(3).click();
    });
    it('and see that the correct video is in the player', () => {
        PlayVideoComponent.videoThumbnailElement().waitForVisible();
        expect(PlayVideoComponent.publishedOnElement().getText()).toEqual(videoData.publishedOn);
        expect(PlayVideoComponent.descriptionElement().getText()).toEqual(videoData.description);
    });
    it('and after that, he wants to go back to the homepage', () => {
        // TODO: create menubar component to be able to go back to the homepage in a proper way
        browser.get(browser.baseUrl);
    });
    it('to see that he is on the same page as before, so pagination has been stored properly', () => {
        SingleVideoComponent.videoElement(3).waitForVisible();
        expect(SingleVideoComponent.publishedOnElement(3).getText()).toEqual(videoData.publishedOn);
        expect(SingleVideoComponent.descriptionElement(3).getText()).toEqual(videoData.description);

    });
});
