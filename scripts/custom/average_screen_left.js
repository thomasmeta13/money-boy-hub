//tokens
const TOKENS_TO_DISPLAY = 3;
var tokens_start_index = 0;
var tokens_itemEL_array = [];
var tokens_containerEl = document.getElementById('tokens');
let tokens_array = [
    {
        "title": "anything",
        "tokens_itemId": "P1",
        "name": "Solana",
        "amount": "12500",
        "image": "assets/images/try.png"
    },
    {
        "title": "anything",
        "tokens_itemId": "P2",
        "name": "Ethereum",
        "amount": "12",
        "image": "assets/images/try.png"
    },
    {
        "title": "anything",
        "tokens_itemId": "P1",
        "name": "Bitcoin",
        "amount": "10",
        "image": "assets/images/try.png"
    },
    {
        "title": "anything",
        "tokens_itemId": "P2",
        "name": "Dodgecoin",
        "amount": "2400",
        "image": "assets/images/try.png"
    }
]
function build_tokens() {
    var tokens_totalEL = document.createElement('a-text');
    var tokens_total = 0;
    for (let tokens_item of tokens_array) {
        var tokens_itemEL = document.createElement('a-plane');
        tokens_containerEl.appendChild(tokens_itemEL);
        tokens_itemEL.setAttribute('raycaster-listen',);
        tokens_itemEL.classList.add("clickable");
        tokens_itemEL.classList.add("nocollision");
        tokens_itemEL.classList.add("tokens_item");
        tokens_itemEL.setAttribute('id', "'" + tokens_item.tokens_itemId + "'");
        tokens_itemEL.setAttribute('width', 0.8);
        tokens_itemEL.setAttribute('height', 0.3);
        tokens_itemEL.setAttribute('color', "#888899");
        tokens_itemEL.setAttribute('material', "shader: standard");

        var tokens_item_nameEL = document.createElement('a-text');
        tokens_itemEL.appendChild(tokens_item_nameEL);
        tokens_item_nameEL.setAttribute('value', tokens_item.name + ":");
        tokens_item_nameEL.setAttribute('wrap-count', 10);
        tokens_item_nameEL.setAttribute('baseline', "top");
        tokens_item_nameEL.setAttribute('x-offset', 0.05);
        tokens_item_nameEL.setAttribute("width", 0.5);
        tokens_item_nameEL.setAttribute('position', { x: -0.2, y: 0.1, z: 0.01 });

        var tokens_item_amountEL = document.createElement('a-text');
        tokens_itemEL.appendChild(tokens_item_amountEL);
        tokens_item_amountEL.setAttribute('value', tokens_item.amount);
        tokens_item_amountEL.setAttribute('wrap-count', 8);
        tokens_item_amountEL.setAttribute('baseline', "top");
        tokens_item_amountEL.setAttribute('x-offset', 0.05);
        tokens_item_amountEL.setAttribute("width", 0.5);
        tokens_item_amountEL.setAttribute('position', { x: -0.2, y: -0.025, z: 0.01 });

        var tokens_item_imageEL = document.createElement('a-image');
        tokens_itemEL.appendChild(tokens_item_imageEL);
        tokens_item_imageEL.setAttribute('src', tokens_item.image);
        tokens_item_imageEL.setAttribute("width", 0.2);
        tokens_item_imageEL.setAttribute("height", 0.2);
        tokens_item_imageEL.setAttribute('position', { x: -0.25, y: 0, z: 0.01 });

        tokens_total += parseInt(tokens_item.amount);
    }
    tokens_totalEL.setAttribute('value', tokens_total);
    tokens_totalEL.setAttribute('wrap-count', 15);
    tokens_totalEL.setAttribute('x-offset', 0.05);
    tokens_totalEL.setAttribute("width", 1.4);
    tokens_totalEL.setAttribute('position', { x: 0, y: 0.3, z: 0.01 });
    tokens_containerEl.appendChild(tokens_totalEL);

    tokens_itemEL_array = document.getElementsByClassName("tokens_item");
    update_scrollbar(0, TOKENS_TO_DISPLAY, tokens_itemEL_array, { x: -1, y: 0 }, { x: 1, y: 0 });
}
function scroll_tokens_left() {
    if (tokens_start_index > 0) {
        update_scrollbar(tokens_start_index -= 1, TOKENS_TO_DISPLAY, tokens_itemEL_array, { x: -1, y: 0 }, { x: 1, y: 0 });
    } else {
        update_scrollbar(tokens_start_index = Math.max(tokens_itemEL_array.length - TOKENS_TO_DISPLAY, 0), 3, tokens_itemEL_array, { x: -1, y: 0 }, { x: 1, y: 0 });
    }
}
function scroll_tokens_right() {
    if ((tokens_start_index + TOKENS_TO_DISPLAY - 1) < (tokens_itemEL_array.length - 1)) {
        update_scrollbar(tokens_start_index += 1, TOKENS_TO_DISPLAY, tokens_itemEL_array, { x: -1, y: 0 }, { x: 1, y: 0 });
    } else {
        update_scrollbar(tokens_start_index = 0, TOKENS_TO_DISPLAY, tokens_itemEL_array, { x: -1, y: 0 }, { x: 1, y: 0 });
    }
}
//nfts
const NFTS_TO_DISPLAY = 4;
var nfts_start_index = 0;
var nfts_itemEL_array = [];
var nfts_containerEl = document.getElementById('nfts');
let nfts_array = [
    {
        "title": "anything",
        "nfts_itemId": "P1",
        "name": "Dodgecoin collection",
        "image": "assets/images/try.png",
        "url": "https://www.google.com"
    },
    {
        "title": "anything",
        "nfts_itemId": "P2",
        "name": "Solana collection",
        "image": "assets/images/try.png",
        "url": "https://www.google.com"
    },
    {
        "title": "anything",
        "nfts_itemId": "P1",
        "name": "Mark collection",
        "image": "assets/images/try.png",
        "url": "https://www.google.com"
    },
    {
        "title": "anything",
        "nfts_itemId": "P2",
        "name": "XYZ collection",
        "image": "assets/images/try.png",
        "url": "https://www.google.com"
    },
    {
        "title": "anything",
        "nfts_itemId": "P1",
        "name": "Musk collection",
        "image": "assets/images/try.png",
        "url": "https://www.google.com"
    },
    {
        "title": "anything",
        "nfts_itemId": "P2",
        "name": "best collection",
        "image": "assets/images/try.png",
        "url": "https://www.google.com"
    }
]
function build_nfts() {
    for (let nfts_item of nfts_array) {
        var nfts_itemEL = document.createElement('a-plane');
        nfts_containerEl.appendChild(nfts_itemEL);
        nfts_itemEL.setAttribute('raycaster-listen',);
        nfts_itemEL.classList.add("clickable");
        nfts_itemEL.classList.add("nocollision");
        nfts_itemEL.classList.add("nfts_item");
        nfts_itemEL.setAttribute('id', "'" + nfts_item.nfts_itemId + "'");
        nfts_itemEL.setAttribute('width', 0.6);
        nfts_itemEL.setAttribute('height', 0.7);
        nfts_itemEL.setAttribute('color', "#888899");
        nfts_itemEL.setAttribute('material', "shader: standard");
        nfts_itemEL.setAttribute('simple-link', "href:" + nfts_item.url);

        var nfts_item_imageEL = document.createElement('a-image');
        nfts_itemEL.appendChild(nfts_item_imageEL);
        nfts_item_imageEL.setAttribute('src', nfts_item.image);
        nfts_item_imageEL.setAttribute("width", 0.6);
        nfts_item_imageEL.setAttribute("height", 0.6);
        nfts_item_imageEL.setAttribute('position', { x: 0, y: 0.05, z: 0.01 });

        var nfts_item_textEL = document.createElement('a-text');
        nfts_itemEL.appendChild(nfts_item_textEL);
        nfts_item_textEL.setAttribute('value', nfts_item.name);
        nfts_item_textEL.setAttribute('wrap-count', 20);
        nfts_item_textEL.setAttribute('baseline', "top");
        nfts_item_textEL.setAttribute('x-offset', 0.05);
        nfts_item_textEL.setAttribute("width", 0.5);
        nfts_item_textEL.setAttribute('position', { x: -0.05, y: -0.275, z: 0.01 });
        nfts_item_textEL.setAttribute("align", "center");
    }
    nfts_itemEL_array = document.getElementsByClassName("nfts_item");
    update_scrollbar(0, NFTS_TO_DISPLAY, nfts_itemEL_array, { x: -1.125, y: 0 }, { x: 0.75, y: 0 });
}
function scroll_nfts_left() {
    if (nfts_start_index > 0) {
        update_scrollbar(nfts_start_index -= 1, NFTS_TO_DISPLAY, nfts_itemEL_array, { x: -1.125, y: 0 }, { x: 0.75, y: 0 });
    } else {
        update_scrollbar(nfts_start_index = Math.max(nfts_itemEL_array.length - NFTS_TO_DISPLAY, 0), 4, nfts_itemEL_array, { x: -1.125, y: 0 }, { x: 0.75, y: 0 });
    }
}
function scroll_nfts_right() {
    if ((nfts_start_index + NFTS_TO_DISPLAY -1) < (nfts_itemEL_array.length - 1)) {
        update_scrollbar(nfts_start_index += 1, NFTS_TO_DISPLAY, nfts_itemEL_array, { x: -1.125, y: 0 }, { x: 0.75, y: 0 });
    } else {
        update_scrollbar(nfts_start_index = 0, NFTS_TO_DISPLAY, nfts_itemEL_array, { x: -1.125, y: 0 }, { x: 0.75, y: 0 });
    }
}
//cashin
const CASHIN_TO_DISPLAY = 4;
var cashin_start_index = 0;
var cashin_itemEL_array = [];
var cashin_containerEl = document.getElementById('cashin');
let cashin_array = [
    {
        "title": "anything",
        "cashin_itemId": "P1",
        "name": "stocks sold",
        "amount": "20"
    },
    {
        "title": "anything",
        "cashin_itemId": "P2",
        "name": "inside trades",
        "amount": "20"
    },
    {
        "title": "anything",
        "cashin_itemId": "P1",
        "name": "donations of fans and supporters",
        "amount": "30"
    },
    {
        "title": "anything",
        "cashin_itemId": "P1",
        "name": "stock dividends",
        "amount": "20"
    },
    {
        "title": "anything",
        "cashin_itemId": "P2",
        "name": "trades with other daos",
        "amount": "20"
    },
    {
        "title": "anything",
        "cashin_itemId": "P1",
        "name": "donations from other daos",
        "amount": "30"
    },
    {
        "title": "anything",
        "cashin_itemId": "P2",
        "name": "investments of sharks",
        "amount": "40"
    }
]
function build_cashin() {
    var cashin_totalEL = document.createElement('a-text');
    var cashin_total = 0;
    for (let cashin_item of cashin_array) {
        var cashin_itemEL = document.createElement('a-plane');
        cashin_containerEl.appendChild(cashin_itemEL);
        cashin_itemEL.setAttribute('raycaster-listen',);
        cashin_itemEL.classList.add("clickable");
        cashin_itemEL.classList.add("nocollision");
        cashin_itemEL.classList.add("cashin_item");
        cashin_itemEL.setAttribute('id', "'" + cashin_item.cashin_itemId + "'");
        cashin_itemEL.setAttribute('width', 1.1);
        cashin_itemEL.setAttribute('height', 0.2);
        cashin_itemEL.setAttribute('color', "#777788");
        cashin_itemEL.setAttribute('material', "shader: standard");

        var cashin_item_nameEL = document.createElement('a-text');
        cashin_itemEL.appendChild(cashin_item_nameEL);
        cashin_item_nameEL.setAttribute('value', cashin_item.name);
        cashin_item_nameEL.setAttribute('wrap-count', 15);
        cashin_item_nameEL.setAttribute('baseline', "top");
        cashin_item_nameEL.setAttribute('x-offset', 0.05);
        cashin_item_nameEL.setAttribute("width", 0.55);
        cashin_item_nameEL.setAttribute('position', { x: -0.55, y: 0.05, z: 0.01 });

        var cashin_item_amountEL = document.createElement('a-text');
        cashin_itemEL.appendChild(cashin_item_amountEL);
        cashin_item_amountEL.setAttribute('value', "+" + cashin_item.amount);
        cashin_item_amountEL.setAttribute('wrap-count', 10);
        cashin_item_amountEL.setAttribute('baseline', "top");
        cashin_item_amountEL.setAttribute('x-offset', 0.05);
        cashin_item_amountEL.setAttribute("width", 0.55);
        cashin_item_amountEL.setAttribute('position', { x: 0, y: 0.05, z: 0.01 });
        cashin_item_amountEL.setAttribute('color', "#22FF22");

        cashin_total += parseInt(cashin_item.amount);
    }
    cashin_totalEL.setAttribute('value', "+" + cashin_total);
    cashin_totalEL.setAttribute('wrap-count', 10);
    cashin_totalEL.setAttribute('x-offset', 0.05);
    cashin_totalEL.setAttribute("width", 0.7);
    cashin_totalEL.setAttribute('position', { x: 0, y: 0.5, z: 0.01 });
    cashin_totalEL.setAttribute('color', "#22FF22");
    cashin_containerEl.appendChild(cashin_totalEL);

    cashin_itemEL_array = document.getElementsByClassName("cashin_item");
    update_scrollbar(0, CASHIN_TO_DISPLAY, cashin_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
}
function scroll_cashin_up() {
    if (cashin_start_index > 0) {
        update_scrollbar(cashin_start_index -= 1, CASHIN_TO_DISPLAY, cashin_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    } else {
        update_scrollbar(cashin_start_index = Math.max(cashin_itemEL_array.length - CASHIN_TO_DISPLAY, 0), 4, cashin_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    }
}
function scroll_cashin_down() {
    if ((cashin_start_index + CASHIN_TO_DISPLAY - 1) < (cashin_itemEL_array.length - 1)) {
        update_scrollbar(cashin_start_index += 1, CASHIN_TO_DISPLAY, cashin_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    } else {
        update_scrollbar(cashin_start_index = 0, CASHIN_TO_DISPLAY, cashin_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    }
}
//cashout
const CASHOUT_TO_DISPLAY = 4;
var cashout_start_index = 0;
var cashout_itemEL_array = [];
var cashout_containerEl = document.getElementById('cashout');
let cashout_array = [
    {
        "title": "anything",
        "cashout_itemId": "P1",
        "name": "devs",
        "amount": "40"
    },
    {
        "title": "anything",
        "cashout_itemId": "P2",
        "name": "artists",
        "amount": "30"
    },
    {
        "title": "anything",
        "cashout_itemId": "P1",
        "name": "managers",
        "amount": "10"
    },
    {
        "title": "anything",
        "cashout_itemId": "P1",
        "name": "server",
        "amount": "10"
    },
    {
        "title": "anything",
        "cashout_itemId": "P2",
        "name": "other",
        "amount": "40"
    }
]
function build_cashout() {
    var cashout_totalEL = document.createElement('a-text');
    var cashout_total = 0;
    for (let cashout_item of cashout_array) {
        var cashout_itemEL = document.createElement('a-plane');
        cashout_containerEl.appendChild(cashout_itemEL);
        cashout_itemEL.setAttribute('raycaster-listen',);
        cashout_itemEL.classList.add("clickable");
        cashout_itemEL.classList.add("nocollision");
        cashout_itemEL.classList.add("cashout_item");
        cashout_itemEL.setAttribute('id', "'" + cashout_item.cashout_itemId + "'");
        cashout_itemEL.setAttribute('width', 1.1);
        cashout_itemEL.setAttribute('height', 0.2);
        cashout_itemEL.setAttribute('color', "#666677");
        cashout_itemEL.setAttribute('material', "shader: standard");

        var cashout_item_nameEL = document.createElement('a-text');
        cashout_itemEL.appendChild(cashout_item_nameEL);
        cashout_item_nameEL.setAttribute('value', cashout_item.name);
        cashout_item_nameEL.setAttribute('wrap-count', 15);
        cashout_item_nameEL.setAttribute('baseline', "top");
        cashout_item_nameEL.setAttribute('x-offset', 0.05);
        cashout_item_nameEL.setAttribute("width", 0.55);
        cashout_item_nameEL.setAttribute('position', { x: -0.55, y: 0.05, z: 0.01 });

        var cashout_item_amountEL = document.createElement('a-text');
        cashout_itemEL.appendChild(cashout_item_amountEL);
        cashout_item_amountEL.setAttribute('value', "-" + cashout_item.amount);
        cashout_item_amountEL.setAttribute('wrap-count', 10);
        cashout_item_amountEL.setAttribute('baseline', "top");
        cashout_item_amountEL.setAttribute('x-offset', 0.05);
        cashout_item_amountEL.setAttribute("width", 0.55);
        cashout_item_amountEL.setAttribute('position', { x: 0, y: 0.05, z: 0.01 });
        cashout_item_amountEL.setAttribute('color', "#FF2222");

        cashout_total += parseInt(cashout_item.amount);
    }
    cashout_totalEL.setAttribute('value', "-" + cashout_total);
    cashout_totalEL.setAttribute('wrap-count', 10);
    cashout_totalEL.setAttribute('x-offset', 0.05);
    cashout_totalEL.setAttribute("width", 0.7);
    cashout_totalEL.setAttribute('position', { x: 0, y: 0.5, z: 0.01 });
    cashout_totalEL.setAttribute('color', "#FF2222");
    cashout_containerEl.appendChild(cashout_totalEL);

    cashout_itemEL_array = document.getElementsByClassName("cashout_item");
    update_scrollbar(0, CASHOUT_TO_DISPLAY, cashout_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
}
function scroll_cashout_up() {
    if (cashout_start_index > 0) {
        update_scrollbar(cashout_start_index -= 1, CASHOUT_TO_DISPLAY, cashout_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    } else {
        update_scrollbar(cashout_start_index = Math.max(cashout_itemEL_array.length - CASHOUT_TO_DISPLAY, 0), 4, cashout_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    }
}
function scroll_cashout_down() {
    if ((cashout_start_index + CASHOUT_TO_DISPLAY - 1) < (cashout_itemEL_array.length - 1)) {
        update_scrollbar(cashout_start_index += 1, CASHOUT_TO_DISPLAY, cashout_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    } else {
        update_scrollbar(cashout_start_index = 0, CASHOUT_TO_DISPLAY, cashout_itemEL_array, { x: -0.1, y: 0.3 }, { x: 0, y: -0.25 });
    }
}
function build_average_screen_left_listeners() {

    document.getElementById('scroll_tokens_left').addEventListener('click', scroll_tokens_left);
    document.getElementById('scroll_tokens_right').addEventListener('click', scroll_tokens_right);
    document.getElementById('scroll_tokens_left').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_tokens_left').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_tokens_right').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_tokens_right').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);

    document.getElementById('scroll_nfts_left').addEventListener('click', scroll_nfts_left);
    document.getElementById('scroll_nfts_right').addEventListener('click', scroll_nfts_right);
    document.getElementById('scroll_nfts_left').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_nfts_left').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_nfts_right').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_nfts_right').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);

    document.getElementById('scroll_cashin_up').addEventListener('click', scroll_cashin_up);
    document.getElementById('scroll_cashin_down').addEventListener('click', scroll_cashin_down);
    document.getElementById('scroll_cashin_up').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_cashin_up').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_cashin_down').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_cashin_down').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);

    document.getElementById('scroll_cashout_up').addEventListener('click', scroll_cashout_up);
    document.getElementById('scroll_cashout_down').addEventListener('click', scroll_cashout_down);
    document.getElementById('scroll_cashout_up').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_cashout_up').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_cashout_down').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_cashout_down').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);


}

function start_average_screen_left() {
    build_average_screen_left_listeners();
    build_tokens();
    build_nfts();
    build_cashin();
    build_cashout();
}