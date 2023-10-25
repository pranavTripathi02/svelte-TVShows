<script>
  // console.log("tab");
  export let title;
</script>

<div class="tab-container">{title}</div>

<style>
  .tab-container {
    /* background: linear-gradient( */
    /*   to right, */
    /*   rgba(var(--rgbsecondary), 1) 5%, */
    /*   rgba(var(--rgbprimary), 0.2) */
    /* ); */
    /* background: var(--secondary); */
    border: 1px solid rgba(var(--rgbprimary), 0.2);
    min-width: fit-content;
    border-radius: 0.5rem;
    height: 1rem;
    padding: 1rem 1.5rem;
    margin: 1rem;
    cursor: pointer;
  }
  .tab-container:hover {
    box-shadow: 0px 0px 100px rgba(var(--rgbaccent), 0.3);
    border: 1px solid rgba(var(--rgbprimary), 0.5);
    color: var(--accent);
  }
</style>
