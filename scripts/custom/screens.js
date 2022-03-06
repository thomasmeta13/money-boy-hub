//twitter
const TWITTER_TO_DISPLAY = 4;
var twitter_start_index = 0;
var twitter_itemEL_array = [];
var twitter_containerEl = document.getElementById('twitter');
let twitter_array = [
    {
        "title": "twit1",
        "twitter_itemId": "1",
        "content": "Nulla sodales nulla eget purus lobortis dictum."
    },
    {
        "title": "twit2",
        "twitter_itemId": "2",
        "content": "Mauris euismod, purus nec porta commodo, mi felis luctus purus, sit amet euismod nunc urna eget lorem. Curabitur risus tortor, ultricies sit amet tellus a, tristique mattis nisl. Suspendisse in eleifend odio. Nunc justo sem, fringilla at ornare eu, blandit at ante. Donec eget vulputate ligula. "
    },
    {
        "title": "twit3",
        "twitter_itemId": "3",
        "content": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vehicula varius aliquet. Suspendisse nibh metus, tempus eu quam eu, pharetra viverra tellus."
    },
    {
        "title": "twit4",
        "twitter_itemId": "4",
        "content": "Mauris euismod, purus nec porta commodo, mi felis luctus purus, sit amet euismod nunc urna eget lorem. Curabitur risus tortor, ultricies sit amet tellus a, tristique mattis nisl. Suspendisse in eleifend odio. Nunc justo sem, fringilla at ornare eu, blandit at ante. Donec eget vulputate ligula. "
    },
    {
        "title": "twit5",
        "twitter_itemId": "5",
        "content": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vehicula varius aliquet. Suspendisse nibh metus, tempus eu quam eu, pharetra viverra tellus."
    },
    {
        "title": "twit6",
        "twitter_itemId": "6",
        "content": "Hakuna matata"
    }
]
function build_twitter() {
    for (let twitter_item of twitter_array) {
        var twitter_itemEL = document.createElement('a-plane');
        twitter_containerEl.appendChild(twitter_itemEL);
        twitter_itemEL.setAttribute('raycaster-listen',);
        twitter_itemEL.classList.add("clickable");
        twitter_itemEL.classList.add("nocollision");
        twitter_itemEL.classList.add("twitter_item");
        twitter_itemEL.setAttribute('id', "'" + twitter_item.twitter_itemId + "'");
        twitter_itemEL.setAttribute('width', 2.8);
        twitter_itemEL.setAttribute('height', 0.7);
        twitter_itemEL.setAttribute('color', "#AA22BB");
        twitter_itemEL.setAttribute('material', "shader: flat");

        var twitter_item_titleEL = document.createElement('a-text');
        twitter_itemEL.appendChild(twitter_item_titleEL);
        twitter_item_titleEL.setAttribute('value', twitter_item.title);
        twitter_item_titleEL.setAttribute('wrap-count', 40);
        twitter_item_titleEL.setAttribute('baseline', "top");
        twitter_item_titleEL.setAttribute('x-offset', 0.05);
        twitter_item_titleEL.setAttribute("width", 2.7);
        twitter_item_titleEL.setAttribute('position', { x: -1.4, y: 0.3, z: 0.01 });
        twitter_item_titleEL.setAttribute("color", "#AAEEFF");

        var twitter_item_textEL = document.createElement('a-text');
        twitter_itemEL.appendChild(twitter_item_textEL);
        twitter_item_textEL.setAttribute('value', twitter_item.content);
        twitter_item_textEL.setAttribute('wrap-count', 60);
        twitter_item_textEL.setAttribute('baseline', "top");
        twitter_item_textEL.setAttribute('x-offset', 0.05);
        twitter_item_textEL.setAttribute("width", 2.7);
        twitter_item_textEL.setAttribute('position', { x: -1.4, y: 0.2, z: 0.01 });
    }
    twitter_itemEL_array = document.getElementsByClassName("twitter_item");
    build_twitter_listeners();
    update_scrollbar(0, TWITTER_TO_DISPLAY, twitter_itemEL_array, { x: 0, y: 1.1 }, { x: 0, y: -0.8 });
}
function scroll_twitter_up() {
    if (twitter_start_index > 0) {
        update_scrollbar(twitter_start_index -= 1, TWITTER_TO_DISPLAY, twitter_itemEL_array, { x: 0, y: 1.1 }, { x: 0, y: -0.8 });
    } else {
        update_scrollbar(twitter_start_index = Math.max(twitter_itemEL_array.length - TWITTER_TO_DISPLAY, 0), TWITTER_TO_DISPLAY, twitter_itemEL_array, { x: 0, y: 1.1 }, { x: 0, y: -0.8 });
    }
}
function scroll_twitter_down() {
    if ((twitter_start_index + TWITTER_TO_DISPLAY - 1) < (twitter_itemEL_array.length - 1)) {
        update_scrollbar(twitter_start_index += 1, TWITTER_TO_DISPLAY, twitter_itemEL_array, { x: 0, y: 1.1 }, { x: 0, y: -0.8 });
    } else {
        update_scrollbar(twitter_start_index = 0, TWITTER_TO_DISPLAY, twitter_itemEL_array, { x: 0, y: 1.1 }, { x: 0, y: -0.8 });
    }
}
function build_twitter_listeners() {
    document.getElementById('scroll_twitter_up').addEventListener('click', scroll_twitter_up);
    document.getElementById('scroll_twitter_down').addEventListener('click', scroll_twitter_down);
    document.getElementById('scroll_twitter_up').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_twitter_up').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_twitter_down').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_twitter_down').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
}

//nft
var nft_containerEl = document.getElementById('nft');
let nft =
{
    "image": "assets/images/try.png",
    "price": "1000"
}
function build_nft() {

    var nft_item_amountEL = document.createElement('a-text');
    nft_containerEl.appendChild(nft_item_amountEL);
    nft_item_amountEL.setAttribute('value', nft.price);
    nft_item_amountEL.setAttribute('wrap-count', 8);
    nft_item_amountEL.setAttribute('baseline', "top");
    nft_item_amountEL.setAttribute('x-offset', 0.05);
    nft_item_amountEL.setAttribute("width", 3);
    nft_item_amountEL.setAttribute("align", "center");
    nft_item_amountEL.setAttribute('position', { x: 0, y: -1, z: 0.01 });

    var nft_item_imageEL = document.createElement('a-image');
    nft_containerEl.appendChild(nft_item_imageEL);
    nft_item_imageEL.setAttribute('src', nft.image);
    nft_item_imageEL.setAttribute("width", 2);
    nft_item_imageEL.setAttribute("height", 2);
    nft_item_imageEL.setAttribute('position', { x: 0, y: 0.5, z: 0.01 });
    build_nft_listeners();
}

function build_nft_listeners() {

}

function start_screens() {
    build_twitter();
    build_nft();
}