<script>
</script>

<div class="grid-container">
  <div class="top">
    <slot name="top" />
  </div>
  <div class="col1">
    <slot name="content" />
  </div>
  <div class="col2"><slot name="sidebar" /></div>
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
