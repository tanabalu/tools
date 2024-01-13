import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "Home" },
    { path: "/speechToText", component: "SpeechToText" },
  ],
  npmClient: 'npm',
  history: { type: 'hash' },
  hash: true,
});
