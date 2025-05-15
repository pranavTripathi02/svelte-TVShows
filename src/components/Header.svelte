<script>
  import SearchIcon from "../assets/icons/search_icon.svelte";
</script>

<header class="bg-background-400 w-full py-4">
  <div class="container mx-auto flex justify-between gap-4 lg:gap-12">
    <nav class="flex items-center justify-center gap-4 xl:gap-8">
      <a class="group relative isolate h-fit" href="/">
        <span
          class="before:bg-accent-300 before:absolute before:h-full before:w-0 before:mix-blend-difference before:duration-500 group-hover:before:w-4"
          >Home</span
        >
      </a>
      <a class="group relative isolate h-fit" href="/">
        <span
          class="before:bg-accent-300 before:absolute before:h-full before:w-0 before:mix-blend-difference before:duration-500 group-hover:before:w-4"
        >
          Movies
        </span>
      </a>
      <a class="group relative isolate h-fit" href="/">
        <span
          class="before:bg-accent-300 text-nowrap before:absolute before:h-full before:w-0 before:mix-blend-difference before:duration-500 group-hover:before:w-4"
        >
          TV Shows
        </span>
      </a>
    </nav>
    <div
      class="group outline-background-100 focus-within:outline-accent-400/40 relative flex items-center overflow-clip rounded outline duration-300 lg:min-w-1/3 xl:min-w-1/2"
    >
      <input
        type="text"
        placeholder="Search CeeTV"
        class="w-full bg-transparent px-4 py-1 outline-none"
      />
      <!-- search icon -->
      <button
        onclick={(e) => e.preventDefault()}
        class="bg-background-100 group/searchBtn isolate h-full w-12 hover:cursor-pointer"
        title="Search"
      >
        <SearchIcon
          height="20"
          width="20"
          class="group-hover/searchBtn:text-accent-300 m-auto duration-300"
        />
      </button>
    </div>
    <nav class="flex items-center gap-8">
      <a class="nav-item" href="/watchlist">
        <div class="group relative isolate flex gap-2">
          <span class="">Watchlist</span>
        </div>
      </a>
    </nav>
  </div>
</header>
