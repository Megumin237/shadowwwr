document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const livePreview = document.getElementById('livePreview');

    textInput.addEventListener('input', function() {
        updatePreview();
    });

    function updatePreview() {
        let inputText = textInput.value;
        let formattedText = '';
        let isGold = false;

        for (let i = 0; i < inputText.length; i++) {
            if (inputText[i] === '^') {
                if (inputText[i + 1] === 'a') {
                    isGold = true;
                    i++; // Skip the 'a'
                    continue; // Don't add '^' or 'a' to output
                } else if (inputText[i + 1] === '7') {
                    isGold = false;
                    i++; // Skip the '7'
                    continue; // Don't add '^' or '7' to output
                }
            }

            let span = document.createElement('span');
            span.textContent = inputText[i];
            if (isGold) {
                span.classList.add('gold-text');
            } else {
                span.classList.add('white-text'); // Or you can just rely on default white from CSS
            }
            formattedText += span.outerHTML; // Append the HTML of the span to the output
        }
        livePreview.innerHTML = formattedText;
    }

    // Initial preview update on page load (optional, if you want to display initial text)
    updatePreview();
});
