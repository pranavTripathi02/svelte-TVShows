<script lang="ts">
  import Card from "./Card.svelte";
  import ScrollBtns from "./ScrollBtns.svelte";
  import type { TShow } from "../types";
  import SectionHeader from "./SectionHeader.svelte";

  let { data, title }: { data: TShow[]; title: string } = $props();
</script>

<section class:hidden={data.length < 1} class="mt-12">
  <SectionHeader {title} />
  <div class="relative m-4 flex items-center">
    <div
      id={`${title}-carousel`}
      class="flex gap-2 overflow-scroll [scrollbar-width:none] lg:overflow-hidden"
    >
      {#each data as show}
        <Card {show} />
      {/each}
    </div>
    <ScrollBtns elId={`${title}-carousel`} />
  </div>
</section>

<style>
</style>
