"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowUpIcon } from "@/components/icons/ArrowUpIcon";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";

const MAX_LENGTH = 500;

/**
 * Simple keyword heuristics for the "input strength" checklist. stripe.com
 * scores the input server-side; these approximate the same four criteria.
 */
const criteria = [
  { label: "Business website", test: /\b[a-z0-9-]+\.(com|io|co|ai|net|org|app|dev|shop|store)\b/i },
  {
    label: "What you sell",
    test: /\b(sell|selling|offer|product|products|service|services|software|app|platform|goods|course|courses|subscriptions?)\b/i,
  },
  {
    label: "How you charge",
    test: /\b(subscriptions?|monthly|annual|yearly|one-time|per|usage|invoice|invoices|pay|payments?|checkout|recurring|fee|fees)\b/i,
  },
  {
    label: "Who you sell to",
    test: /\b(customers?|clients?|businesses|consumers?|users?|companies|b2b|b2c|enterprises?|shoppers?|creators?|students?)\b/i,
  },
];

export function QueryBox() {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const limitHintId = `${inputId}-limit`;
  const counterId = `${inputId}-counter`;

  const tooLong = query.length > MAX_LENGTH;
  const canSubmit = query.trim().length > 0 && !tooLong;
  const met = criteria.map((c) => c.test.test(query));
  const progress = met.filter(Boolean).length / criteria.length;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;
    // Recommendations are generated on stripe.com; hand off to its guided flow.
    window.location.href = "https://stripe.com/personalize";
  };

  return (
    <form className="homepage-query-box" onSubmit={onSubmit}>
      <div className="homepage-query-box__header">
        <h2 className="homepage-query-box__title">Get Stripe product recommendations</h2>
        <p className="homepage-query-box__subtitle">
          Enter your company&apos;s URL, or tell us what you sell and how you sell it.
        </p>
      </div>

      <div className="homepage-query-box__input-wrapper">
        <div className="homepage-query-box__input-box">
          <div className="gradient-border-input-scope">
            <div className="gradient-border-input">
              <div className="gradient-border-input__gradient" />
              <label className="query-input__label">
                <textarea
                  id={inputId}
                  name="query"
                  className="query-input__field"
                  maxLength={1000}
                  placeholder="Sell software subscriptions to our clients..."
                  aria-label="Enter your company's URL, or tell us what you sell and how you sell it..."
                  aria-describedby={`${limitHintId} ${counterId}`}
                  aria-invalid={tooLong || undefined}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span id={limitHintId} className="sr-only">
                  Input must be {MAX_LENGTH} characters or fewer.
                </span>
              </label>
            </div>
            <div className="query-input__footer">
              <div
                id={counterId}
                className="query-input__counter"
                data-status={tooLong ? "error" : undefined}
              >
                {query.length}/{MAX_LENGTH}
              </div>
              <button
                type="submit"
                className="query-input__button double-up-effect"
                aria-label="Submit query"
                disabled={!canSubmit}
              >
                <div className="double-up-effect__container">
                  <div className="double-up-effect__item">
                    <ArrowUpIcon className="icon" />
                  </div>
                  <div className="double-up-effect__item">
                    <ArrowUpIcon className="icon" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="query-box__strength" aria-live="polite">
          <div className="query-box__strength-header">
            <div className="progress-ring">
              <svg
                className="progress-ring__graphic"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="var(--hds-color-core-neutral-200)"
                  strokeWidth="2"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="var(--hds-color-core-brand-600, #533afd)"
                  strokeWidth="2"
                  strokeLinecap="butt"
                  pathLength="1"
                  strokeDasharray={`${progress}px 1px`}
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "50% 50%",
                    transform: "rotate(-90deg)",
                    transition: "stroke-dasharray 0.3s ease",
                  }}
                />
              </svg>
              <CheckIcon
                className="progress-ring__check"
                style={{
                  opacity: progress === 1 ? 1 : 0,
                  transform: `translateX(-50%) translateY(-50%) scale(${progress === 1 ? 1 : 0})`,
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
              />
            </div>
            <span className="query-box__strength-label">Input strength:</span>
          </div>
          <ul className="query-box__strength-criteria">
            {criteria.map(({ label }, i) => (
              <li key={label} className="query-box__strength-criterion" aria-label={label}>
                <span
                  className="query-box__strength-check"
                  aria-hidden="true"
                  style={{
                    opacity: met[i] ? 1 : 0,
                    transform: `scale(${met[i] ? 1 : 0.6})`,
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <CheckCircleIcon className="query-box__strength-icon" />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
}
