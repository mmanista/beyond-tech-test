import { PlainElement } from '../../elements';

export const PlayVideoComponent = {
    videoThumbnailElement: () => new PlainElement('playerThumbnail'),
    publishedOnElement: () => new PlainElement('videoPublishedDate'),
    descriptionElement: () => new PlainElement('videoDescription')
};
