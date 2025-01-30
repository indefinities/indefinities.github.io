<script lang="ts">
  import { onMount } from "svelte";
  import "./app.pcss";
  import type { ProjectImport } from "$lib/types.ts";

  import * as d3 from "d3";
  import * as Card from "$lib/components/ui/card/index.ts";
  import * as Carousel from "$lib/components/ui/carousel/index.ts";

  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Autoplay from "embla-carousel-autoplay";

  import { ModeWatcher } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index.ts";

  let projectsPath: string = '/data/projects.tsv';
  let projects: [] = [];

  
  onMount(async () => {
    try {
      d3.tsv(projectsPath, (d: ProjectImport) => {
        return {
          fileName: d['File Name'],
          title: d['Title'],
          desc: d['Description'],
          url: d['URL'],
        };
      }).then((data: []) => {
        projects = data;
      });
    } catch (error) {
      console.error("Error loading TSV file:", error);
    }
  });
</script>

<main>
  <ModeWatcher />
  <Nav />
  <div class="@container flex flex-col justify-between items-center">
    <div class="w-full h-screen grid content-center">
      <div class="col-span-4 col-start-2">
        <h1>Hello</h1>
        <h1>I'm <strong>Nat</strong></h1>
      </div>
      <div class="col-start-3 col-span-2">
        <h3 class="italic text-right">— based in Boston, MA</h3>
      </div>
    </div>

    <div class="indefinities-home-section">
      <h2>A little about me</h2>
      <h3 class="my-5">
        I'm a user <em>design-veloper</em> who advocates for
        <em>usa-accessibility</em>
        (usability & accessibility).
      </h3>

      <p class="my-5">
        Currently, I'm a Software Engineer within the Pattern Team at the Broad
        Institute developing impactful data visualizations for biomedical labs
        at MIT and Harvard. I hold a Masters of Science in
        <a
          href="https://camd.northeastern.edu/program/information-design-and-data-visualization-ms/"
          target="_blank">Information Design and Data Visualization</a
        >
        and a Bachelor of Science in
        <a
          href="https://www.khoury.northeastern.edu/programs/bs-computer-sciencedesign/"
          target="_blank">Computer Science and Information Design</a
        >
      </p>

      <p>Within my current position,</p>

      <Button class="my-5">👀 peek my resume</Button>
    </div>

    <div class="indefinities-home-section">
      <h2>Some of my work</h2>
      <!-- https://docs.google.com/spreadsheets/d/1s8DRDlWgLMvd4DbvoLtwvrqgdtc_dB0uyx8ZeQFMG3A/edit?gid=0#gid=0 -->
    <Carousel.Root plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]} opts={{
    loop: true,
  }}>
      <Carousel.Content>
        {#each projects as proj}
        <Carousel.Item class="grid justify-items-center">
          <Card.Root class="max-w-full w-[60%] p-5">
            <Card.Title class="mb-5">
              <h3>{  proj.title }</h3>
            </Card.Title>
            <Card.Description>
              <p>{ proj.desc }</p>
            </Card.Description>
          </Card.Root>
        </Carousel.Item>
      {/each}
      </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
    </Carousel.Root>
    
    </div>

    <div class="w-full h-screen grid content-center">
      <div class="col-span-4 col-start-3">
        <h1>Let's get in touch</h1>
      </div>
      <div class="col-start-4 col-span-2">
        <h3 class="italic text-right">
          <a href="mailto:natalie.d.hsu@gmail.com" target="_blank">
            natalie.d.hsu@gmail.com
          </a>
        </h3>
      </div>
    </div>
  </div>
  <Footer />
</main>

<style>
</style>
