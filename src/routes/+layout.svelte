<script>
  import Header from "../Header.svelte";
  import Footer from "../Footer.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    width: 80%;
    margin: 2rem auto;
    /* border: 1px solid red; */
  }
</style>
