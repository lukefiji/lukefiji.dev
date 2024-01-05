'use client';

import { cn } from '@/lib/utils';
import { useAnimate, motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
  size?: number;
}

const Spotlight = ({ size = 1024 }: Props) => {
  const [scope, animate] = useAnimate();

  const lightX = useMotionValue(0);
  const lightY = useMotionValue(0);
  const opacity = useMotionValue(0);
  // const isVisible = useRef<boolean>(false);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      lightX.set(event.clientX - size / 2);
      lightY.set(event.clientY - size / 2);

      animate(scope.current, { opacity: 1 }, { duration: 0.25 });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  return (
    <motion.div
      ref={scope}
      className={cn([
        'fixed',
        'pointer-events-none',
        'mix-blend-plus-lighter',
        'blur-lg',
        'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]',
        'from-slate-900',
        'to-transparent to-65%',
      ])}
      style={{
        height: size,
        width: size,
        x: lightX,
        y: lightY,
        opacity: opacity,
      }}
    />
  );
};

export default Spotlight;
