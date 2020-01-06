const EventManager = (function createEventManager() {
  const events = {};

  return {
    subscribe(event, handler) {
      if (event in events) {
        events[event].push(handler);
        return;
      }
      events[event] = [handler];
    },

    unsubscribe(event, handler) {
      if (event in events) {
        events[event] = events[event].filter(
          eventHandler => eventHandler !== handler
        );
      }
    },
    trigger(event, args) {
      events[event].forEach(handler => handler(args));
    }
  };
})();

const app = {
  show(toggle) {
    EventManager.trigger("app:show", toggle);
  },
  update(menu) {
    EventManager.trigger("app:update", menu);
  }
};
