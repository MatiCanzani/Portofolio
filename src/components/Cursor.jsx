import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const dotOutline = useRef();
  const dot = useRef();

  useEffect(() => {
    if (dot.current) {
      gsap.set(dot.current, { xPercent: -50, yPercent: -50 });
      gsap.set(dotOutline.current, { xPercent: -50, yPercent: -50 });
      window.addEventListener("mousemove", (e) => {
        gsap.to("#cursor-outline", {
          duration: 0.8,
          x: e.clientX,
          y: e.clientY,
        });
        gsap.to("#cursor-dot", { duration: 0, x: e.clientX, y: e.clientY });
      });
    }
  });

  return (
    <div className="absolute">
      <div ref={dot} id="cursor-dot" className="fixed h-2 w-2 rounded-full bg-slate-50 pointer-events-none  z-50"></div>
      <div ref={dotOutline} id="cursor-outline" className="fixed h-8 w-8 rounded-full bg-slate-100 border-1 border-slate-50 pointer-events-none mix-blend-difference z-50"></div>
    </div>
  );
};

export default Cursor;
