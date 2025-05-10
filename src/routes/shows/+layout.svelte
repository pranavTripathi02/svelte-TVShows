<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import SuggestionsSidebar from "../../components/SuggestionsSidebar.svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
  // import { onMount } from "svelte";
  // import Loading from "../components/Loading.svelte";
  // let isPageLoaded = true;
  // onMount(() => {
  //   isPageLoaded = false;
  // });
</script>

<!-- <div class="grid-container"> -->
<main>
  {@render children?.()}
</main>

<!-- <div class="col1"> -->
<!--   <slot name="content" /> -->
<!-- </div> -->
<!-- <div class="col2"> -->
<!--   <SuggestionsSidebar /> -->
<!-- </div> -->
<!-- </div> -->

<style>
  /* .grid-container { */
  /* display: grid; */
  /* grid-template-areas: */
  /*   "main main" */
  /*   "main col1"; */
  /* grid-gap: 1rem; */
  /* width: 100%; */
  /* border: 1px solid blue; */
  /* } */
  /* main { */
  /* min-width: fit-content; */
  /* max-width: 100px; */
  /* max-width: 100%; */
  /* margin: 2rem 1rem; */
  /* grid-area: main; */
  /*   border: 1px solid white; */
  /* } */
  /* .col1 { */
  /*   grid-area: col1; */
  /* } */
  /* .col2 { */
  /* grid-area: col2; */
  /* display: none; */
  /* border: 1px solid red; */
  /* } */
  /* @media screen and (min-width: 1024px) { */
  /* .grid-container { */
  /*   display: grid; */
  /*   grid-template-areas: */
  /*     "main main" */
  /*     "col1 col2"; */
  /* } */
  /* .col2 { */
  /*   display: flex; */
  /* position: static; */
  /*   margin-top: 20rem; */
  /*   margin-right: 8rem; */
  /*   width: 100%; */
  /*   float: right; */
  /* } */
  /* } */
</style>
