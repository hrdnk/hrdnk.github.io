document.addEventListener('DOMContentLoaded', () => {
    function update() {
        const cards = document.querySelectorAll('.card');
        const N = cards.length;

        if (window.innerWidth <= 600) {
            for (let i = 0; i < N; i++) {
                cards[i].style.setProperty('--triangle-width', '30%');
            }
        } else {
            const heights = [];
            const widths = [];

            let largestCardIndex = 0;
            let maxHeight = 0;

            for (let i = 0; i < N; i++) {
                const height = cards[i].clientHeight;

                heights.push(height);

                if (height > maxHeight) {
                    maxHeight = height;
                    largestCardIndex = i;
                }
            }

            widths[largestCardIndex] = 45;

            for (let i = largestCardIndex + 1; i < N; i++) {
                const width = widths[i-1] * heights[i] / heights[i-1];

                widths[i] = width;
            }

            for (let i = largestCardIndex - 1; i >= 0; i--) {
                const width =  widths[i+1] * heights[i] / heights[i+1];

                widths[i] = width;
            }

            for (let i = 0; i < N; i++) {
                cards[i].style.setProperty('--triangle-width', `${widths[i]}%`);
            }
        }
    }

    update();

    window.addEventListener('resize', update);
});
