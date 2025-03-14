document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("toggle-animation");

    let isAnimating = false;
    let animationInstance = null; // Store reference to animation

    if (menuBtn && sidebar) { 
        menuBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });
    } else {
        console.error("Sidebar or menu button not found in the document.");
    }

    function randomValues(duration = 1000, shouldRepeat = true) {
        animationInstance = anime({
            targets: ".square, .circle, .triangle",
            translateX: function () {
                return anime.random(-500, 500);
            },
            translateY: function () {
                return anime.random(-300, 300);
            },
            rotate: function () {
                return anime.random(0, 360);
            },
            scale: function () {
                return anime.random(0.2, 2);
            },
            duration: duration,
            easing: "easeInOutQuad",
            complete: function () {
                if (isAnimating && shouldRepeat) {
                    randomValues(); // Continue animation if it's active
                }
            }
        });
    }

    randomValues(1000, false); 
    setTimeout(() => {
        if (animationInstance) {
            animationInstance.pause(); // Stop after 100ms
        }
    }, 100);

    // Toggle animation on button click
    toggleBtn.addEventListener("click", function () {
        isAnimating = !isAnimating; // Toggle state

        if (isAnimating) {
            randomValues(); // Restart animation
            toggleBtn.textContent = "לעצור אנימציה";
        } else {
            animationInstance.pause(); // Stop animation
            toggleBtn.textContent = "להתחיל אנימציה";
        }
    });
});
