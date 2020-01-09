var copyClientUrl = function() {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        var str = tabs[0].url;
        if (str.indexOf("adfox") > -1 && str.indexOf("yandex-team") > -1) {
            str = str.replace("-team", "");
        }
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    });
};

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var modUrl;
        if (details.url.indexOf('adfox.yandex.ru') > -1) {
            modUrl = details.url.replace('adfox.yandex.ru', 'adfox.yandex-team.ru');
        } else if (details.url.indexOf('login.adfox.ru') > -1) {
            modUrl = details.url.replace('login.adfox.ru', 'adfox.yandex-team.ru');
        }
        return { redirectUrl: modUrl };
    }, { urls: ["*://login.adfox.ru/*", "*://adfox.yandex.ru/*"] },
    ["blocking"]);

chrome.contextMenus.create({
      title: "Copy Client URL",
      contexts: ["browser_action"],
      onclick: function() {
        copyClientUrl();
      }
});