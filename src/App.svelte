<script>
  import "./app.pcss";
  import Footer from "$lib/components/Footer.svelte";
  
  let contentClasses = "sm:w-sm md:w-lg lg:w-4xl min-h-screen";
</script>

<main>
  <div class="@container flex flex-col justify-between items-center">
    <div class="{contentClasses + ' flex flex-col justify-center'}">
        <h1>Hello</h1>
        <h1>I'm <strong>Nat</strong></h1>
        <h3 class="italic text-right">— based in Boston, MA</h3>
    </div>
  
    <div class="{contentClasses}">
      <h2>A little about me</h2>
      <h4 class="my-5">
        I'm a user <em>design-veloper</em> who advocates for <em>usa-accessibility</em>
        (usability & accessibility).  
      </h4>
  
      <p class="my-5">Currently, I'm a Software Engineer within the Pattern Team at the Broad Institute developing
        impactful data visualizations for biomedical labs at MIT and Harvard. I hold a Masters of Science in
        <a href="https://camd.northeastern.edu/program/information-design-and-data-visualization-ms/" target="_blank">Information Design and Data Visualization</a>
        and a Bachelor of Science in <a href="https://www.khoury.northeastern.edu/programs/bs-computer-sciencedesign/" target="_blank">Computer Science and Information Design</a>
      </p>
      
      <p>
        Within my current position, 
      </p>

      <button>
        see my resume
      </button>
    </div>
  
    <div class="{contentClasses}">
      <h2>Some of my work</h2>
      <!-- https://docs.google.com/spreadsheets/d/1s8DRDlWgLMvd4DbvoLtwvrqgdtc_dB0uyx8ZeQFMG3A/edit?gid=0#gid=0 -->

    </div>
  
    <div class="{contentClasses}">
      <h1>Let's get in touch</h1>
      <a href="mailto:natalie.d.hsu@gmail.com" target="_blank">
        <h4>natalie.d.hsu@gmail.com</h4>
      </a>
    </div>
  </div>
  <Footer />
</main>
