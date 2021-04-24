// Make it so that the initialize function can only be called once!
let view;
console.log("view: ", view);

function start() {
  let isInitialized = false;
  return () => {
    if (!isInitialized) {
      view = "🏔";
      isInitialized = true;
      console.log("View has been set!");
    } else {
      console.log("view has already been set!");
      return;
    }
  };
}

const initialize = start();
initialize();
initialize();
initialize();

console.log(view);

// ! --------------------------------------------------------------
let view;
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "🏔";
      called = true;
      console.log("view has been set!");
    }
  };
}

const start = initialize();
start();
start();
start();
console.log(view);
