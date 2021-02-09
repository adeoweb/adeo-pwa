const toWindowTop = (): void => {
    window.scrollTo(0, 0);
};

const scrollToElement = (selector: string): void => {
    const element = document.querySelector(selector);

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: 'smooth'
    });
};

const scrollTo = (selector = ''): void => {
    if (!selector) {
        toWindowTop();

        return;
    }

    scrollToElement(selector);
};

export default scrollTo;
