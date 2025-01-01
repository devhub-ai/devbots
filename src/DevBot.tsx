import React, { useEffect, useRef } from 'react';

interface DevBotProps {
  apiKey: string;
  title: string;
}

declare global {
  interface Window {
    DevBot: new (apiKey: string, title: string) => void;
  }
}

export function DevBot({ apiKey, title }: DevBotProps) {
  const devBotRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/devhub-ai/cdns@master/devbot-chatbot.js';
    script.async = true;
    script.crossOrigin = 'anonymous'; 
    
    script.onerror = (error) => {
      console.error('Error loading DevBot script:', error);
    };

    script.onload = () => {
      try {
        if (window.DevBot) {
          devBotRef.current = new window.DevBot(apiKey, title);
        } else {
          console.error('DevBot not found in window object');
        }
      } catch (error) {
        console.error('Error initializing DevBot:', error);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (devBotRef.current) {
        devBotRef.current = null;
      }
    };
  }, [apiKey, title]);

  return null;
}

