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

<footer class="w-full">
  <div>
    <h3>© indefinites 2025</h3>
  </div>
  <div>
    {#each links as l} 
      <a href={l.url} target="_blank">{l.name}</a>
    {/each}
  </div>
</footer>

