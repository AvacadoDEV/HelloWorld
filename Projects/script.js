import { mobileOptionClickable } from "./js/mobileOption.js";
import { webOptionClickable } from "./js/webOption.js";

// After html loaded fully
window.onload = () => {
    // Mobile View
    const mobileInfoOptions = document.querySelectorAll(".info-title");
    if (mobileInfoOptions) {
        // For every option make it functionable
        mobileInfoOptions.forEach((icon) => {
            icon.addEventListener("click", (e) => {
                mobileOptionClickable(e.currentTarget);
            });
        });
    }

    // Web View
    const webInfoOptions = document.querySelectorAll(".menu-option");
    if (webInfoOptions) {
        // For every option make it functionable
        webInfoOptions.forEach((option) => {
            option.addEventListener("click", (e) => {
                webOptionClickable(e.currentTarget);
            });
        });
    }

    // Default Option Set For Web View (First Option Content Displayed)
    document.querySelectorAll(".menu-option")[0].click();
};

// disable Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());
