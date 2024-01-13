type User = {
  name: string;
  age?: number;
}

const user: User = {
  name: "Matt",
};

user.age = 24;

// OR

// Record<K, V> each key is a string, and the value can be number or string
const user2: Record<string, number | string> = {
  name: "Matt",
};

user2.age = 24;