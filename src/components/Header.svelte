<script>
</script>

<header>
  <nav>
    <a class="nav-item" href="/">
      <i class="show-logo fa-solid fa-film" />
      Home
    </a>
  </nav>
  <div class="search-bar">
    <input type="text" placeholder="Search for TV Shows" />
  </div>
  <nav>
    <a class="nav-item" href="/shows">Shows</a>
    <a class="nav-item" href="/watchlist">Watchlist</a>
  </nav>
</header>

<style>
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 50px; */
    margin: 0 0;
    /* border: 1px solid red; */
    box-sizing: border-box;
    height: 3rem;
    border-bottom: 1px solid rgba(var(--rgbprimary), 0.5);
  }
  header > * {
    margin: 0 0.5rem;
  }
  nav {
    display: flex;
    /* width: 75%; */
    justify-content: space-between;
  }
  .search-bar {
    width: 30%;
  }
  input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
  }
  input:focus {
    outline: 1px solid var(--accent);
  }
  a {
    color: var(--text);
    text-decoration: none;
  }
  a:hover {
    color: var(--accent);
  }
  .nav-item {
    padding: 0.8rem;
    margin: 0 5px;
    position: relative;
  }
  .nav-item:hover {
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(var(--rgbsecondary), 0.8);
    transition: ease-in-out;
    transition-duration: 150ms;
  }
  .show-logo {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    header > * {
      margin: 0 2rem;
    }
    .search-bar {
      width: 50%;
    }
    .show-logo {
      display: inline-block;
    }
  }
</style>
