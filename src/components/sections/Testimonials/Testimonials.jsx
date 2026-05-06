import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    initials: "VM",
    name: "Vrushab Mukhad",
    location: "Nagpur, Maharashtra",
    quote:
      "They crafted an epic, budget-friendly adventure for us. The trip of a lifetime without breaking the bank!",
    stars: 5,
  },
  {
    initials: "KJ",
    name: "Karan Junghare",
    location: "Nagpur, Maharashtra",
    quote:
      "Incredibly fast booking combined with warm, personal care. They offer exactly what modern travel is missing.",
    stars: 5,
  },
  {
    initials: "AD",
    name: "Adarsh Bhadange",
    location: "Nagpur, Maharashtra",
    quote:
      "Flawless planning from start to finish. Oravie Holidays truly delivered the gold standard of travel!",
    stars: 5,
  },
  {
    initials: "PR",
    name: "Priya Rathod",
    location: "Mumbai, Maharashtra",
    quote:
      "Every detail was perfectly curated. Our honeymoon felt like a dream — completely stress-free from start to finish.",
    stars: 5,
  },
  {
    initials: "SK",
    name: "Siddharth Kulkarni",
    location: "Pune, Maharashtra",
    quote:
      "Responsive, thoughtful, and genuinely passionate about travel. I will never book with anyone else again.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  return (
    <section className="section">
      <div className="header">
        <div>
          <div className="badge">Traveler Stories</div>
          <h2 className="section-title">
            What Our <br /> <em>Travelers Say</em>
          </h2>
          <p className="section-sub">
            Real experiences from happy clients who've trusted ORAVIE Holidays
            for stress-free, personalized journeys.
          </p>
        </div>

        <div className="nav-btns">
          <button className="nav-btn" onClick={prev}>←</button>
          <button className="nav-btn" onClick={next}>→</button>
        </div>
      </div>

      <div className="card-wrapper">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className={`card ${i === current ? "active" : ""}`}
          >
            <div className="stars">{"★".repeat(t.stars)}</div>
            <p className="quote">"{t.quote}"</p>

            <div className="author">
              <div className="avatar">{t.initials}</div>
              <div>
                <div className="name">{t.name}</div>
                <div className="loc">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}