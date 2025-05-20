function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(tabId)) {
            link.classList.add('active');
        }
    });
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('copy-button').addEventListener('click', () => {
    const code = document.querySelector('.arduino-code').innerText;
    navigator.clipboard.writeText(code)
        .then(() => {
            const btn = document.getElementById('copy-button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            btn.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '#00b4ff';
            }, 2000);
        })
        .catch(err => {
            console.error('Error al copiar:', err);
            alert('Error al copiar el código');
        });
});

document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
    
    const title = document.querySelector('header h1');
    title.addEventListener('mouseover', () => {
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = '';
        }, 10);
    });
});