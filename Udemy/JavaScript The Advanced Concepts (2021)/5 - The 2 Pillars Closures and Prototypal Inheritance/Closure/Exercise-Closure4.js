const testPrivate = () => {
  let counter = 0;

  return {
    add(increment) {
      counter += increment;
    },

    retrieve() {
      return `The counter is currently at: ${counter}`;
    },
  };
};

const counter = testPrivate();

counter.retrieve();
counter.add(10);
counter.retrieve();
