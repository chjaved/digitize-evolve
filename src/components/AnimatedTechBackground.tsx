import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const AnimatedTechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 80;
    const maxDistance = 150;

    // Get primary color from CSS variable
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary')
      .trim();
    const primaryHSL = `hsl(${primaryColor})`;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = primaryHSL;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = primaryHSL;
            ctx.globalAlpha = (1 - distance / maxDistance) * 0.3;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;

      // Draw floating geometric shapes
      const time = Date.now() * 0.001;
      
      // Hexagon
      ctx.save();
      ctx.translate(canvas.width * 0.2, canvas.height * 0.3);
      ctx.rotate(time * 0.2);
      ctx.strokeStyle = primaryHSL;
      ctx.globalAlpha = 0.15;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = Math.cos(angle) * 50;
        const y = Math.sin(angle) * 50;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Circle
      ctx.save();
      ctx.translate(canvas.width * 0.8, canvas.height * 0.7);
      ctx.rotate(time * 0.3);
      ctx.strokeStyle = primaryHSL;
      ctx.globalAlpha = 0.15;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 50, 0, Math.PI * 1.5);
      ctx.stroke();
      ctx.restore();

      // Triangle
      ctx.save();
      ctx.translate(canvas.width * 0.7, canvas.height * 0.2);
      ctx.rotate(time * 0.15);
      ctx.strokeStyle = primaryHSL;
      ctx.globalAlpha = 0.15;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -40);
      ctx.lineTo(35, 20);
      ctx.lineTo(-35, 20);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AnimatedTechBackground;
