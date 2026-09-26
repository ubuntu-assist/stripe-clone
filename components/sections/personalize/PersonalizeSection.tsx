import { QueryBox } from "./QueryBox";

export function PersonalizeSection() {
  return (
    <section className="hds-color-mode section section--white hds-mode--light">
      <div className="section-container personalize-section">
        <QueryBox />
        <p className="LegalDisclaimer">
          By messaging, you understand how{" "}
          <a
            href="https://support.stripe.com/questions/use-of-artificial-intelligence-(ai)-in-stripe-services"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe uses AI
          </a>{" "}
          and acknowledge our{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
