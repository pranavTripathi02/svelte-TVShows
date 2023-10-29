<script>
  // console.log("tab");
  export let title;
  title = title.toLowerCase();
</script>

<div class="tab-container">
  {title}
  <!-- <a href="" /> -->
  <a href="/categories/{title}"><span class="link" /></a>
</div>

<style>
  .tab-container {
    border: 1px solid rgba(var(--rgbtext), 0.1);
    min-width: fit-content;
    border-radius: 0.5rem;
    height: 1rem;
    padding: 1rem 1.5rem;
    margin: 1rem;
    cursor: pointer;
    position: relative;
    text-transform: capitalize;
  }
  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .tab-container:hover {
    text-decoration: underline;
    border: 1px solid rgba(var(--rgbaccent), 0.2);
    color: var(--accent);
  }
  @media screen and (max-width: 724px) {
    .tab-container {
      height: 1rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
    }
  }
</style>
