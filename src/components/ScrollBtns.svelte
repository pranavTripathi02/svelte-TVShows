<script>
  import { onMount } from "svelte";

  export let elId;
  // console.log(elId);

  let leftStat = true;
  let rightStat = true;
  let el;

  const checkBtnStats = () => {
    // console.log(el);
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
    // console.log("hi");
    el = document.getElementById(elId);
    checkBtnStats();
  });

  const handleBtnClick = ({ dir }) => {
    // console.log(el);
    const step = dir === "left" ? -30 : 30;
    let scrollAmount = 0;
    // //console.log(podcastBanner);
    // podcastBanner.current.scrollLeft += scrollAmount;
    // podcastBanner.current.scrollLeft
    // mainDiv.scrollLeft += 10;
    const sliderTimer = setInterval(() => {
      if (el) el.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= 350) clearInterval(sliderTimer);
      // console.log(el);
      // console.log(el?.scrollLeftMax);
      checkBtnStats();
    }, 15);
  };
</script>

<button
  class="nav-btn nav-btn-left"
  on:click={() => handleBtnClick({ dir: "left" })}
  class:disabled={!leftStat}
>
  <i class="fa-solid fa-chevron-left fa-xl" />
</button>
<button
  class="nav-btn nav-btn-right"
  on:click={() => handleBtnClick({ dir: "right" })}
  class:disabled={!rightStat}
>
  <i class="fa-solid fa-chevron-right fa-xl" />
</button>

<style>
  .nav-btn {
    position: absolute;
    background: transparent;
    /* border-radius: 100%; */
    padding: 1rem;
    border: none;
    color: rgba(var(--rgbtext), 1);
    cursor: pointer;
    /* margin: auto; */
    font-size: 1rem;
    z-index: 1;
  }
  .nav-btn:hover {
    color: var(--accent);
  }
  .nav-btn-left {
    left: -1.5rem;
  }
  .nav-btn-right {
    right: -1.5rem;
  }
  @media screen and (min-width: 1024px) {
    /* .nav-btn { */
    /*   border: 1px solid rgba(var(--rgbtext), 0.8); */
    /* } */
  }
  .disabled {
    display: none;
  }
</style>
