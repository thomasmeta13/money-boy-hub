//todo
const TODO_TO_DISPLAY = 5;
var todo_filter = "all";
var todo_start_index = 0;
var todo_itemEL_array = [];
var todo_containerEl = document.getElementById('todo');
var todo_filterEL_array = [];
let todo_array = [
    {
        "title": "anything",
        "todo_itemId": "1",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac turpis elementum, cursus nunc ac, sagittis odio. Nulla dignissim rutrum imperdiet.",
        "filter": "devs"
    },
    {
        "title": "anything",
        "todo_itemId": "2",
        "content": "Proin a velit quis ligula eleifend vestibulum a in urna. Duis ut neque sed libero imperdiet accumsan. Vivamus eu ante ac risus tincidunt sagittis.",
        "filter": "devs"
    },
    {
        "title": "anything",
        "todo_itemId": "3",
        "content": "Proin a velit quis ligula eleifend vestibulum a in urna.",
        "filter": "artists"
    },
    {
        "title": "anything",
        "todo_itemId": "4",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac turpis elementum, cursus nunc ac, sagittis odio. Nulla dignissim rutrum imperdiet.",
        "filter": "og"
    },
    {
        "title": "anything",
        "todo_itemId": "5",
        "content": "Lorem ipsum.",
        "filter": "devs"
    },
    {
        "title": "anything",
        "todo_itemId": "6",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac turpis elementum, cursus nunc ac, sagittis odio. Nulla dignissim rutrum imperdiet.",
        "filter": "artists"
    },
    {
        "title": "anything",
        "todo_itemId": "7",
        "content": "Lorem ipsum dolor sit amet, nulla dignissim rutrum imperdiet.",
        "filter": "og"
    },
    {
        "title": "anything",
        "todo_itemId": "8",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac turpis elementum, cursus nunc ac, sagittis odio.",
        "filter": "artists"
    },
    {
        "title": "anything",
        "todo_itemId": "9",
        "content": "Duis ut neque sed libero imperdiet accumsan. Vivamus eu ante ac risus tincidunt sagittis.",
        "filter": "artists"
    }
]
function build_todo() {
    while (todo_containerEl.lastElementChild.classList.contains("todo_item")) {
        todo_containerEl.removeChild(todo_containerEl.lastElementChild);
      }
    for (let todo_item of todo_array) 
        if (todo_item.filter == todo_filter || todo_filter == "all") {
            var todo_itemEL = document.createElement('a-plane');
            todo_containerEl.appendChild(todo_itemEL);
            todo_itemEL.setAttribute('raycaster-listen',);
            todo_itemEL.classList.add("clickable");
            todo_itemEL.classList.add("nocollision");
            todo_itemEL.classList.add("todo_item");
            todo_itemEL.setAttribute('id', "'" + todo_item.todo_itemId + "'");
            todo_itemEL.setAttribute('width', 2.6);
            todo_itemEL.setAttribute('height', 0.25);
            todo_itemEL.setAttribute('color', "#888899");
            todo_itemEL.setAttribute('material', "shader: standard");

            var todo_item_textEL = document.createElement('a-text');
            todo_itemEL.appendChild(todo_item_textEL);
            todo_item_textEL.setAttribute('value', todo_item.content);
            todo_item_textEL.setAttribute('wrap-count', 60);
            todo_item_textEL.setAttribute('baseline', "top");
            todo_item_textEL.setAttribute('x-offset', 0.05);
            todo_item_textEL.setAttribute("width", 2);
            todo_item_textEL.setAttribute('position', {x: -1.3, y: 0.05, z: 0.01});

            var todo_item_labelEL = document.createElement('a-text');
            todo_itemEL.appendChild(todo_item_labelEL);
            todo_item_labelEL.setAttribute("value", todo_item.filter);
            todo_item_labelEL.setAttribute('wrap-count', 10);
            todo_item_labelEL.setAttribute("color", "#222233");
            todo_item_labelEL.setAttribute("width", "0.5");
            todo_item_labelEL.setAttribute("align", "right");
            todo_item_labelEL.setAttribute("position", { x: 1.3, y: 0.075, z: 0.01});
        }
    todo_itemEL_array = document.getElementsByClassName("todo_item");
    todo_start_index = 0;
    update_scrollbar(todo_start_index, TODO_TO_DISPLAY, todo_itemEL_array, { x: -0.1, y: 0.4 }, { x: 0, y: -0.3 });
}
function scroll_todo_up() {
    if (todo_start_index > 0) {
        update_scrollbar(todo_start_index -= 1, TODO_TO_DISPLAY, todo_itemEL_array, { x: -0.1, y: 0.4 }, { x: 0, y: -0.3 });
    } else {
        update_scrollbar(todo_start_index = Math.max(todo_itemEL_array.length - TODO_TO_DISPLAY, 0), 5, todo_itemEL_array, { x: -0.1, y: 0.4 }, { x: 0, y: -0.3 });
    }
}
function scroll_todo_down() {
    if ((todo_start_index + TODO_TO_DISPLAY - 1) < (todo_itemEL_array.length - 1)) {
        update_scrollbar(todo_start_index += 1, TODO_TO_DISPLAY, todo_itemEL_array, { x: -0.1, y: 0.4 }, { x: 0, y: -0.3 });
    } else {
        update_scrollbar(todo_start_index = 0, TODO_TO_DISPLAY, todo_itemEL_array, { x: -0.1, y: 0.4 }, { x: 0, y: -0.3 });
    }
}
function filter_todo() {
    todo_filter = this.id;
    build_todo();
    console.log("filtering todo")
}
function build_average_screen_right_listeners() {
    document.getElementById('scroll_todo_up').addEventListener('click', scroll_todo_up);
    document.getElementById('scroll_todo_down').addEventListener('click', scroll_todo_down);
    document.getElementById('scroll_todo_up').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_todo_up').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    document.getElementById('scroll_todo_down').addEventListener('raycaster-intersected', intersected, false);
    document.getElementById('scroll_todo_down').addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    todo_filterEL_array = document.getElementsByClassName('filter_todo');
    for (let todo_filterEL of todo_filterEL_array) {
        todo_filterEL.addEventListener('click', filter_todo);
        todo_filterEL.addEventListener('raycaster-intersected', intersected, false);
        todo_filterEL.addEventListener('raycaster-intersected-cleared', intersectedCleared, false);
    }

}

function start_average_screen_right() {
    build_average_screen_right_listeners();
    build_todo();
}