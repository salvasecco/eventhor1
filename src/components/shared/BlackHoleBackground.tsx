import { useEffect, useRef } from 'react';
import blackHoleImage from '@/assets/black-hole.png';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulsePhase: number;
  distanceToCenter: number;
  absorbed: boolean;
}

export function BlackHoleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Centro del agujero negro (centro de la pantalla)
    const blackHoleCenter = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };

    // Crear partículas que representan luz siendo absorbida
    const createParticles = () => {
      const particles: Particle[] = [];
      const colors = [
        '#8b5cf6', // Purple
        '#a855f7', // Violet  
        '#c084fc', // Light purple
        '#e879f9', // Pink
        '#f97316', // Orange (hot gas)
        '#eab308', // Yellow (energy)
        '#06b6d4', // Cyan (high energy)
        '#ffffff'  // White (pure light)
      ];
      
      for (let i = 0; i < 80; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * Math.max(canvas.width, canvas.height) * 0.8 + 300;
        const x = blackHoleCenter.x + Math.cos(angle) * distance;
        const y = blackHoleCenter.y + Math.sin(angle) * distance;
        
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulsePhase: Math.random() * Math.PI * 2,
          distanceToCenter: distance,
          absorbed: false
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Función de animación
    const animate = () => {
      timeRef.current += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar centro del agujero negro
      blackHoleCenter.x = canvas.width / 2;
      blackHoleCenter.y = canvas.height / 2;

      // Crear efecto de distorsión del espacio-tiempo
      const createSpacetimeDistortion = () => {
        const rings = 5;
        for (let i = 0; i < rings; i++) {
          const radius = 100 + i * 60 + Math.sin(timeRef.current + i) * 20;
          const gradient = ctx.createRadialGradient(
            blackHoleCenter.x, blackHoleCenter.y, radius * 0.8,
            blackHoleCenter.x, blackHoleCenter.y, radius
          );
          gradient.addColorStop(0, `rgba(139, 92, 246, ${0.05 + Math.sin(timeRef.current + i) * 0.02})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.save();
          ctx.globalCompositeOperation = 'screen';
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(blackHoleCenter.x, blackHoleCenter.y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      };

      createSpacetimeDistortion();

      // Actualizar y dibujar partículas
      particlesRef.current.forEach((particle, index) => {
        // Calcular distancia al centro del agujero negro
        const dx = blackHoleCenter.x - particle.x;
        const dy = blackHoleCenter.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        particle.distanceToCenter = distance;

        // Fuerza gravitacional (más fuerte cerca del agujero negro)
        const gravityStrength = Math.min(8000 / (distance * distance + 100), 2);
        const gravityX = (dx / distance) * gravityStrength;
        const gravityY = (dy / distance) * gravityStrength;

        // Aplicar fuerza gravitacional
        particle.vx += gravityX * 0.02;
        particle.vy += gravityY * 0.02;

        // Efecto de rotación orbital (más pronunciado cerca del agujero negro)
        const orbitalForce = Math.min(300 / distance, 0.5);
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle + Math.PI / 2) * orbitalForce * 0.01;
        particle.vy += Math.sin(angle + Math.PI / 2) * orbitalForce * 0.01;

        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Efecto de absorción: las partículas se desvanecen al acercarse
        if (distance < 150) {
          particle.opacity *= 0.95;
          particle.size *= 0.98;
          if (particle.opacity < 0.01) {
            particle.absorbed = true;
          }
        }

        // Regenerar partículas absorbidas en los bordes
        if (particle.absorbed || particle.x < -100 || particle.x > canvas.width + 100 || 
            particle.y < -100 || particle.y > canvas.height + 100) {
          const angle = Math.random() * Math.PI * 2;
          const spawnDistance = Math.max(canvas.width, canvas.height) * 0.7;
          particle.x = blackHoleCenter.x + Math.cos(angle) * spawnDistance;
          particle.y = blackHoleCenter.y + Math.sin(angle) * spawnDistance;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = (Math.random() - 0.5) * 2;
          particle.opacity = Math.random() * 0.8 + 0.2;
          particle.size = Math.random() * 4 + 1;
          particle.absorbed = false;
        }

        // Actualizar efecto de pulso
        particle.pulsePhase += 0.1;
        const pulseIntensity = 1 + Math.sin(particle.pulsePhase) * 0.3;

        // Dibujar partícula con efecto de estiramiento gravitacional
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Glow exterior más intenso
        const glowSize = particle.size * 6 * pulseIntensity;
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        glowGradient.addColorStop(0, particle.color);
        glowGradient.addColorStop(0.3, `${particle.color}80`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Estiramiento gravitacional (efecto espagueti)
        if (distance < 300) {
          const stretchFactor = Math.max(1, (300 - distance) / 100);
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(Math.atan2(dy, dx));
          ctx.scale(stretchFactor * 1.5, 1 / stretchFactor);
          ctx.translate(-particle.x, -particle.y);
        }

        // Partícula central
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulseIntensity, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        if (distance < 300) ctx.restore();

        // Trazas de luz (photon trails)
        if (distance < 400 && particle.opacity > 0.3) {
          ctx.save();
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 5;
          ctx.shadowColor = particle.color;
          
          const trailLength = Math.min(20, 400 - distance);
          const prevX = particle.x - particle.vx * trailLength;
          const prevY = particle.y - particle.vy * trailLength;
          
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(particle.x, particle.y);
          ctx.stroke();
          ctx.restore();
        }
      });

      // Efecto de lente gravitacional
      const lensGradient = ctx.createRadialGradient(
        blackHoleCenter.x, blackHoleCenter.y, 80,
        blackHoleCenter.x, blackHoleCenter.y, 200
      );
      lensGradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
      lensGradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
      lensGradient.addColorStop(1, 'transparent');
      
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = lensGradient;
      ctx.beginPath();
      ctx.arc(blackHoleCenter.x, blackHoleCenter.y, 200 + Math.sin(timeRef.current * 2) * 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Imagen estática del agujero negro como base - SIN ROTACIÓN */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-95"
        style={{ 
          backgroundImage: `url(${blackHoleImage}?v=${Date.now()})`,
          filter: 'brightness(1.0) contrast(1.1) saturate(1.2)',
        }}
      />
      

      
      {/* Canvas dinámico para partículas y efectos */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Gradiente overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/25" />
    </div>
  );
}
