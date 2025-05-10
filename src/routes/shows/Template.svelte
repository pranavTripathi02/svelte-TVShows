<script lang="ts">
  interface Props {
    top?: import('svelte').Snippet;
    content?: import('svelte').Snippet;
    sidebar?: import('svelte').Snippet;
  }

  let { top, content, sidebar }: Props = $props();
</script>

<div class="grid-container">
  <div class="top">
    {@render top?.()}
  </div>
  <div class="col1">
    {@render content?.()}
  </div>
  <div class="col2">{@render sidebar?.()}</div>
</div>

<style>
  /* * { */
  /*   border: 1px solid red; */
  /* } */
  .grid-container {
    display: grid;
    grid-template-areas:
      "top   top"
      "col1   col2";
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
  }
  .top {
    grid-area: top;
  }
  .col1 {
    grid-area: col1;
    width: 100%;
  }
  .col2 {
    grid-area: col2;
  }
  @media screen and (max-width: 1024px) {
    .grid-container {
      grid-template-areas:
        "top"
        "col1";
      grid-template-columns: 100%;
      /* overflow: hidden; */
      /* max-width: 5%; */
    }
    .col2 {
      display: none;
    }
  }
</style>
