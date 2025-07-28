import ScrollMagic from "scrollmagic";

const scrollController = new ScrollMagic.Controller();

export default {
    /**
     * Register a scroll animation using css selector.
     * @param {String} selector Valid css selector.
     * @param {String} type Animation name e.g. "fade-in".
     * ! @important You must declare a starting value in your css.
     */
    registerScrollController(selector, type) {
        new ScrollMagic.Scene({
            triggerElement: selector
        })
        .setClassToggle(selector, type)
        .addTo(scrollController);
    }
}

