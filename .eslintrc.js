module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-zenith`
  extends: ["zenith-flow"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
