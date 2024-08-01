


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));







function popupFunction(event, popupId) {
    
    event.stopPropagation();
    document.querySelectorAll('.popup .popup-comp-sci, .popup .popup-datasci, .popup .popup-barista, .popup .popup-webdev, .popup .popup-concerts, .popup .popup-travel, .popup .popup-music').forEach(popup => {
        popup.style.display = 'none'; // Hide all popups
    });
    var popup = document.getElementById(popupId);
    popup.style.display = 'block'; // Show specific popup
    const factsCaption = document.getElementById("pink-circle");
    factsCaption.classList.add('hide');
    const clickme = document.getElementById("click-me");
    
    // Prevents closing when clicking inside the popup
    if (event.target.closest(popupId)) {
        return;
    }
    
    if (popupId == 'popup1') {
        const output = document.querySelector(".typing-text");

        let res;
        let typeSpeed = 60;
        let intervalId;
        let charCount = 0;
        let wordIndex = 0;
        let fullText = "";

        const words = [
            "> I love ",
            "computer science ",
            "and ",
            "coding!  ",
            "My favorite classes have been ",
            "Object-Oriented Programming ",
            "and ",
            "Database Programming.  ",
            "My favorite languages to code in are ",
            "Python ",
            "and ",
            "SQL."
        ];

        const colors = [
            "white",
            "orange",
            "white",
            "limegreen",
            "white",
            "orange",
            "white",
            "limegreen",
            "white",
            "orange",
            "white",
            "limegreen",
            
        ];

        function type() {

            if (charCount <= words[wordIndex].length) {
                
                const currentChar = words[wordIndex].charAt(charCount) == '&#32' ? ' ' : words[wordIndex].charAt(charCount);
                fullText += `<span style="color: ${colors[wordIndex]}; font-family: monospace">${currentChar}</span>`;
                output.innerHTML = fullText;
     
                charCount++;
            } else {
                clearInterval(intervalId);
                wordIndex++;
                if (wordIndex < words.length) {
                    charCount = 0;
                    intervalId = setInterval(type, typeSpeed);
                }
            }
        }

        // Clear any existing interval before starting a new one
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(type, typeSpeed);
    }

  
}

function closePopup(event, popupId) {
    event.stopPropagation();
    var popup = document.getElementById(popupId);
    popup.style.display = 'none'; // Hide specific popup
}

// Ensure the popup container doesn't close when clicking inside the popup content
document.querySelectorAll('.popup').forEach(function(popup) {
    popup.addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.add('appear');
        }
    });
});



