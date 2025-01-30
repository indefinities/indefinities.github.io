<script lang="ts">
    import { Progress } from "$lib/components/ui/progress/index.js";
    let value = 13;
</script>

<nav class="fixed w-full h-full">
    <Progress {value} max={100} class="w-full absolute right-0 bottom-0"/>  
</nav>