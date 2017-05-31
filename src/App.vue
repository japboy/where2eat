<template>
  <main id="app" :class="$style.app">
    <p :class="$style.text">{{ message }}</p>
  </main>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        message: 'Hello, world.'
      }
    }
  }
</script>

<style lang="postcss" module>
  :root {
    --color-main: rgb(255, 0, 0);
  }

  .app {
    padding: 10px;
  }

  .text {
    color: var(--color-main);
  }
</style>
