<footer>
  <nav>
    <a href="/about">About us</a>
    <a href="/help">Help</a>
    <a href="/contact">Contact us</a>
  </nav>
  <!-- <div>copyright</div> -->
</footer>

<style>
  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    border-top: 1px solid var(--secondary);
  }
  nav {
    display: flex;
    justify-content: space-between;
    min-width: fit-content;
    width: 30%;
  }
  a {
    text-decoration: none;
    color: var(--text);
  }
  a:hover {
    text-decoration: underline;
  }
</style>
