<header class="bg-background-navw-full py-2">
  <div class="container mx-auto flex justify-center gap-12">
    <nav class="flex justify-center">
      <a class=" decoration-none px-3 py-2 hover:underline" href="/"> Home </a>
      <a class="decoration-accent px-3 py-2 hover:underline" href="/">
        Movies
      </a>
      <a class="decoration-accent px-3 py-2 hover:underline" href="/">
        TV Shows
      </a>
      <a class="decoration-accent px-3 py-2 hover:underline" href="/">
        Watch
      </a>
    </nav>
    <div class="group flex items-center rounded-md px-4">
      <input
        type="text"
        placeholder="Search CeeTV"
        class="w-full bg-transparent py-0 outline-none"
      />
      <!-- search icon -->
      <button
        onclick={(e) => e.preventDefault()}
        class="h-full w-8"
        title="Search"
      >
        <i
          class="fa-solid fa-search text-text-secondary group-focus-within:text-text-primary py-0"
        ></i></button
      >
    </div>
    <nav class="flex items-center gap-8">
      <a class="nav-item" href="/watchlist">
        <div class="group flex gap-2">
          <!-- bookmark icon -->
          <i class="fa-solid fa-bookmark group-hover:text-accent fa-lg m-auto"
          ></i>
          <span class="decoration-accent group-hover:underline">Watchlist</span>
        </div>
      </a>
      <div>
        <i class="fa-solid fa-sun group-hover:text-accent fa-lg m-auto"></i>
      </div>
      <!-- theme menu -->
    </nav>
  </div>
</header>
