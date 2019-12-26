var ord = function(string) {
    return string.charCodeAt(0);
}
var abcToInt = function(abc) {
    abc = abc.toLowerCase();
    if (abc.length === 0) {
        return 0;
    }
    var temp = 0;
    var base = 26;
    var j = 1;
    var i = abc.length;
    while (i > 0) {
        temp += j * (ord(abc[i - 1]) - 97);
        j *= base;
        i -= 1;
    }
    return temp;
}
var isNumeric = function(num) {
    return !isNaN(num);
}



// Begin
var campaign = function(input) {
    if (isNumeric(input)) {
        window.open("https://adfox.yandex-team.ru/modifyCampaignForm.php?campaignID=" + input, "_blank");
    }
}
document.querySelector("#campaign > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    campaign(input);
});
document.querySelector("#campaign > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        campaign(input);
    }
});
// End

// Begin
var banner = function(input) {
    if (isNumeric(input)) {
        window.open("https://adfox.yandex-team.ru/modifyBannerForm.php?bannerID=" + input, "_blank");
    } else {
        window.open("https://adfox.yandex-team.ru/modifyBannerForm.php?bannerID=" + window.abcToInt(input), "_blank");
    }
}
document.querySelector("#banner > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    banner(input);
});

document.querySelector("#banner > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        banner(input);
    }
});
// End

// Begin
var superCampaign = function(input) {
    if (isNumeric(input)) {
        window.open("https://adfox.yandex-team.ru/modifySuperCampaignForm.php?superCampaignID=" + input, "_blank");
    }
}
document.querySelector("#superCampaign > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    superCampaign(input);
});

document.querySelector("#superCampaign > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        superCampaign(input);
    }
});
// End

// Begin
var position = function(input) {
    if (isNumeric(input)) {
        window.open("https://adfox.yandex-team.ru/modifyPositionForm.php?ID=" + input, "_blank");
    } else {
        window.open("https://adfox.yandex-team.ru/modifyPositionForm.php?ID=" + window.abcToInt(input), "_blank");
    }
}
document.querySelector("#position > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    position(input);
});

document.querySelector("#position > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        position(input);
    }
});
// End

// Begin
var site = function(input) {
    if (isNumeric(input)) {
        window.open("https://adfox.yandex-team.ru/modifyWebsiteForm.php?navigationTab=websites&websiteID=" + input, "_blank");
    } else {
        window.open("https://adfox.yandex-team.ru/modifyWebsiteForm.php?navigationTab=websites&websiteID=" + window.abcToInt(input), "_blank");
    }
}
document.querySelector("#site > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    site(input);
});

document.querySelector("#site > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        site(input);
    }
});
// End

// Begin
var place = function(input) {
    if (isNumeric(input)) {
        window.open("https://adfox.yandex-team.ru/modifyPlaceForm.php?navigationTab=websites&placeID=" + input, "_blank");
    } else {
        window.open("https://adfox.yandex-team.ru/modifyPlaceForm.php?navigationTab=websites&placeID=" + window.abcToInt(input), "_blank");
    }
}
document.querySelector("#place > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    place(input);
});

document.querySelector("#place > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        place(input);
    }
});
// End

// Begin
var bannerType = function(input) {
    if (isNumeric(input)) {
        window.open("https://adfox.yandex-team.ru/modifyBannerTypeForm.php?bannerTypeID=" + input, "_blank");
    } else {
        window.open("https://adfox.yandex-team.ru/modifyBannerTypeForm.php?bannerTypeID=" + window.abcToInt(input), "_blank");
    }
}

document.querySelector("#bannerType > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    bannerType(input);
});

document.querySelector("#bannerType > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        bannerType(input);
    }
});
// End

//Begin

document.querySelector("#abc > button").addEventListener("click", function() {
    var input = this.parentNode.querySelector("input").value.trim();
    var convertedInput = window.abcToInt(input);
    this.parentNode.querySelector("input").value = convertedInput;
});

document.querySelector("#abc > input").addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        var input = this.value.trim();
        var convertedInput = window.abcToInt(input);
        this.value = convertedInput;
    }
});
//End