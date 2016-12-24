function remove(index){
  return {type: 'REMOVE_ITEM', index: index}
}

function addItem(item){
  return {type: 'ADD_ITEM', newItem: item}
}

function toggle (){
  return {type: 'TOGGLE'}
}

module.exports = {
  remove, addItem, toggle
};
