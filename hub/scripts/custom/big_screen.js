//news
const NEWS_TO_DISPLAY = 2;
var news_start_index = 0;
var news_itemEL_array = [];
var news_containerEl = document.getElementById('news');
let news_array = [
    {
        "title": "anything",
        "news_itemId": "1",
        "content": "The big screen is finally up!"
    },
    {
        "title": "anything",
        "news_itemId": "2",
        "content": "Arrow down or up to see other news!"
    },
    {
        "title": "anything",
        "news_itemId": "3",
        "content": "See how beautiful is this preview!"
    },
    {
        "title": "anything",
        "news_itemId": "4",
        "content": "Unfortunately this is not animated, but in future it might be!"
    }
]
function build_news() {
    for (let news_item of news_array) {
        var news_itemEL = document.createElement('a-plane');
        news_containerEl.appendChild(news_itemEL);
        news_itemEL.setAttribute('raycaster-listen',);
        news_itemEL.classList.add("clickable");
        news_itemEL.classList.add("nocollision");
        news_itemEL.classList.add("news_item");
        news_itemEL.setAttribute('id', "'" + news_item.news_itemId + "'");
        news_itemEL.setAttribute('width', 1.6);
        news_itemEL.setAttribute('height', 0.5);
        news_itemEL.setAttribute('color', "#9999AA");
        news_itemEL.setAttribute('material', "shader: standard");

        var news_item_textEL = document.createElement('a-text');
        news_itemEL.appendChild(news_item_textEL);
        news_item_textEL.setAttribute('value', news_item.content);
        news_item_textEL.setAttribute('wrap-count', 30);
        news_item_textEL.setAttribute('baseline', "top");
        news_item_textEL.setAttribute('x-offset', 0.05);
        news_item_textEL.setAttribute("width", 1.5);
        news_item_textEL.setAttribute('position', {x: -0.8, y: 0.20, z: 0.01});
    }
    news_itemEL_array = document.getElementsByClassName("news_item");
    update_scrollbar(0, 2, news_itemEL_array, { x: 0, y: 0.2 }, { x: 0, y: -0.6 });
}
function scroll_news_up() {
    if (news_start_index > 0) {
        update_scrollbar(news_start_index -= 1, NEWS_TO_DISPLAY, news_itemEL_array, { x: 0, y: 0.2 }, { x: 0, y: -0.6 });
    } else {
        update_scrollbar(news_start_index = Math.max(news_itemEL_array.length - NEWS_TO_DISPLAY, 0), 2, news_itemEL_array, { x: 0, y: 0.2 }, { x: 0, y: -0.6 });
    }
}
function scroll_news_down() {
    if ((news_start_index + NEWS_TO_DISPLAY - 1) < (news_itemEL_array.length - 1)) {
        update_scrollbar(news_start_index += 1, NEWS_TO_DISPLAY, news_itemEL_array, { x: 0, y: 0.2 }, { x: 0, y: -0.6 });
    } else {
        update_scrollbar(news_start_index = 0, NEWS_TO_DISPLAY, news_itemEL_array, { x: 0, y: 0.2 }, { x: 0, y: -0.6 });
    }
}
//events
const EVENTS_TO_DISPLAY = 2;
var events_start_index = 0;
var events_itemEL_array = [];
var events_containerEl = document.getElementById('events');
let events_array = [
    {
        "title": "anything",
        "events_itemId": "1",
        "content": "Event1: Nulla sodales nulla eget purus lobortis dictum."
    },
    {
        "title": "anything",
        "events_itemId": "2",
        "content": "Event2:  Mauris euismod, purus nec porta commodo, mi felis luctus purus, sit amet euismod nunc urna eget lorem. Curabitur risus tortor, ultricies sit amet tellus a, tristique mattis nisl. Suspendisse in eleifend odio. Nunc justo sem, fringilla at ornare eu, blandit at ante. Donec eget vulputate ligula. "
    },
    {
        "title": "anything",
        "events_itemId": "3",
        "content": "Event3: Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vehicula varius aliquet. Suspendisse nibh metus, tempus eu quam eu, pharetra viverra tellus."
    },
    {
        "title": "anything",
        "events_itemId": "4",
        "content": "Event4"
    }
]
function build_events() {
    for (let events_item of events_array) {
        var events_itemEL = document.createElement('a-plane');
        events_containerEl.appendChild(events_itemEL);
        events_itemEL.setAttribute('raycaster-listen',);
        events_itemEL.classList.add("clickable");
        events_itemEL.classList.add("nocollision");
        events_itemEL.classList.add("events_item");
        events_itemEL.setAttribute('id', "'" + events_item.events_itemId + "'");
        events_itemEL.setAttribute('width', 0.9);
        events_itemEL.setAttribute('height', 1);
        events_itemEL.setAttribute('color', "#888899");
        events_itemEL.setAttribute('material', "shader: standard");

        var events_item_textEL = document.createElement('a-text');
        events_itemEL.appendChild(events_item_textEL);
        events_item_textEL.setAttribute('value', events_item.content);
        events_item_textEL.setAttribute('wrap-count', 20);
        events_item_textEL.setAttribute('baseline', "top");
        events_item_textEL.setAttribute('x-offset', 0.05);
        events_item_textEL.setAttribute("width", 0.8);
        events_item_textEL.setAttribute('position', {x: -0.45, y: 0.45, z: 0.01});
    }
    events_itemEL_array = document.getElementsByClassName("events_item");
    update_scrollbar(0, EVENTS_TO_DISPLAY, events_itemEL_array, { x: -0.5, y: -0.05 }, { x: 1, y: 0 });
}
function scroll_events_left() {
    if (events_start_index > 0) {
        update_scrollbar(events_start_index -= 1, EVENTS_TO_DISPLAY, events_itemEL_array, { x: -0.5, y: -0.05 }, { x: 1, y: 0 });
    } else {
        update_scrollbar(events_start_index = Math.max(events_itemEL_array.length - EVENTS_TO_DISPLAY, 0), 2, events_itemEL_array, { x: -0.5, y: -0.05 }, { x: 1, y: 0 });
    }
}
function scroll_events_right() {
    if ((events_start_index + EVENTS_TO_DISPLAY - 1) < (events_itemEL_array.length - 1)) {
        update_scrollbar(events_start_index += 1, EVENTS_TO_DISPLAY, events_itemEL_array, { x: -0.5, y: -0.05 }, { x: 1, y: 0 });
    } else {
        update_scrollbar(events_start_index = 0, EVENTS_TO_DISPLAY, events_itemEL_array, { x: -0.5, y: -0.05 }, { x: 1, y: 0 });
    }
}
//proposals
const PROPOSALS_TO_DISPLAY = 4;
var proposals_filter = "all";
var proposals_start_index = 0;
var proposals_itemEL_array = [];
var proposals_containerEl = document.getElementById('proposals');
var proposals_filterEL_array = [];
let proposals_array = [
    {
        "title": "anything",
        "proposals_itemId": "1",
        "content": "It would be better to have more vivid colors!",
        "filter": "screens"
    },
    {
        "title": "anything",
        "proposals_itemId": "2",
        "content": "It would be better to have a fancier design, not just squares",
        "filter": "screens"
    },
    {
        "title": "anything",
        "proposals_itemId": "3",
        "content": "Let's add some more lights, and also animated lights! Kinda like a disco",
        "filter": "lights"
    },
    {
        "title": "anything",
        "proposals_itemId": "4",
        "content": "Let's add light interactions!, I want to be able to turn it off and on",
        "filter": "lights"
    },
    {
        "title": "anything",
        "proposals_itemId": "5",
        "content": "Why is the other daos section empty? Let's update it",
        "filter": "screens"
    },
    {
        "title": "anything",
        "proposals_itemId": "6",
        "content": "To be honest, having lights anyone can turn off and on can be annoiyng, let's vote about that",
        "filter": "lights"
    }
]
function build_proposals() {
    while (proposals_containerEl.lastElementChild.classList.contains("proposals_item")) {
        proposals_containerEl.removeChild(proposals_containerEl.lastElementChild);
      }
    for (let proposals_item of proposals_array) 
        if (proposals_item.filter == proposals_filter || proposals_filter == "all") {
            var proposals_itemEL = document.createElement('a-plane');
            proposals_containerEl.appendChild(proposals_itemEL);
            proposals_itemEL.setAttribute('raycaster-listen',);
            proposals_itemEL.classList.add("clickable");
            proposals_itemEL.classList.add("nocollision");
            proposals_itemEL.classList.add("proposals_item");
            proposals_itemEL.setAttribute('id', "'" + proposals_item.proposals_itemId + "'");
            proposals_itemEL.setAttribute('width', 1.6);
            proposals_itemEL.setAttribute('height', 0.6);
            proposals_itemEL.setAttribute('color', "#777788");
            proposals_itemEL.setAttribute('material', "shader: standard");

            var proposals_item_textEL = document.createElement('a-text');
            proposals_itemEL.appendChild(proposals_item_textEL);
            proposals_item_textEL.setAttribute('value', proposals_item.content);
            proposals_item_textEL.setAttribute('wrap-count', 30);
            proposals_item_textEL.setAttribute('baseline', "top");
            proposals_item_textEL.setAttribute('x-offset', 0.05);
            proposals_item_textEL.setAttribute("width", 1.5);
            proposals_item_textEL.setAttribute('position', {x: -0.8, y: 0.2, z: 0.01});

            var proposals_item_labelEL = document.createElement('a-text');
            proposals_itemEL.appendChild(proposals_item_labelEL);
            proposals_item_labelEL.setAttribute("value", proposals_item.filter);
            proposals_item_labelEL.setAttribute('wrap-count', 10);
            proposals_item_labelEL.setAttribute("color", "#222233");
            proposals_item_labelEL.setAttribute("width", "0.5");
            proposals_item_labelEL.setAttribute("align", "right");
            proposals_item_labelEL.setAttribute("position", { x: 0.8, y: 0.25, z: 0.01});
        }
    proposals_itemEL_array = document.getElementsByClassName("proposals_item");
    proposals_start_index = 0;
    update_scrollbar(proposals_start_index, PROPOSALS_TO_DISPLAY, proposals_itemEL_array, { x: 0, y: 0.8 }, { x: 0, y: -0.7 });
}
function scroll_proposals_up() {
    if (proposals_start_index > 0) {
        update_scrollbar(proposals_start_index -= 1, PROPOSALS_TO_DISPLAY, proposals_itemEL_array, { x: 0, y: 0.8 }, { x: 0, y: -0.7 });
    } else {
        update_scrollbar(proposals_start_index = Math.max(proposals_itemEL_array.length - PROPOSALS_TO_DISPLAY, 0), 4, proposals_itemEL_array, { x: 0, y: 0.8 }, { x: 0, y: -0.7 });
    }
}
function scroll_proposals_down() {
    if ((proposals_start_index + PROPOSALS_TO_DISPLAY - 1) < (proposals_itemEL_array.length - 1)) {
        update_scrollbar(proposals_start_index += 1, PROPOSALS_TO_DISPLAY, proposals_itemEL_array, { x: 0, y: 0.8 }, { x: 0, y: -0.7 });
    } else {
        update_scrollbar(proposals_start_index = 0, PROPOSALS_TO_DISPLAY, proposals_itemEL_array, { x: 0, y: 0.8 }, { x: 0, y: -0.7 });
    }
}
function filter_proposals() {
    proposals_filter = this.id;
    build_proposals();
}
function build_big_screen_listeners() {
    document.getElementById('scroll_news_up').addEventListener('click', scroll_news_up);
    document.getElementById('scroll_news_down').addEventListener('click', scroll_news_down);
    document.getElementById('scroll_news_up').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_news_up').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_news_down').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_news_down').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);

    document.getElementById('scroll_events_left').addEventListener('click', scroll_events_left);
    document.getElementById('scroll_events_right').addEventListener('click', scroll_events_right);
    document.getElementById('scroll_events_left').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_events_left').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_events_right').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_events_right').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);

    document.getElementById('scroll_proposals_up').addEventListener('click', scroll_proposals_up);
    document.getElementById('scroll_proposals_down').addEventListener('click', scroll_proposals_down);
    document.getElementById('scroll_proposals_up').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_proposals_up').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_proposals_down').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_proposals_down').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    proposals_filterEL_array = document.getElementsByClassName('filter_proposals');
    for (let proposals_filterEL of proposals_filterEL_array) {
        proposals_filterEL.addEventListener('click', filter_proposals);
        proposals_filterEL.addEventListener('raycaster-intersected', intersected, false);
        proposals_filterEL.addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    }
}

function start_big_screen() {
    build_big_screen_listeners();
    build_events();
    build_news();
    build_proposals();
}