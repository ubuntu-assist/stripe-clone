// Generated from the original page markup. Edit freely.
import Image from "next/image";

export function NoCodeIllustration() {
  return (
    <div className="lazy-animation lazy-animation--loaded" style={{ aspectRatio: "400 / 294" }}>
      <div
        className="dom-graphic dom-graphic--variant-default"
        data-status="ready"
        role="img"
        aria-label="A chat conversation with a potential customer asking for a simple day cream post. The business responds with a payment link to buy their “pure glow cream”. To the right is a QR code that directs to the same payment link."
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
          <div className="no-code-graphic__card">
            <div className="no-code-graphic__messages-wrapper">
              <div className="no-code-graphic__messages">
                <div className="no-code-graphic__message no-code-graphic__message--received">
                  Hi, I’m looking for a simple day cream with SPF?
                </div>
                <div className="no-code-graphic__message no-code-graphic__message--sent">
                  Sure, in that case, I’d recommend our pure glow cream!
                </div>
                <div className="no-code-graphic__message no-code-graphic__message--sent-link">
                  <a
                    className="hds-link"
                    tabIndex={-1}
                    href="https://buy.stripe.com/test_eVa3do41l4Ye6KkcMN"
                  >
                    https://buy.stripe.com/test_eVa3do41l...
                  </a>
                </div>
              </div>
              <svg
                fill="none"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M28 0H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
                />
                <path
                  fill="#122054"
                  fillRule="evenodd"
                  d="m20.783 20.431-.75 3.959a.278.278 0 0 1-.072.14.25.25 0 0 1-.367 0l-2.885-3.042c-.134.005-.27.008-.405.008-4.586 0-8.304-3.02-8.304-6.747 0-3.726 3.718-6.747 8.304-6.747s8.304 3.02 8.304 6.747c0 2.386-1.524 4.483-3.825 5.682Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="no-code-graphic__qr-code-container">
              <div className="no-code-graphic__qr-code-label">Pure glow cream</div>
              <div className="no-code-graphic__qr-code-price tabular-nums--tight">$19.99</div>
              <div className="no-code-graphic__qr-code-wrapper">
                <div className="no-code-graphic__qr-code-image-container">
                  <picture className="no-code-graphic__qr-code-image">
                    <Image src="/images/developers/qrcode.png" alt="" width={140} height={132} />
                  </picture>
                </div>
                <div className="no-code-graphic__qr-code-prompt-label">Scan to pay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
