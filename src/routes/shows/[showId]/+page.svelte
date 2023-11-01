<script>
  import Loading from "../../../components/Loading.svelte";
  import Details from "./Details.svelte";
  import SuggestionsSidebar from "../../../components/SuggestionsSidebar.svelte";
  import TopInfo from "./TopInfo.svelte";
  import Template from "../Template.svelte";

  export let data;
  $: ({
    name,
    averageRuntime,
    genres,
    image,
    network,
    premiered,
    status,
    summary,
    rating,
  } = data?.showInfo);
  $: ({ showImages, showCast, showSeasons } = data);
  $: backImages = showImages.filter((item) => item.type === "background");
</script>

<!-- {#if data.loading} -->
<!--   <Loading /> -->
<!-- {:else} -->
<!--   <div class="grid-container"> -->
<!--     <div class="top"> -->
<!--       <TopInfo data={{ name, image, backImages, genres }} /> -->
<!--     </div> -->
<!--     <div class="col1"> -->
<!--       <Details data={{ summary, network, showSeasons, showImages, showCast }} /> -->
<!--     </div> -->
<!--     <div class="col2"> -->
<!--       <SuggestionsSidebar /> -->
<!--     </div> -->
<!--   </div> -->
<!--   <!-- <RelatedSlot related={shows}/> -->
<!-- {/if} -->

<Template>
  <TopInfo slot="top" data={{ name, image, backImages, genres }} />
  <Details
    slot="content"
    data={{ summary, network, showSeasons, showImages, showCast }}
  />
  <SuggestionsSidebar slot="sidebar" />
</Template>

<style>
  /* .grid-container { */
  /*   display: grid; */
  /*   grid-template-areas: */
  /*     "top top" */
  /*     "col1 col2"; */
  /*   grid-template-columns: 1.5fr 1fr; */
  /*   grid-gap: 1rem; */
  /* } */
  /* .grid-container > * { */
  /*   overflow: hidden; */
  /* } */
  /* .top { */
  /*   grid-area: top; */
  /* } */
  /* .col1 { */
  /*   grid-area: col1; */
  /*   padding: 0.5rem; */
  /* } */
  /* .col2 { */
  /*   grid-area: col2; */
  /*   padding: 1rem; */
  /* } */
  /* @media screen and (max-width: 1024px) { */
  /*   .grid-container { */
  /*     grid-template-areas: */
  /*       "top" */
  /*       "col1"; */
  /*     grid-template-columns: auto; */
  /*   } */
  /*   .col2 { */
  /*     display: none; */
  /*   } */
  /* } */
</style>
