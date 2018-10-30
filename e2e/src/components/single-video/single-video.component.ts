import { ButtonElement, PlainElement } from '../../elements';

export const SingleVideoComponent = {
    videoElement: (index) => new ButtonElement('video-' + index),
    publishedOnElement: (index) => new PlainElement('publishedOn-' + index),
    descriptionElement: (index) => new PlainElement('description-' + index)
};
