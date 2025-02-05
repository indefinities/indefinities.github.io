<div class="my-5 mx-auto max-w-full w-[60%]">
    <Slider.Root
      value={currProj}
      let:thumbs
      min={0}
      max={numProjects}
      onValueChange={(value) => (currProj = value)}
      class="relative flex touch-none select-none items-center max-w-full"
    >
      <span
        class="relative h-2 w-full grow overflow-hidden rounded-full bg-dark-10"
      >
        <Slider.Range class="absolute h-full bg-foreground" />
      </span>
      {#each thumbs as thumb}
        <Slider.Thumb
          {thumb}
          class="block size-[25px] cursor-pointer rounded-full border border-border-input bg-background shadow  transition-colors hover:border-dark-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 active:scale-98 disabled:pointer-events-none disabled:opacity-50 dark:bg-foreground dark:shadow-card"
        />
      {/each}
    </Slider.Root>
  </div>