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