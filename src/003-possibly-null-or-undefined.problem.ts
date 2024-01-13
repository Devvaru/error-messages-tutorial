const searchParams = new URLSearchParams(window.location.search);

type id = string | number | void;
const id = searchParams.get("id");

// variable? is shorthand for id: type | undefined
// aka variable?: type is equal to variable: type | undefined = undefined
console.log(id?.toUpperCase());

// OR

// non-null assertation operator - aka allowed to be null - tells compiler it can be null
console.log(id!.toUpperCase());

// OR

if (id) {
  console.log(id.toUpperCase());
}

// OR

if (typeof id === "string") {
  console.log(id.toUpperCase());
}