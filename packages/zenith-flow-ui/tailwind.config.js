const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  // prefix @zenith-flow/ui lib classes to avoid conflicting with the app
  prefix: "zf-",
  presets: [sharedConfig],
};
