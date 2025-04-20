'use client';

import React, { useEffect, useRef } from "react";

interface Circle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<Circle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize circles if not already done
      if (!initializedRef.current) {
        initCircles();
        initializedRef.current = true;
      }
    };

    // Initialize the circles with positions and velocities
    const initCircles = () => {
      const circleCount = Math.floor(canvas.width * canvas.height / 100000);
      const circles: Circle[] = [];
      
      for (let i = 0; i < circleCount; i++) {
        circles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 80 + 60,
          vx: (Math.random() - 0.5) * 0.3, // x velocity
          vy: (Math.random() - 0.5) * 0.3  // y velocity
        });
      }
      
      circlesRef.current = circles;
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(249, 250, 251, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw circles
      const circles = circlesRef.current;
      ctx.fillStyle = 'rgba(129, 140, 248, 0.1)';
      
      circles.forEach(circle => {
        // Move the circle
        circle.x += circle.vx;
        circle.y += circle.vy;
        
        // Wrap around edges
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;
        
        // Draw the circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw grid pattern - more prominent
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
      ctx.lineWidth = 1;

      // Grid pattern
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add some dots at intersections - more pronounced
      ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Add some circuit-like patterns
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
      ctx.lineWidth = 2;
      
      // Draw random horizontal and vertical "circuit" lines
      const lineCount = Math.floor(canvas.width * canvas.height / 300000);
      
      for (let i = 0; i < lineCount; i++) {
        // Starting point on grid
        const startX = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        const startY = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        
        // How many grid cells to span (1-4)
        const horizontalSpan = Math.floor(Math.random() * 4) + 1;
        const verticalSpan = Math.floor(Math.random() * 4) + 1;
        
        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + horizontalSpan * gridSize, startY);
        ctx.stroke();
        
        // Circle at the end
        ctx.fillStyle = 'rgba(129, 140, 248, 0.2)';
        ctx.beginPath();
        ctx.arc(startX + horizontalSpan * gridSize, startY, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Vertical line from a different starting point
        const startX2 = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        const startY2 = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        
        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        ctx.lineTo(startX2, startY2 + verticalSpan * gridSize);
        ctx.stroke();
        
        // Circle at the end
        ctx.fillStyle = 'rgba(129, 140, 248, 0.2)';
        ctx.beginPath();
        ctx.arc(startX2, startY2 + verticalSpan * gridSize, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add a few larger circuit components
      const componentCount = Math.floor(canvas.width * canvas.height / 500000);
      
      for (let i = 0; i < componentCount; i++) {
        const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        const size = Math.floor(Math.random() * 3 + 2) * gridSize;
        
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
        ctx.lineWidth = 2;
        
        // Draw a circuit component (square or rectangle)
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.stroke();
        
        // Add some detail
        if (Math.random() > 0.5) {
          ctx.beginPath();
          ctx.arc(x + size/2, y + size/2, size/4, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      
      // Request next frame
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{position: 'absolute', top: 0, left: 0}}
      />
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-100/15 rounded-full blur-3xl"></div>
    </div>
  );
} 