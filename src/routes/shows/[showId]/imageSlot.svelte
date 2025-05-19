<script lang="ts">
  import ChevronLeftIcon from "../../../assets/icons/chevron_left_icon.svelte";
  import ChevronRightIcon from "../../../assets/icons/chevron_right_icon.svelte";

  let { imageList } = $props();
  console.log(imageList, !!imageList.length);
  let imgIdx = $state(0);

  const prevImg = () => {
    imgIdx = (imgIdx - 1 + imageList.length) % imageList.length;
  };
  const nextImg = () => {
    imgIdx = (imgIdx + 1) % imageList.length;
  };
</script>

<div
  class="group bg-background-400/20 relative isolate h-[200px] w-full overflow-hidden rounded lg:h-[400px] xl:h-[600px]"
>
  <button
    class="hover:not-disabled:text-accent-300 bg-background-400/20 absolute inset-y-0 left-0 z-20 flex h-full w-10 items-center justify-center opacity-0 backdrop-blur-md duration-800 group-hover:opacity-100 disabled:hidden sm:w-16 lg:w-24"
    onclick={prevImg}
    disabled={imageList.length <= 1}
  >
    <ChevronLeftIcon width="32" height="32" />
  </button>
  <div class="flex h-full w-full justify-center overflow-hidden">
    <img
      src={imageList[imgIdx].resolutions.medium?.url ||
        imageList[imgIdx].resolutions.original.url}
      alt=""
      class="h-full w-auto object-contain object-center"
    />
  </div>
  <button
    class="hover:not-disabled:text-accent-300 bg-background-400/20 absolute inset-y-0 right-0 z-20 flex h-full w-10 items-center justify-center opacity-0 backdrop-blur-md duration-800 group-hover:opacity-100 disabled:hidden sm:w-16 lg:w-24"
    onclick={nextImg}
    disabled={imageList.length <= 1}
  >
    <ChevronRightIcon width="32" height="32" />
  </button>
</div>
