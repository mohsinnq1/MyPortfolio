import { useEffect } from 'react';
import './BubblesBackground.css';

function BubblesBackground() {
  useEffect(() => {
    const container = document.getElementById('bubbles-container');

    const createBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * 40 + 10 + 'px';
      bubble.classList.add('bubble');
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + 'vw';
      bubble.style.animationDuration = Math.random() * 10 + 5 + 's';
      container.appendChild(bubble);

      setTimeout(() => bubble.remove(), 15000);
    };

    const interval = setInterval(createBubble, 500);
    return () => clearInterval(interval);
  }, []);

  return <div id="bubbles-container"></div>;
}

export default BubblesBackground;
