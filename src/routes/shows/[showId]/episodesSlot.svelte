<script lang="ts">
  let { seasonList } = $props();
  
</script>

<div class="episodes-list">
  <div class="episode-info">
    <img class="episode-info-photo" src="" alt="" />
    <div class="episode-info-desc"></div>
  </div>
</div>

<style>
  .episodes-list {
    display: flex;
    flex-direction: column;
  }
  .episode-info {
    display: flex;
  }
</style>
