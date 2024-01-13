const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Oh dear!");
  }
};

try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

// OR

// Type assertion - least safe but easiest to use
try {
  somethingDangerous();
} catch (error) {
  console.log((error as Error).message);
}

// OR

// Narrow the type
try {
  somethingDangerous();
} catch (error) {
  if (typeof error === "object" && error && "message" in error) {
    console.log(error.message);
  } else {
    throw error;
  }
}

// OR

try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    throw error;
  }
}
