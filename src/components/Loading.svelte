<script>
  // console.log("loading...");
</script>

<div class="flex-container">
  <i class="loading fa-solid fa-spinner fa-2xl"></i>
  <h2>Loading..</h2>
</div>

<style>
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .loading {
    animation: spin 10s infinite linear;
    font-size: 5rem;
    margin: 5rem;
  }
  /* h3 { */
  /* border: 1px solid red; */
  /* } */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
