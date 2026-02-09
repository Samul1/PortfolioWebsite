import React, { useEffect, useMemo, useState } from "react";

// ============================================================
// ===== IMAGE CAROUSEL =====
// - Next/Prev
// - Dots
// - Keyboard: left/right
// - Click image: open fullscreen lightbox (ESC / click closes)
// ============================================================

export default function ImageCarousel({ slides = [] }) {
  // ===== SANITIZE INPUT =====
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  // ===== INDEX STATE =====
  const [i, setI] = useState(0);

  // ===== LIGHTBOX STATE =====
  const [isOpen, setIsOpen] = useState(false);

  const hasSlides = safeSlides.length > 0;

  // ============================================================
  // ===== HELPERS =====
  // ============================================================

  const clampIndex = (n) => {
    if (!hasSlides) return 0;
    const m = safeSlides.length;
    return (n % m + m) % m;
  };

  const go = (delta) => setI((prev) => clampIndex(prev + delta));

  // ============================================================
  // ===== KEYBOARD HANDLING =====
  // - Arrow keys control carousel
  // - ESC closes lightbox
  // ============================================================

  const onKeyDown = (e) => {
    if (!hasSlides) return;

    if (e.key === "Escape") {
      if (isOpen) setIsOpen(false);
      return;
    }

    // kun lightbox on auki, ei vaihdeta karusellia nuolilla (valinnainen)
    if (isOpen) return;

    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  // ============================================================
  // ===== BODY SCROLL LOCK WHEN LIGHTBOX OPEN =====
  // ============================================================

  useEffect(() => {
  if (isOpen) {
    document.body.classList.add("noScroll");
    document.body.classList.add("lightboxOpen");
  } else {
    document.body.classList.remove("noScroll");
    document.body.classList.remove("lightboxOpen");
  }

  return () => {
    document.body.classList.remove("noScroll");
    document.body.classList.remove("lightboxOpen");
  };
}, [isOpen]);

  if (!hasSlides) return null;

  const cur = safeSlides[i];

  // ============================================================
  // ===== RENDER =====
  // ============================================================

  return (
    <>
      <div className="carousel" tabIndex={0} onKeyDown={onKeyDown}>
        {/* ===== MAIN IMAGE (CLICK TO OPEN) ===== */}
        <div className="carousel__frame">
          <img
            className="carousel__img"
            src={cur.src}
            alt={cur.alt || "slide"}
            onClick={() => setIsOpen(true)}
            draggable={false}
          />
        </div>

        {/* ===== CONTROLS ===== */}
        <div className="carousel__controls">
          <button className="carousel__btn" type="button" onClick={() => go(-1)}>
            ←
          </button>

          <div className="carousel__dots">
            {safeSlides.map((_, idx) => (
              <button
                key={idx}
                className={`carousel__dot ${idx === i ? "is-active" : ""}`}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button className="carousel__btn" type="button" onClick={() => go(1)}>
            →
          </button>
        </div>
      </div>

      {/* ======================================================
          ===== LIGHTBOX OVERLAY =====
          - click anywhere closes
          - click image closes
          - ESC closes (handled above)
          ====================================================== */}
      {isOpen ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div style={{ display: "grid", justifyItems: "center" }}>
            <img
              className="lightbox__img"
              src={cur.src}
              alt={cur.alt || "slide"}
              onClick={() => setIsOpen(false)}
              draggable={false}
            />
            <div className="lightbox__hint">Click image (or press ESC) to close</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
