<script lang="ts">
  import { onMount } from "svelte";
  import ChevronLeftIcon from "../assets/icons/chevron_left_icon.svelte";
  import ChevronRightIcon from "../assets/icons/chevron_right_icon.svelte";

  let { elId } = $props();

  let leftStat = $state(true);
  let rightStat = $state(true);
  let el: HTMLElement | null;

  const checkBtnStats = () => {
    if (el) {
      if (el?.scrollLeft <= 0) leftStat = false;
      else if (el?.scrollLeft > 0) leftStat = true;
      if (el?.scrollWidth - el?.offsetWidth === el?.scrollLeft)
        rightStat = false;
      else if (el?.scrollWidth - el?.offsetWidth >= el?.scrollLeft)
        rightStat = true;
    }
  };

  onMount(() => {
    el = document.getElementById(elId);
    checkBtnStats();
  });

  const handleBtnClick = ({ dir }) => {
    const step = dir === "left" ? -30 : 30;
    let scrollAmount = 0;
    const sliderTimer = setInterval(() => {
      if (el) el.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= 350) clearInterval(sliderTimer);
      checkBtnStats();
    }, 15);
  };
</script>

<button
  class="hover:bg-background-400/60 border-text-100/80 absolute inset-y-0 -left-8 z-10 my-auto h-fit -translate-y-10 cursor-pointer rounded-full border-1 p-1 backdrop-blur-[2px] duration-200"
  onclick={() => handleBtnClick({ dir: "left" })}
  class:hidden={!leftStat}
  aria-label="scroll left"
>
  <ChevronLeftIcon classString="size-8 xl:h-12 xl:w-12" />
</button>
<button
  class="hover:bg-background-400/60 border-text-100/80 absolute inset-y-0 -right-8 z-10 my-auto h-fit -translate-y-10 cursor-pointer rounded-full border-1 p-1 backdrop-blur-[2px] duration-200"
  onclick={() => handleBtnClick({ dir: "right" })}
  class:hidden={!rightStat}
  aria-label="scroll right"
>
  <ChevronRightIcon classString="size-8 xl:h-12 xl:w-12" />
</button>
