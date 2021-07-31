import packageJson from "../../package.json";

export const EVENT_TYPES = {
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
  ADD_TODO: "add_todo",
};

// Reusable trackEvent function
const trackEvent = (eventType) => {
  window.dataLayer.push({
    event: "customClickEvent",
    eventType,
    appVersion: packageJson.version,
  });
};

export default trackEvent;
