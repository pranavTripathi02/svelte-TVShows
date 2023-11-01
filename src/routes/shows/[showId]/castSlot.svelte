<script>
  export let castList;
</script>

<h2 class="title"><a class="title-link" href="/">Top Cast</a></h2>
<div class="cast-list">
  {#each castList as cast}
    <div class="cast-info">
      <a href="/"> <span class="link" /></a>
      <img src={cast.person?.image?.medium} alt="" class="cast-info-photo" />
      <div class="cast-info-name">{cast.person.name}</div>
      <div class="cast-info-character">
        <span style="opacity: .8;">as</span>
        {cast.character.name}
      </div>
    </div>
  {/each}
</div>

<style>
  .title-link {
    color: var(--text);
    text-decoration: none;
  }
  .title-link:hover {
    color: var(--accent);
    text-decoration: underline;
  }
  .cast-list {
    display: grid;
    grid-template-columns: repeat(4, minMax(10rem, 12rem));
    /* grid-gap: auto; */
    align-items: center;
    overflow: hidden;
  }
  .cast-info {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .cast-info:hover {
    color: var(--accent);
  }
  .cast-info-character {
    opacity: 0.8;
    font-size: 0.9rem;
  }
  .cast-info-photo {
    margin: 1rem;
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    object-position: top;
  }
  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  @media screen and (max-width: 1024px) {
    .cast-list {
      display: flex;
      margin: 0 5rem 0 0;
      width: 100%;
      /* overflow: hidden; */
      /* border: 1px solid red; */
    }
  }
</style>
