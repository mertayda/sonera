import React, { useEffect, useRef, useState } from "react";
import img from "../../../../public/images/Satisfy/1.png"; // Ensure path is correct
import profile from "../../../../public/images/Satisfy/profile.jpg"; // Ensure path is correct
import "./Price.css";

// 1. Structure data so text and author are linked
const testimonials = [
  {
    id: 1,
    text: "They will be at top of my list the next time I need a housecleaning. I was extremely pleased with the service I received. It was easy efficient to set up the cleaning.",
    name: "John Smith",
    company: "Eco Systems",
    image: profile,
  },
  {
    id: 2,
    text: "The team did a top-notch job. The price was fair and up front. I highly recommend them for anyone looking for quality service.",
    name: "Sarah Connor",
    company: "Skynet Corp",
    image: profile,
  },
  {
    id: 3,
    text: "Incredible attention to detail. I've used many services before but this one stands out for their professionalism.",
    name: "Mike Ross",
    company: "Pearson Hardman",
    image: profile,
  },
];

const Satisfy = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const startX = useRef(0);

  // 2. Handle Resizing efficiently using ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Navigation Logic
  const next = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Pointer/Drag Events
  const onPointerDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    // Important: Capture pointer so drag continues even if mouse leaves div
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX.current;
    setDragOffset(diff);
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50; // Drag distance required to swap
    
    if (dragOffset < -threshold && currentIndex < testimonials.length - 1) {
      next();
    } else if (dragOffset > threshold && currentIndex > 0) {
      prev();
    }
    
    // Reset drag offset to animate back to center
    setDragOffset(0);
    e.target.releasePointerCapture(e.pointerId);
  };

  // Calculate current transform position
  const currentTranslate = -(currentIndex * containerWidth) + dragOffset;

  return (
    <section className="Satisfy py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          
          {/* Image Column - Stack on mobile (order-2), Left on Desktop (order-lg-1) */}
          <div className="col-12 col-lg-5 mb-4 mb-lg-0 order-2 order-lg-1">
            <img src={img} className="img-fluid rounded" alt="Satisfied Client" />
          </div>

          {/* Text Column */}
          <div className="col-12 col-lg-7 order-1 order-lg-2">
            <h3 className="satisfy-title mb-4">Satisfied Users Over The Globe</h3>

            {/* Slider Window */}
            <div 
              className="slider-window overflow-hidden mb-4" 
              ref={containerRef}
              // Pan-y allows vertical scrolling on mobile while dragging horizontally
              style={{ touchAction: "pan-y", cursor: isDragging ? "grabbing" : "grab" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp} // Handle mouse leaving element
            >
              <div
                className="slider-track d-flex"
                style={{
                  transform: `translateX(${currentTranslate}px)`,
                  transition: isDragging ? "none" : "transform 0.3s ease-out",
                }}
              >
                {testimonials.map((item) => (
                  <div
                    className="slider-item"
                    style={{ minWidth: "100%" }}
                    key={item.id}
                  >
                    <p className="satisfy-text-content lead">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer: Controls and Active Profile */}
            <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
              
              {/* Dynamic Profile Info */}
              <div className="d-flex align-items-center gap-3">
                <div className="thumb-img-wrapper">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt="profile" 
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }} 
                  />
                </div>
                <div className="d-flex flex-column">
                  <span className="fw-bold">{testimonials[currentIndex].name}</span>
                  <span className="text-muted small">{testimonials[currentIndex].company}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="d-inline-flex gap-2">
                <button 
                  className="btn btn-outline-success" 
                  onClick={prev} 
                  disabled={currentIndex === 0}
                >
                  Prev
                </button>
                <button 
                  className="btn btn-success" 
                  onClick={next}
                  disabled={currentIndex === testimonials.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Satisfy;