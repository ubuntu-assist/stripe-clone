// Generated from the original page markup. Edit freely.
import Image from "next/image";

/** Chat-driven shopping mock-up for the agentic commerce card. */
export function AgenticCommerceGraphic() {
  return (
    <div className="lazy-animation lazy-animation--loaded lazy-bento-graphic">
      <div className="agentic-commerce-graphic__wrapper agentic-commerce-graphic__wrapper--showing">
        <div
          className="dom-graphic dom-graphic--variant-default agentic-commerce-graphic"
          data-status="ready"
          role="img"
          aria-label="AI chatbot interface showing a user request to purchase specific items. The chatbot interface offers a “Buy now” option for these selected items."
          style={{
            "--graphic-source-width": "324px",
            "--graphic-source-height": "378px",
            "--graphic-aspect-ratio": "324 / 378",
            "--graphic-scale": "1",
            "--graphic-max-width": "324px",
          }}
        >
          <div
            className="dom-graphic__content dom-graphic__content--horizontal-scale-left"
            aria-hidden="true"
          >
            <div className="agentic-commerce-graphic__layout">
              <div className="agentic-commerce-graphic__chat">
                <div className="agentic-commerce-graphic__chat-bubble agentic-commerce-graphic__chat-bubble--user">
                  I’m refreshing my wardrobe. Can you recommend some cozy, comfortable basics in
                  size M?
                </div>
                <div className="agentic-commerce-graphic__chat-bubble agentic-commerce-graphic__chat-bubble--agent">
                  <span>Absolutely. </span>
                  <span>Here </span>
                  <span>are </span>
                  <span>a </span>
                  <span>few </span>
                  <span>comfy </span>
                  <span>essentials </span>
                  <span>that </span>
                  <span>pair </span>
                  <span>well </span>
                  <span>and </span>
                  <span>could </span>
                  <span>be </span>
                  <span>a </span>
                  <span>good </span>
                  <span>starting </span>
                  <span>point: </span>
                </div>
              </div>
              <div className="agentic-commerce-graphic__products">
                <div className="agentic-commerce-graphic__products-grid">
                  <div className="agentic-commerce-graphic__product-cards__layout">
                    <div className="agentic-commerce-graphic__product-card" />
                    <div className="agentic-commerce-graphic__product-card" />
                  </div>
                  <div className="agentic-commerce-graphic__product-image">
                    <picture>
                      <Image
                        src="/images/modular-solutions/shirt-blue.png"
                        alt=""
                        width={320}
                        height={228}
                      />
                    </picture>
                  </div>
                  <div className="agentic-commerce-graphic__product-image">
                    <picture>
                      <Image
                        src="/images/modular-solutions/hoodie-navy.png"
                        alt=""
                        width={320}
                        height={228}
                      />
                    </picture>
                  </div>
                  <div className="agentic-commerce-graphic__product-description">Deluxe Shirt</div>
                  <div className="agentic-commerce-graphic__product-description">
                    Essential Hoodie
                  </div>
                  <div className="agentic-commerce-graphic__product-variant">Blue - Medium</div>
                  <div className="agentic-commerce-graphic__product-variant">Navy - Medium</div>
                  <div className="agentic-commerce-graphic__product-price tabular-nums--tight">
                    $26.00
                  </div>
                  <div className="agentic-commerce-graphic__product-price tabular-nums--tight">
                    $48.00
                  </div>
                  <div className="agentic-commerce-graphic__product-brand">Cartsy</div>
                  <div className="agentic-commerce-graphic__product-brand">Cartsy</div>
                </div>
                <div className="agentic-commerce-graphic__cta">
                  <div className="agentic-commerce-graphic__cta-button">Buy now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
