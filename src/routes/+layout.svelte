<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  // import { onMount } from "svelte";
  // import Loading from "../components/Loading.svelte";
  // let isPageLoaded = true;
  // onMount(() => {
  //   isPageLoaded = false;
  // });
</script>

<Header />

<main>
  <!-- {#if isPageLoaded} -->
  <!--   <Loading /> -->
  <!-- {/if} -->
  <slot />
</main>

<Footer />

<style>
  main {
    /* min-width: fit-content; */
    /* max-width: 100px; */
    max-width: 100%;
    margin: 2rem 1rem;
  }
  @media screen and (min-width: 1024px) {
    main {
      width: 60%;
      min-width: 1024px;
      max-width: 1280px;
      margin: 2rem auto;
      /* border: 1px solid red; */
    }
  }
</style>
