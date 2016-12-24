var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux'); //1
var {Provider} = require('react-redux');
// var obj = {
//   a: 1,
//   b: 'Hello',
//   c: 'Hey'
// };
// var obj1 = {...obj, b: 'Hi', d: 'Haha'};
// obj.a = 2;
// var mang = [1, 4, 3, 2];
// var arr = [1000, ...mang, 7, 10];
// mang[0] = 100;
// console.log('Mang: ',mang);
// console.log('Arr: ',arr);
// console.log('OBJ1', obj1);
// console.log('OBJ',obj);
var List = require('./comps/List.js');

// var defaultState = {name: 'KhoaPham', age: 18}
//
// var reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {...state, name: action.newName}
//     case 'CHANGE_AGE':
//       return {...state, age: action.newAge}
//     default:
//       return state
//   }
// }
//
// var store = redux.createStore(reducer, redux.compose(
//   window.devToolsExtension? window.devToolsExtension(): f => f
// ));
// store.subscribe(() => {
//   var state = store.getState();
//   document.getElementById('h1-state').innerHTML = `${state.name}: ${state.age} tuoi`
// })
//
// console.log(store.getState());
// store.dispatch({type: 'CHANGE_NAME', newName: 'NodeJS'});
// store.dispatch({type: 'CHANGE_AGE', newAge: 30});
var defaultState = {
  mang: ['Android', 'iOS', 'NodeJS'],
  isAdding: false
}
var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {...state, mang: state.mang.filter((e, i) => i != action.index)}
    case 'ADD_ITEM':
      return {...state, mang: [...state.mang, action.newItem]}
    case 'TOGGLE':
      return {...state, isAdding: !state.isAdding}
    default:
      return state;
  }
}

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));

store.subscribe(() => {
  console.log('Changed');
  //document.getElementById('h1-state').innerHTML = JSON.stringify(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById('root')
)
// store.dispatch({type: 'TOGGLE'});
// store.dispatch({type: 'ADD_ITEM', newItem: 'Unity'});
// store.dispatch({type: 'REMOVE_ITEM', index: 1});
