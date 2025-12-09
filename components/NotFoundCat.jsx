"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./NotFoundCat.module.css";

// Dynamically import lottie-react (no SSR)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

/**
 * NotFoundCat
 *
 * Props:
 *  - lottieSrc: optional path to a Lottie JSON in /public (e.g. "/cat-laptop.json")
 */
export default function NotFoundCat({ lottieSrc = null }) {
  const containerRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const pawsRef = useRef(null);

  const [isAttacking, setIsAttacking] = useState(false);
  const [isLicking, setIsLicking] = useState(false);
  const [jumped, setJumped] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [lottieData, setLottieData] = useState(null);

  // optional: fetch lottie JSON from public folder
  useEffect(() => {
    if (!lottieSrc) return;
    let mounted = true;
    fetch(lottieSrc)
      .then((r) => {
        if (!r.ok) throw new Error("Lottie fetch failed");
        return r.json();
      })
      .then((json) => mounted && setLottieData(json))
      .catch(() => mounted && setLottieData(null));
    return () => (mounted = false);
  }, [lottieSrc]);

  useEffect(() => {
    const container = containerRef.current;
    const leftPupil = leftPupilRef.current;
    const rightPupil = rightPupilRef.current;
    const paws = pawsRef.current;
    if (!container || !leftPupil || !rightPupil) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function movePupil(mouseX, mouseY, pupilEl, eyeRect) {
      const cx = eyeRect.left + eyeRect.width / 2;
      const cy = eyeRect.top + eyeRect.height / 2;
      const dx = mouseX - cx;
      const dy = mouseY - cy;
      const max = Math.max(eyeRect.width * 0.18, 6);
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(max, Math.hypot(dx, dy));
      const px = Math.cos(angle) * dist;
      const py = Math.sin(angle) * dist;
      pupilEl.style.transform = `translate(${px}px, ${py}px)`;
    }

    function onMove(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const leftEye = container.querySelector(`.${styles.eye}.left`).getBoundingClientRect();
      const rightEye = container.querySelector(`.${styles.eye}.right`).getBoundingClientRect();

      movePupil(mouseX, mouseY, leftPupil, leftEye);
      movePupil(mouseX, mouseY, rightPupil, rightEye);

      // Attack detection: near paws zone
      if (paws) {
        const pawRect = paws.getBoundingClientRect();
        const dx = mouseX - (pawRect.left + pawRect.width / 2);
        const dy = mouseY - (pawRect.top + pawRect.height / 2);
        const distance = Math.hypot(dx, dy);
        const threshold = Math.max(pawRect.width, pawRect.height) * 0.9 + 24;
        setIsAttacking(distance < threshold);
      }
    }

    function onLeave() {
      leftPupil.style.transition = "transform 0.25s ease";
      rightPupil.style.transition = "transform 0.25s ease";
      leftPupil.style.transform = "";
      rightPupil.style.transform = "";
      setTimeout(() => {
        leftPupil.style.transition = "";
        rightPupil.style.transition = "";
      }, 300);
      setIsAttacking(false);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    // licking cycle (disabled when reduced motion asked)
    let lickInterval = null;
    if (!reduceMotion) {
      lickInterval = setInterval(() => {
        setIsLicking(true);
        setTimeout(() => setIsLicking(false), 800 + Math.random() * 700);
      }, 3600 + Math.random() * 2400);
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (lickInterval) clearInterval(lickInterval);
    };
  }, []);

  function handleClick() {
    if (jumped) return;
    setJumped(true);
    setTimeout(() => setShowMessage(true), 800);
  }

  return (
    <div className={styles.root}>
      {/* optional Lottie decorative panel */}
      {lottieSrc && lottieData && (
        <div className={styles.lottieWrap} aria-hidden>
          <Lottie animationData={lottieData} loop autoplay style={{ width: "420px", height: "420px", pointerEvents: "none" }} />
        </div>
      )}

      <div
        className={`${styles.catScene} ${jumped ? styles.jumped : ""}`}
        ref={containerRef}
        onClick={handleClick}
        role="img"
        aria-label="A white cat for 404 page"
      >
        <div className={`${styles.cat} ${isAttacking ? styles.attack : ""} ${isLicking ? styles.lick : ""}`}>
          <div className={styles.tail} />

          <div className={styles.body}>
            <div className={styles.belly} />

            <div className={styles.head}>
              <div className={`${styles.ear} ${styles.left}`} />
              <div className={`${styles.ear} ${styles.right}`} />

              <div className={styles.face}>
                <div className={`${styles.eye} left`}>
                  <div className={styles.pupil} ref={leftPupilRef} />
                </div>
                <div className={`${styles.eye} right`}>
                  <div className={styles.pupil} ref={rightPupilRef} />
                </div>
                <div className={styles.nose} />
                <div className={styles.mouth} />
              </div>
            </div>

            <div className={styles.paws} ref={pawsRef}>
              <div className={`${styles.paw} ${styles.front} ${styles.left} ${isAttacking ? styles.strike : ""}`} />
              <div className={`${styles.paw} ${styles.front} ${styles.right} ${isAttacking ? styles.strike : ""}`} />
            </div>

            <div className={styles.backPaws}>
              <div className={`${styles.paw} ${styles.back} ${styles.left}`} />
              <div className={`${styles.paw} ${styles.back} ${styles.right}`} />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.message} ${showMessage ? styles.visible : ""}`}>
        <h1>404</h1>
        <p>The cat broke the Internet.</p>
        <a className={styles.home} href="/">
          Go home
        </a>
      </div>
    </div>
  );
}
