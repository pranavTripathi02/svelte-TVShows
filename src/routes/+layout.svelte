<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
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
    margin: 2rem auto;
  }
  @media screen and (min-width: 1024px) {
    main {
      width: 60%;
      min-width: 1024px;
      max-width: 1280px;
      /* border: 1px solid red; */
    }
  }
</style>
