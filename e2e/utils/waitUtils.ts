'use strict';
import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

const _timeout = 10000; // 10 seconds

function waitForNotVisible(webElement: ElementFinder, idString = '', timeout = _timeout): void {
    browser.wait(
        ExpectedConditions.invisibilityOf(webElement),
        timeout,
        'Element ' + idString + ' taking too long to disappear off screen'
    );
}


function waitForPresent(webElement: ElementFinder, idString = ''): void {
    const loadingBarElement = element(by.id('loading-bar'));
    waitForNotVisible(loadingBarElement, 'loadingBarElement', 30000);
    browser.wait(
        ExpectedConditions.presenceOf(webElement),
        _timeout,
        'Element ' + idString + ' taking too long to appear in the DOM'
    );
}

function waitForClickable(webElement: ElementFinder, idString = '', shouldScroll = true): void {
    waitForVisible(webElement, idString, shouldScroll);
    browser.wait(
        ExpectedConditions.elementToBeClickable(webElement),
        _timeout,
        'Element ' + idString + ' taking too long to become clickable'
    );
}

function waitForSelected(webElement: ElementFinder, idString = '', shouldScroll = true): void {
    waitForVisible(webElement, idString, shouldScroll);
    browser.wait(
        ExpectedConditions.elementToBeSelected(webElement),
        _timeout,
        'Element ' + idString + ' taking too long to become selected'
    );
}

function waitUntilUrlContains(string: string, timeoutMessage?: string): void {
    if (!timeoutMessage) {
        timeoutMessage = 'Looking for a ' + string + ' substring in the URL has timed out';
    }
    browser.wait(
        ExpectedConditions.urlContains(string),
        _timeout,
        timeoutMessage
    );
}

function waitForVisible(webElement: ElementFinder, idString = '', shouldScroll = true): void {
    waitForPresent(webElement, idString);
    if (shouldScroll) {
        browser.executeScript('arguments[0].scrollIntoView(true);scrollBy(0, -200);', webElement.getWebElement());
    }
    browser.wait(
        ExpectedConditions.visibilityOf(webElement),
        _timeout,
        'Element ' + idString + ' taking too long to appear on screen'
    );
}

export const Wait = {
    forPresent: waitForPresent,
    forVisible: waitForVisible,
    forNotVisible: waitForNotVisible,
    forClickable: waitForClickable,
    forSelected: waitForSelected,
    untilUrlContains: waitUntilUrlContains,
};
