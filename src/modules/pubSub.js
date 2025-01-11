const PubSub = (function () {
  const subscribers = {};

  function subscribe(event, callback) {
    if (!(event in subscribers)) {
      subscribers[event] = [];
    }

    subscribers[event].push(callback);

    return () => unsubscribe(event, callback);
  }

  function unsubscribe(event, callback) {
    if (event in subscribers) {
      subscribers[event] = subscribers[event].filter((cb) => cb !== callback);
    }
  }

  function publish(event, data) {
    if (event in subscribers) {
      subscribers[event].forEach((callback) => {
        callback(data);
      });
    }
  }

  return {
    subscribe,
    publish,
  };
})();

export default PubSub;
