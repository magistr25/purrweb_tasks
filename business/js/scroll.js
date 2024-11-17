export const initScroll = () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });
};
