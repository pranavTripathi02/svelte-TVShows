<footer>
  <nav>
    <a href="/about">About us</a>
    <a href="/help">Help</a>
    <a href="https://github.com/pranavTripathi02/svelte-TVShows">Source</a>
  </nav>
  <!-- <div>copyright</div> -->
</footer>

<style>
  footer {
    display: flex;
    /* justify-content: space-b; */
    align-items: center;
    position: static;
    bottom: 0;
    left: 0;
    width: 100%;
    /* height: 3rem; */
    border-top: 1px solid rgba(var(--rgbprimary), 0.5);
  }
  nav {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* min-width: fit-content; */
    /* border: 10px solid white; */
    margin: 1rem;
  }
  a {
    text-decoration: none;
    color: var(--text);
    padding: 0.5rem;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
