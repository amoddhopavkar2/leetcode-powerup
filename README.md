# LeetCode Power-Up

Injects a sidebar on LeetCode problem pages with:
1. Top 3–5 YouTube video solution links (via YouTube Data API).
2. A per-problem scratchpad (notes saved in chrome.storage).

## Setup

1. Clone or unzip this folder.
2. In `content.js` replace `YOUR_API_KEY_HERE` with your YouTube Data API key.
3. In Chrome, go to `chrome://extensions/`, enable “Developer mode”, click “Load unpacked” and select this folder.
4. Navigate to any LeetCode problem (e.g. https://leetcode.com/problems/two-sum/) and enjoy!

## Environment Variables

1. Create a `.env` file in the project root:

```
YT_API_KEY=your_youtube_api_key_here
```

2. Use a build tool (like webpack DefinePlugin, Vite, or similar) to inject the environment variable into `content.js` at build time. For example, with Vite, use `import.meta.env.YT_API_KEY` and configure Vite to expose it.

**Note:** Environment variables are not available natively in browser extensions. You must use a build step to replace them in your code before packaging the extension.    