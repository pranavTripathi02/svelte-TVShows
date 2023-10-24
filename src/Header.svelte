<script>
</script>

<header>
  <nav>
    <a href="/">Home</a>
  </nav>
  <div class="search-bar">
    <input type="text" placeholder="Search for TV Shows" />
  </div>
  <nav>
    <a href="/shows">Shows</a>
    <a href="/watchlist">Watchlist</a>
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
    border-bottom: 1px solid var(--secondary);
  }
  header > * {
    margin: 0 2rem;
  }
  nav {
    display: flex;
    /* width: 75%; */
    justify-content: space-between;
  }
  a {
    padding: 5px;
    color: var(--text);
    text-decoration: none;
    margin: 0 5px;
  }
  a:hover {
    border-radius: 5px;
    background-color: var(--accent);
    transition: ease-in-out;
    transition-duration: 100ms;
  }
  .search-bar {
    width: 50%;
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
</style>
