/**
 * Created by User on 06.04.2017.
 */
var THEME_NUMBER = 1;
var DEFAULT_THEME = 1;
var EXT = 'less';


function getUrl(num) {
    return EXT + '/' + EXT + 'less-styles.th' + num + '.css';
}
function getThemeNumber() {
    THEME_NUMBER = THEME_NUMBER % 2 === 0 ? 1 : 2;
    return THEME_NUMBER;
}
function initialize() {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', getUrl(DEFAULT_THEME));
    document.head.appendChild(link);
}
function initListener() {
    document
        .querySelector('.nav__theme')
        .addEventListener('click', changeTheme)
}
function changeTheme() {
    document.head
        .querySelector('link')
        .setAttribute('href', getUrl(getThemeNumber()))

}
initialize();
window.addEventListener('load', initListener);
