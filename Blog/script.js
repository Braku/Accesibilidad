let textSize = 1;

function toggleAccessibilityMenu() {
    const menu = document.getElementById('accessibility-menu');
    menu.classList.toggle('open');
    const button = document.getElementById('accessibility-toggle');
    const isOpen = menu.classList.contains('open');
    button.setAttribute('aria-label', isOpen ? 'Cerrar menú de accesibilidad' : 'Abrir menú de accesibilidad');
}

function adjustTextSize(amount) {
    textSize += amount;
    document.body.style.fontSize = textSize + 'em';
}

function toggleGrayscale() {
    document.body.classList.toggle('grayscale');
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

function toggleLightDarkBackground() {
    document.body.classList.toggle('dark-background');
    document.querySelectorAll('article').forEach(article => {
        article.classList.toggle('dark-background');
    });
}

function toggleUnderlineLinks() {
    document.querySelectorAll('a').forEach(link => {
        link.classList.toggle('underline');
    });
}

function toggleReadableFont() {
    document.body.classList.toggle('readable-font');
}

function resetAccessibility() {
    textSize = 1;
    document.body.style.fontSize = '';
    document.body.classList.remove('grayscale', 'high-contrast', 'negative-contrast', 'dark-background', 'readable-font');
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('underline');
    });
}

function showMore() {
    const moreInfo1 = document.getElementById('more-info1');
    const button = document.querySelector('button[onclick="showMore()"]');
    if (moreInfo1.style.display === 'none') {
        moreInfo1.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
    } else {
        moreInfo1.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
    }
}

function showMore1() {
    const moreInfo2 = document.getElementById('more-info2');
    const button = document.querySelector('button[onclick="showMore1()"]');
    if (moreInfo2.style.display === 'none') {
        moreInfo2.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
    } else {
        moreInfo2.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
    }
}
