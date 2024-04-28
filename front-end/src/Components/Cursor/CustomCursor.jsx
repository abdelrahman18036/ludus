import React, { useEffect } from 'react'
import "../../assets/styles/style.css";
function CustomCursor() {
    useEffect(() => {
        const mouseInner = document.querySelector('.tf-mouse-inner');
        const mouseOuter = document.querySelector('.tf-mouse-outer');
        
        function mouseMove(e) {
          mouseOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          mouseInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
    
        function mouseEnter() {
          mouseInner.classList.add('mouse-hover');
          mouseOuter.classList.add('mouse-hover');
        }
    
        function mouseLeave() {
          mouseInner.classList.remove('mouse-hover');
          mouseOuter.classList.remove('mouse-hover');
        }
    
        document.addEventListener('mousemove', mouseMove);
        document.querySelectorAll('a, .canvas, .progress-wrap, .wishlist-button').forEach(el => {
          el.addEventListener('mouseenter', mouseEnter);
          el.addEventListener('mouseleave', mouseLeave);
        });
    
        return () => {
          document.removeEventListener('mousemove', mouseMove);
          document.querySelectorAll('a, .canvas, .progress-wrap, .wishlist-button').forEach(el => {
            el.removeEventListener('mouseenter', mouseEnter);
            el.removeEventListener('mouseleave', mouseLeave);
          });
        };
      }, []);
  return (
    <>
        <div>
        <div className="tf-mouse tf-mouse-outer" />
        <div className="tf-mouse tf-mouse-inner" />
        </div>

    </>
  )
}

export default CustomCursor