<script>
  let links = [
    {
      name: 'GitHub',
      url: 'https://github.com/indefinities',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/natdhsu',
    }
  ]
</script>

<footer class="w-full px-24 py-16 grid">
  <div>
    <h3>© indefinites 2025</h3>
  </div>
  <div class="col-start-4 col-span-2 flex flex-row justify-around">
    {#each links as l} 
      <a href={l.url} target="_blank">{l.name}</a>
    {/each}
  </div>
</footer>

