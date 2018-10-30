import { ElementFinder, promise } from 'protractor';
import { BaseElement } from './base.element';

export class ButtonElement extends BaseElement {

    constructor(
        id: string,
        baseElement?: ElementFinder
    ) {
        super(id, baseElement);
    }

    getText(): promise.Promise<string> {
        this.waitForVisible();
        return this.baseElement.getText();
    }

    click(): promise.Promise<void> {
        this.waitForClickable();
        return this.baseElement.click();
    }

    submit(): promise.Promise<void> {
        this.waitForClickable();
        return this.baseElement.submit();
    }

}
