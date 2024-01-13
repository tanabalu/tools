import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "Home" },
    { path: "/speechToText", component: "SpeechToText" },
  ],
  npmClient: 'pnpm',
});
