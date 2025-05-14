<script lang="ts">
  const { title }: { title: string } = $props();
</script>

<h2 class="relative text-2xl font-medium">
  <span
    class="before:bg-accent-300 before:absolute before:inset-0 before:-left-2 before:my-auto before:h-3/5 before:w-1"
  ></span>
  {title}
</h2>
