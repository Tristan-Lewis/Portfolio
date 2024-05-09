const container = document.querySelector(".title");
const text = "{ Front-End Developer }"

const typeText = (element, text, i = 0) => {
        element.textContent += text[i];

        if (i === text.length - 1) {
            return;
        }

        setTimeout(() => typeText(element, text, i + 1), 50);
        
    }

typeText(container, text);