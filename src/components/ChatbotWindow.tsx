"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@mantine/core';

interface ChatbotWindowProps {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  scrollbarSize?: number;
  borderRadius?: string;
  boxShadow?: string;
  p?: string; // Padding shorthand
  pt?: string; // Padding top
  pb?: string; // Padding bottom
  pl?: string; // Padding left
  pr?: string; // Padding right
  px?: string; // Padding horizontal
  py?: string; // Padding vertical
  m?: string;  // Margin shorthand
  mt?: string; // Margin top
  mb?: string; // Margin bottom
  ml?: string; // Margin left
  mr?: string; // Margin right
  mx?: string; // Margin horizontal
  my?: string; // Margin vertical
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const ChatbotWindow: React.FC<ChatbotWindowProps> = ({
  width = '100%',
  height = '70vh',
  backgroundColor = '#fff',
  scrollbarSize = 4,
  borderRadius = '10px',
  boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)',
  p, pt, pb, pl, pr, px, py,
  m, mt, mb, ml, mr, mx, my,
  style = {},
  children,
}) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Function to check if the user is at the bottom
  const isUserAtBottom = () => {
    const scrollArea = scrollAreaRef.current;
    if (!scrollArea) return false;

    const threshold = 50; // Pixels from the bottom to consider as "at bottom"
    const position = scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop;
    return position <= threshold;
  };

  // Handle user scroll to enable/disable auto-scrolling
  const handleScroll = () => {
    setAutoScrollEnabled(isUserAtBottom());
  };

  // Use MutationObserver to detect content changes in the scroll area
  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    if (!scrollArea) return;

    const observer = new MutationObserver(() => {
      if (autoScrollEnabled) {
        setTimeout(() => {
          scrollArea.scrollTo({
            top: scrollArea.scrollHeight,
            behavior: 'smooth',
          });
        }, 200); // Delay of 1.5s before auto-scrolling
      }
    });

    observer.observe(scrollArea, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [autoScrollEnabled]);

  const padding = {
    padding: p,
    paddingTop: pt || py,
    paddingBottom: pb || py,
    paddingLeft: pl || px,
    paddingRight: pr || px,
  };

  const margin = {
    margin: m,
    marginTop: mt || my,
    marginBottom: mb || my,
    marginLeft: ml || mx,
    marginRight: mr || mx,
  };

  return (
    <ScrollArea
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        boxShadow,
        ...padding,
        ...margin,
        ...style,
      }}
      scrollbarSize={scrollbarSize}
      viewportRef={scrollAreaRef} // Ref to manage the scroll area
      onScrollPositionChange={handleScroll} // Track user scrolling
    >
      {children}
    </ScrollArea>
  );
};

export default ChatbotWindow;
