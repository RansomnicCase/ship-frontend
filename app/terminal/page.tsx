"use client"; // Since we'll be using hooks

import { useEffect } from "react";

const TerminalPage = () => {
  useEffect(() => {
    // Initialize the app when the component mounts
    app();

    // Functions moved from index.js
    function app() {
      window.userInput = document.getElementById("userInput");
      const dummyKeyboard = document.getElementById("dummyKeyboard");
      dummyKeyboard?.focus();
    }

    function execute(input: string) {
      const terminalOutput = document.getElementById("terminalOutput")!;
      let output;
      input = input.toLowerCase();

      if (input.length === 0) {
        return;
      }

      if (input === "party") {
        startTheParty();
      }

      if (input === "sudo rm -rf") {
        whooops();
      }

      output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
      if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
      } else {
        output += `<div class="output"> ${COMMANDS[input]} </div>`;
      }

      terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function key(e: KeyboardEvent) {
      const userInput = document.getElementById("userInput")!;
      const input = userInput.innerHTML;

      if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = "";
        return;
      }

      userInput.innerHTML = input + e.key;
    }

    function backspace(e: KeyboardEvent) {
      const userInput = document.getElementById("userInput")!;
      if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
      }
      userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
    }

    document.addEventListener("keydown", backspace);
    document.addEventListener("keypress", key);

    // Confetti party
    const startTheParty = () => {
      var confettiSettings = {
        target: "canvas",
        max: "1000",
        size: "1",
        animate: true,
        props: ["square", "triangle", "line"],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: "25",
        rotate: true,
        width: "1680",
        height: "971",
        start_from_edge: true,
        respawn: false
      };
      var confetti = new (window as any).ConfettiGenerator(confettiSettings);
      confetti.render();
    };

    const whooops = () => {
      document.body.querySelector(".hero")?.remove();
      document.body.style.background = "#000";
      document.body.style.width = "100vw";
      document.body.style.height = "100vh";
    };

    const COMMANDS = {
      help:
        'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]',
      about:
        "Hello 👋<br>I'm Twan Mulder. I’m a 23 yr old web developer currently living in the Netherlands. I have a burning passion to want and help others with code that I create. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better developer.",
      skills:
        '<span class="code">Languages:</span> HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, REST API\'s<br><span class="code">Frameworks:</span> React.js, Redux, GSAP, Sass, Vue.js',
      education:
        "B.Sc. Interactive Media & Technologies - Hanze University of Applied Sciences, Groningen",
      experience:
        "I'm currently working as a front-end developer at Storm Digital. My main areas of focus are helping our creative team build successful digital creatives, and developing A/B tests for our CRO team.",
      contact:
        'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/twanmulder" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@toktoktwan" class="social link">Medium</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/toktoktwan/" class="social link">Twitter</a>"]',
      bob: "<span style='font-size: 2rem;'>🐕</span>",
      party: "🎉🎉🎉",
      beer: '["<a target="_blank" rel="noopener noreferrer" href="https://anytimers.netlify.com" class="social link">Anytimers!</a>"]',
      "sudo rm -rf": ""
    };
  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-flex">
                <div className="column-child terminal shadow">
                  <div className="terminal-bar dark-mode">
                    <div className="icon-btn close"></div>
                    <div className="icon-btn min"></div>
                    <div className="icon-btn max"></div>
                    <div className="terminal-bar-text is-hidden-mobile dark-mode-text">
                      guest@twan: ~
                    </div>
                  </div>
                  <div
                    className="terminal-window primary-bg"
                    onClick={() => document.getElementById("dummyKeyboard")?.focus()}
                  >
                    <div className="terminal-output" id="terminalOutput">
                      <div className="terminal-line">
                        <span className="help-msg">
                          Welcome to my portfolio! — Type <span className="code">help</span> for a
                          list of supported commands.
                        </span>
                      </div>
                    </div>
                    <div className="terminal-line">
                      <span className="success">➜</span>
                      <span className="directory">~</span>
                      <span className="user-input" id="userInput"></span>
                      <input
                        type="text"
                        id="dummyKeyboard"
                        className="dummy-keyboard"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>Made with 💙 by Twan Mulder.</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default TerminalPage;
