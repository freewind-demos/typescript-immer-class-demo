import produce, { immerable } from 'immer'

class User {
  // Notice: this is very important, it will not be maintained by immer if not provided this property
  [immerable] = true

  constructor(public name: string, public age: number) {
  }

  get allInfo(): string {
    return `Name=${this.name}, Age=${this.age}`;
  }
}

const originalState: User[] = [
  new User('immer', 1)
];

console.log('### originalState before change', originalState, originalState.map(it => it.allInfo));

const newState = produce(originalState, draft => {
  draft[0].age = 66;
  draft.push(new User('new-name', 100));
})

console.log('### originalState should not change:', originalState, originalState.map(it => it.allInfo));
console.log('### newState', newState, newState.map(it => it.allInfo));
