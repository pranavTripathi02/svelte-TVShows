<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    /* min-width: fit-content; */
    /* max-width: 100px; */
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    main {
      width: 66%;
      min-width: 1024px;
      max-width: 1280px;
      margin: 2rem auto;
      /* border: 1px solid red; */
    }
  }
</style>
