<script lang="ts">
  import { Label, Progress, Switch } from "bits-ui";
  import { onMount } from "svelte";
  import { toggleMode, mode } from "mode-watcher";
  import MdiWhiteBalanceSunny from "virtual:icons/mdi/white-balance-sunny";
  import MdiMoonAndStars from "virtual:icons/mdi/moon-and-stars";
  let y: number, pageHeight: number;

  onMount(() => {
    pageHeight = document.documentElement.clientHeight;
  });
</script>

<nav class="fixed w-full h-full">
  <div class="w-fit flex items-center">
    <Switch.Root
      id="light-dark-mode"
      onCheckedChange={toggleMode}
      class="peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-dark-10 data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-foreground"
    >
      <Switch.Thumb
        class="pointer-events-none block size-[30px] shrink-0 rounded-full bg-background transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini dark:border dark:border-background/30 dark:bg-foreground dark:shadow-popover dark:data-[state=unchecked]:border"
      />
    </Switch.Root>
    <div>
      {#if $mode === "dark"}
        <MdiWhiteBalanceSunny />
      {:else}
        <MdiMoonAndStars />
      {/if}
    </div>
  </div>

  <Progress.Root
    value={y}
    max={pageHeight}
    class="z-40 w-full absolute right-0 bottom-0 h-[15px] rounded-full bg-dark-10 shadow-mini-inset"
  >
    <div
      class="h-full w-full flex-1 rounded-full bg-foreground shadow-mini-inset transition-all"
      style={`transform: translateX(-${100 - (100 * (y ?? 0)) / pageHeight}%)`}
    ></div>
  </Progress.Root>
</nav>

<svelte:window bind:scrollY={y} />
