<script lang="ts">
  import { onMount } from "svelte";
  import "./app.pcss";
  import type { ProjectImport } from "$lib/types.ts";

  import * as d3 from "d3";

  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";

  import { ModeWatcher } from "mode-watcher";
  import { Button } from "bits-ui";

  let projectsPath: string = "/files/projects.tsv";
  let projects: [] = [];
  let numProjects: number;

  function imagePath(fileName: string): string {
    return `/projects/${fileName}`;
  }

  onMount(async () => {
    try {
      d3.tsv(projectsPath, (d: ProjectImport) => {
        return {
          fileName: d["File Name"],
          title: d["Title"],
          desc: d["Description"],
          url: d["URL"],
        };
      }).then((data: any) => {
        projects = data;
        numProjects = Object.entries(projects).length;
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

    <div class="indefinities-home-section mx-5">
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

      <p class="my-5">
        Outside of my work, I am a daughter, sister, friend, and enjoyer of the
        creative and food scene. When I have the opportunity to do so (on a
        meeting-free dat), I enjoy trying different roasts at different cafés
        while enjoying the city of Boston to fuel my remote work. Otherwise,
        you'll find me sketching something in my Moleskine or iPad or trying
        different web technologies within my personal projects.
      </p>

      <Button.Root
        type="button"
        id="resumeBtn"
        name="resume"
        class="my-10 px-5 py-2 border border-white rounded-md text-lg"
        href="/files/Hsu Natalie Resume.pdf"
        target="_blank"
      >
        👀 peek my resume
      </Button.Root>
    </div>

    <div class="indefinities-home-section mx-5">
      <h2>Some of my work</h2>
      <!-- https://docs.google.com/spreadsheets/d/1s8DRDlWgLMvd4DbvoLtwvrqgdtc_dB0uyx8ZeQFMG3A/edit?gid=0#gid=0 -->
      <div class="flex flex-row flex-wrap justify-around">
        {#each projects as proj}
          <div class="max-w-full w-[40%] p-5">
            <a href={proj.url} target="_blank">
              <img class="rounded-md" src={imagePath(proj.fileName)} />
            </a>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        {/each}
      </div>
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
