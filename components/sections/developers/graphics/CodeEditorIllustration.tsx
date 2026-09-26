// Generated from the original page markup. Edit freely.

export function CodeEditorIllustration() {
  return (
    <div className="lazy-animation lazy-animation--loaded" style={{ aspectRatio: "400 / 294" }}>
      <div
        className="dom-graphic dom-graphic--variant-default"
        data-status="ready"
        role="img"
        aria-label="JavaScript code that initializes the Stripe library using a test API key and lists various Stripe functions. Below, a terminal displays a message indicating the server is running and waiting for requests."
        style={{
          "--graphic-source-width": "400px",
          "--graphic-source-height": "294px",
          "--graphic-aspect-ratio": "400 / 294",
          "--graphic-scale": "1",
          "--graphic-max-width": "400px",
        }}
      >
        <div
          className="dom-graphic__content dom-graphic__content--horizontal-scale-left"
          aria-hidden="true"
        >
          <div className="integrated-code-graphic__card">
            <pre className="integrated-code-graphic__editor">
              <code>
                <span className="code-line">
                  <span className="code-linenumber">1</span>{" "}
                  <div>
                    <span>const stripe = require(</span>
                    <span className="code-string">{"'stripe'"}</span>
                    <span>)(</span>
                  </div>
                </span>
                <span className="code-line">
                  <span className="code-linenumber">2</span>
                  <div>
                    <span className="code-string">{" 'sk_test_abc123'"}</span>
                  </div>
                </span>
                <span className="code-line">
                  <span className="code-linenumber">3</span>
                  <div>
                    <span>);</span>
                  </div>
                </span>
                <span className="code-line">
                  <span className="code-linenumber">4</span>{" "}
                  <div>
                    <span className="code-keyword">await</span>
                    <span> stripe.</span>
                  </div>
                  <span className="code-autocomplete">
                    <span>accountLinks</span>
                    <span>accounts</span>
                    <span className="code-autocomplete--active">applePayDomains</span>
                    <span>applicationFees</span>
                    <span>balances</span>
                  </span>
                </span>
                <span className="code-line">
                  <span className="code-linenumber">5</span>
                </span>
                <span className="code-line">
                  <span className="code-linenumber">6</span>
                </span>
              </code>
            </pre>
            <div className="integrated-code-graphic__terminal">
              <div className="integrated-code-graphic__statusbar">
                <div className="statusbar-left">
                  <span className="statusbar-mode">NORMAL</span>
                  <span className="statusbar-filename">server.js</span>
                </div>
                <div className="statusbar-right">100% ≡ 6/6 ln : 4</div>
              </div>
              <span className="terminal-line">
                <span className="terminal-cmd">$ node server.js && stripe listen</span>
              </span>
              <span className="terminal-line">
                <span className="terminal-output">{">"} Ready! Waiting for requests...</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
