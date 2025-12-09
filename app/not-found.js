"use client";
import { useEffect } from "react";
import "./cat404.css";

export default function NotFound() {
  useEffect(() => {
    const cat = document.querySelector(".cat");
    const eyes = document.querySelectorAll(".eye");

    // CAT RANDOM WALK
    function roam() {
      const x = Math.random() * (window.innerWidth - 150);
      const y = Math.random() * (window.innerHeight - 150);
      const angle = x > cat.offsetLeft ? 0 : 180;
      
      cat.style.transform = `translate(${x}px, ${y}px) scaleX(${angle === 0 ? 1 : -1})`;

      setTimeout(roam, 3000);
    }
    roam();

    // EYES FOLLOW CURSOR
    document.addEventListener("mousemove", (e) => {
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const angle = Math.atan2(dy, dx);
        eye.style.transform = `rotate(${angle}rad)`;
      });
    });
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">404 – Page Not Found</h1>
      <p className="subtitle">Our cat is still searching for this page…</p>

      <div className="cat">
        <div className="head">
          <div className="ear left"></div>
          <div className="ear right"></div>
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="nose"></div>
        </div>
        <div className="body"></div>
        <div className="paw left"></div>
        <div className="paw right"></div>
        <div className="tail"></div>
      </div>
    </div>
  );
}
