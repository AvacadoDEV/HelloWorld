// Make all WEB option divs Functionable
function webOptionClickable(clickedOption) {

    // Unhighlight active option
    function resetActiveOptions() {
        const webOptions = document.querySelectorAll(".menu-option p");
        webOptions.forEach((option) => {
            option.classList.remove("active");
        });
    }

    const optionContainer = clickedOption.querySelector("p");
    const optionName = optionContainer.innerText.toLowerCase();
    resetActiveOptions();

    // Highlight this option
    optionContainer.classList.add("active");
    const optionResultArea = document.querySelector(
        ".apartement-info-result .result"
    );
    
    // Check which option is clicked
    if (optionName === "project overview") {
        // Text Element
        const textContent = document.createElement('p');
        textContent.setAttribute('class', 'info-description');
        textContent.innerText = `SOBHA Athena is the latest landmark of North Bengaluru. The project is the final addition to SOBHA City, our Mediterranean paradise. These luxurious homes are handcrafted for the modern-day moguls who go beyond the ordinary to build a kingdom of their own.`;

        // Showing text element in result area
        optionResultArea.innerHTML = textContent.outerHTML;

    } else if (optionName === "amenities") {

        // Returns Amenities Options HTML
        function returnOptionsHTML() {
            // Store Icon class and Icon Text
            const iconsToShow = {};
            // Get Icon class and text (from mobile icons)
            const allIcons = document.querySelectorAll('.mobile .amenities-option');
            allIcons.forEach((iconElement) => {
                const iconClass = iconElement.querySelector('i').className;
                const iconText = iconElement.querySelector('.option-title').innerHTML;
                iconsToShow[iconClass] = iconText;
            })

            // Main Holding Div
            const iconsContainer = document.createElement('div');
            iconsContainer.setAttribute('class', 'amenities-options-container');

            Object.keys(iconsToShow).forEach((icon) => {
                // Creating Option Element
                const iconElement = document.createElement('div');
                iconElement.setAttribute('class', 'amenities-option');
                // Adding Icon and Text
                iconElement.innerHTML = `<i class="${icon}"></i>
                <p class="option-title">${iconsToShow[icon]}</p>`;

                // Adding to Main Container
                iconsContainer.innerHTML += iconElement.outerHTML;
            });

            return iconsContainer.outerHTML;
        }

        // Showing Amenities Options element in result area
        optionResultArea.innerHTML = returnOptionsHTML();

    } else if (optionName === "rera numbers") {

        const reraNumber = 'PRM/KA/RERA/1251/309/PR/200526/003430';
        // Creating Rera Number Element
        const reraNumberElement = document.createElement('p');
        reraNumberElement.setAttribute('class', 'rera-number');
        reraNumberElement.innerHTML = `<i class="fas fa-arrow-right"></i>${reraNumber}`;

        // Showing Rera number element in result area
        optionResultArea.innerHTML = reraNumberElement.outerHTML;
    }
}

export { webOptionClickable };
