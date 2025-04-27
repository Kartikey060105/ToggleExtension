document.body.classList.toggle('darkMode');

const elements = document.querySelectorAll('*');

if (document.body.classList.contains('darkMode')) {
    elements.forEach((el) => {
        el.style.backgroundColor = '#121212';
        el.style.color = '#ffffff';

        if (el.tagName === 'IMG') {
            el.style.filter = 'invert(100%)';
        }
        if (el.tagName === 'VIDEO') {
            el.style.filter = 'brightness(0.5)'; 
        }
        if (el.tagName === 'A') {
            el.style.color = '#82aaff'; 
        }

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') {
            el.style.backgroundColor = '#333';
            el.style.color = '#fff';
            el.style.border = '1px solid #555';
        }
    });
} else {
    elements.forEach((el) => {
        el.style.backgroundColor = ''; 
        el.style.color = '';
        if (el.tagName === 'IMG') {
            el.style.filter = '';
        }
        if (el.tagName === 'VIDEO') {
            el.style.filter = '';
        }
        if (el.tagName === 'A') {
            el.style.color = '';
        }
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') {
            el.style.backgroundColor = '';
            el.style.color = '';
            el.style.border = '';
        }
    });
}
