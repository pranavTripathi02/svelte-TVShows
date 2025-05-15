<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import "../app.css";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
  // import { onMount } from "svelte";
  // import Loading from "../components/Loading.svelte";
  // let isPageLoaded = true;
  // onMount(() => {
  //   isPageLoaded = false;
  // });
</script>

<Header />

<main
  class="mx-auto my-8 h-full max-w-full px-4 md:px-8 xl:w-3/5 xl:max-w-[1280px]"
>
  <!-- {#if isPageLoaded} -->
  <!--   <Loading /> -->
  <!-- {/if} -->
  {@render children?.()}
</main>

<Footer />

<style>
</style>
