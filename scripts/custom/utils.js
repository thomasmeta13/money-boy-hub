function update_scrollbar(start_index, item_number, item_array, offset_start, offset_delta) {
    let offset = {};
    offset.x = offset_start.x;
    offset.y = offset_start.y;
    for (let item of item_array) {
        item.setAttribute('visible', "false");
    }
    for (i = 0; i < item_number && i < item_array.length; i++) {
        item_array[i + start_index].setAttribute('visible', "true");
        item_array[i + start_index].setAttribute('position', { x: offset.x, y: offset.y, z: 0.01 });
        offset.x = offset.x + offset_delta.x;
        offset.y = offset.y + offset_delta.y;
    }
}

function intersected() {
    this.setAttribute('opacity', '0.5');
}

function intersectedCleared() {
    this.setAttribute('opacity', '1.0');
}

