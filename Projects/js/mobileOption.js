// Make all MOBILE option divs Functionable
function mobileOptionClickable(clickedIcon) {

    // close all active options
    function closeAllOptions() {
        // Options Main Div
        const allInfoSection = document.querySelectorAll(
            ".apartment-info-section"
        );
        if (!allInfoSection) {
            return;
        }

        // For every option do this
        allInfoSection.forEach((section) => {
            // Unhighlight It
            section.querySelector(".info-title").classList.remove("active");
            // Close Option Description
            section.classList.remove("showSection");

            // Change Icon
            const sectionIcon = section
                .querySelector(".info-title")
                .querySelector("i");
            sectionIcon.classList.add("fa-plus");
            sectionIcon.classList.remove("fa-minus");
        });
    }

    const mainOptionDiv = clickedIcon.parentElement;
    const optionIcon = clickedIcon.querySelector("i");

    // Checks if the option is active or not
    const alreadyActive = mainOptionDiv.classList.contains("showSection");
    closeAllOptions();

    // Highlight this option
    clickedIcon.classList.add("active");

    // Check if this is not already active (means user want to see the option)
    if (!alreadyActive) {
        mainOptionDiv.classList.add("showSection");
        // Let showing transition complete and then change the icon
        setTimeout(() => {
            optionIcon.classList.remove("fa-plus");
            optionIcon.classList.add("fa-minus");
        }, 100);
        return;
    }

    // Means user want to close the option
    mainOptionDiv.classList.remove("showSection");
    // Let closing transition complete and then change the icon
    setTimeout(() => {
        optionIcon.classList.add("fa-plus");
        optionIcon.classList.remove("fa-minus");
    }, 100);
}

export { mobileOptionClickable };
