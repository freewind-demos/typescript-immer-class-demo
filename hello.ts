import produce, { immerable } from 'immer'

class State {
  // Notice: this is very important, it will not be maintained by immer if not provided this property
  [immerable] = true

  constructor(public name: string, public age: number) {
  }
}

const originalState: State[] = [
  new State('immer', 1)
];

console.log('### originalState before change', originalState);

const newState = produce(originalState, draft => {
  draft[0].age = 66;
  draft.push(new State('new-name', 100));
})

console.log('### originalState should not change:', originalState);
console.log('### newState', newState);
