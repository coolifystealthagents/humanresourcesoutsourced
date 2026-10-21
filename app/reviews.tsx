'use client';

import { useState } from 'react';

type Review = {
  name: string;
  quote: string;
};

const approvedReviews: Review[] = [
  { name: "George Assi", quote: "Our VA handles everything from scheduling to client follow-ups. Productivity is way up and I finally have breathing room." },
  { name: "Kevin Carabajal", quote: "Stealth Agents matched me with the perfect assistant for my real estate business. Transactions are smoother than ever." },
  { name: "Suleania Bryant", quote: "I was skeptical about hiring remotely, but my VA proved me wrong in the first week. Professional, detail-oriented, and always on time." },
  { name: "Matthew Cupper", quote: "The onboarding process was seamless. Within 48 hours my assistant was managing my inbox and calendar like a pro." },
  { name: "AJ Smith", quote: "Having a dedicated VA freed me up to focus on strategy and growth. Best decision I made this year for my business." },
  { name: "Alexandra Ress", quote: "The quality of work is on par with any in-house hire I have had. Excellent communication and very proactive." },
  { name: "Cynthia Ellis", quote: "I have been with Stealth Agents for over a year now. The consistency and reliability of my VA is truly outstanding." },
  { name: "Andrew David", quote: "Our customer service response time dropped from hours to minutes after bringing on our VA. Clients are noticeably happier." },
  { name: "Tony Gao", quote: "Scaling from one to three VAs was effortless. The team at Stealth Agents made the transition completely painless." },
  { name: "Christina M. Johnson", quote: "My assistant streamlined our entire onboarding workflow. What took three days now takes three hours." },
  { name: "Lisa Holt", quote: "Reliable, organized, and always one step ahead. My VA anticipates what I need before I even ask." },
  { name: "Katie Hindahl", quote: "The hiring process was fast and stress-free. I described what I needed and they matched me perfectly within days." },
];

const loopReviews = [...approvedReviews, ...approvedReviews];

export function ReviewsMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="reviews-marquee" aria-labelledby="stealth-reviews-title">
      <div className="reviews-heading">
        <div>
          <p className="reviews-kicker">Client feedback</p>
          <h2 id="stealth-reviews-title">StealthAgents reviews</h2>
        </div>
        <div className="reviews-heading-actions">
          <button type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
            {paused ? 'Resume reviews' : 'Pause reviews'}
          </button>
          <a href="https://stealthagents.com/our-clients" target="_blank" rel="noopener noreferrer">
            Read the original reviews
          </a>
        </div>
      </div>
      <div className="reviews-window">
        <div className={`reviews-track${paused ? ' is-paused' : ''}`}>
          {loopReviews.map((review, index) => (
            <article
              className={`review-card${index >= approvedReviews.length ? " review-card-duplicate" : ""}`}
              key={`${review.name}-${index}`}
              aria-hidden={index >= approvedReviews.length ? true : undefined}
            >
              <span className="review-stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote>“{review.quote}”</blockquote>
              <p>{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
