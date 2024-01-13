import { defineConfig } from "umi";

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/tools/' : '/',
  routes: [
    { path: "/", component: "Home" },
    { path: "/speechToText", component: "SpeechToText" },
  ],
  npmClient: 'npm',
  history: { type: 'hash' },
  hash: true,
});
