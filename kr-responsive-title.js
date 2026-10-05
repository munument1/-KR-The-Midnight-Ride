document.addEventListener('DOMContentLoaded', setupKoreanResponsiveTitle);
window.addEventListener('resize', setupKoreanResponsiveTitle);

function setupKoreanResponsiveTitle() {
    const headerTitle = document.getElementById('headerTitle');
    if (!headerTitle) return;

    const fullTitle = 'The Midnight Ride 한국어';
    const shortTitle = 'TMR 한국어';
    const isNarrow = window.innerWidth < 900;

    headerTitle.setAttribute('data-full-title', fullTitle);
    headerTitle.textContent = isNarrow ? shortTitle : fullTitle;
}
