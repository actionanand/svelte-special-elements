import App from './App.svelte';

const app = new App({
	// target: document.body
  target: document.getElementById('app'),
  props: {
    appName: 'svelte special elements'
  }
});

export default app;