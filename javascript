<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <link rel="stylesheet" href="src/style.css" />
    <title>AI Poem Generator</title>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>AI Poem Generator</h1>
      </header>

      <main>
        <form id="poem-generator-form">
          <input
            type="text"
            placeholder="Enter the topic of the poem"
            autofocus
            required
            autocomplete="off"
            class="instructions"
          />
          <input type="submit" class="submit-button" />
        </form>
        <div class="poem" id="poem"></div>
      </main>

      <footer>
        This AI project was coded by
        <a href="https://github.com/poncetiff/" target="_blank">Tiffany Ponce</a>
        and is
        <a
          href="https://github.com/poncetiff/aipoemsjavascript"
          target="_blank"
        >
          open-sourced on GitHub</a
        >
        and is
        <a href="https://ai-poem-generator.netlify.app/" target="_blank"
          >hosted on Netlify</a
        >.
      </footer>
    </div>

    <script src="src/index.js"></script>
  </body>
</html>
