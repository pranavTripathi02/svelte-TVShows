<script>
</script>

<header>
  <nav>
    <div class="nav-item">
      <a href="/">
        <i class="fa-solid fa-film" />
        Home
      </a>
    </div>
  </nav>
  <div class="search-bar">
    <input type="text" placeholder="Search for TV Shows" />
  </div>
  <nav>
    <div class="nav-item">
      <a href="/shows">Shows</a>
    </div>
    <div class="nav-item">
      <a href="/watchlist">Watchlist</a>
    </div>
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
  .nav-item {
    padding: 5px;
    margin: 0 5px;
  }
  .nav-item:hover {
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(var(--rgbaccent), 0.2);
    transition: ease-in-out;
    transition-duration: 150ms;
  }

  @media screen and (min-width: 1024px) {
    header > * {
      margin: 0 2rem;
    }
    .search-bar {
      width: 50%;
    }
  }
</style>
