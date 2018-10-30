import { ElementFinder, element, by, promise } from 'protractor';
import { Wait } from '../../utils/waitUtils';

export abstract class BaseElement {

    constructor(
        protected id: string,
        protected baseElement?: ElementFinder
    ) {
        if (!this.baseElement) {
            this.baseElement = element(by.id(id));
        }
    }

    isPresent(): promise.Promise<boolean> {
        return this.baseElement.isPresent();
    }

    isEnabled(): promise.Promise<boolean> {
        this.waitForVisible();
        return this.baseElement.isEnabled();
    }

    isSelected(): promise.Promise<boolean> {
        this.waitForVisible();
        return this.baseElement.isSelected();
    }

    getText(): promise.Promise<string> {
        this.waitForVisible();
        return this.baseElement.getText();
    }


    waitForPresent(): void {
        Wait.forPresent(this.baseElement, this.id);
    }

    waitForVisible(): void {
        Wait.forVisible(this.baseElement, this.id);
    }

    waitForNotVisible(): void {
        Wait.forNotVisible(this.baseElement, this.id);
    }

    waitForSelected(): void {
        Wait.forSelected(this.baseElement, this.id);
    }

    waitForClickable(): void {
        Wait.forClickable(this.baseElement, this.id);
    }

}

