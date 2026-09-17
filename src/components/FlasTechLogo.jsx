'use client';

import React from 'react';

/**
 * FlasTechLogo
 * Recreates the exact brand logo from image424822.jpeg / IMG_4822.JPG.jpeg
 * Features the bold "FLÁS" typography with the iconic diagonal lightning bolt
 * through the 'Á' and "TECH" tracked cleanly underneath.
 *
 * @param {string} variant - 'light' (white), 'dark' (black), 'gradient' (aurora gradient fill)
 * @param {number} width - width in px
 * @param {number} height - height in px
 * @param {string} className - extra CSS classes
 */
export default function FlasTechLogo({
  variant = 'light',
  className = '',
  height = 36,
  showText = true,
}) {
  const gradientId = 'flastech-aurora-gradient';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 420 280"
        height={height}
        className="w-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="FLAS TECH logo"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="30%" stopColor="#FBCFE8" />
            <stop offset="70%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#A7F3D0" />
          </linearGradient>
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Group */}
        <g
          fill={
            variant === 'dark'
              ? '#0A0A0A'
              : variant === 'gradient'
              ? `url(#${gradientId})`
              : '#FFFFFF'
          }
        >
          {/* F */}
          <path d="M 20 60 H 96 V 88 H 52 V 118 H 90 V 144 H 52 V 200 H 20 Z" />

          {/* L */}
          <path d="M 112 60 H 144 V 172 H 192 V 200 H 112 Z" />

          {/* Á with lightning bolt cut:
              Top lightning spike shoots up & right forming the accent!
              Bottom lightning spike shoots down & left!
          */}
          {/* Top Bolt (Upper-Right Spike) */}
          <polygon points="262,2 342,2 262,76 216,76" />

          {/* Bottom Bolt (Lower-Left Spike) */}
          <polygon points="204,204 252,204 172,278 98,278" />

          {/* Letter 'A' Left Stem */}
          <path d="M 216 80 L 176 200 H 208 L 222 152 H 242 L 230 114 Z" />

          {/* Letter 'A' Right Stem & Peak */}
          <path d="M 252 80 L 292 200 H 260 L 252 172 H 240 L 248 142 Z" />

          {/* S */}
          <path d="M 312 84 C 312 68 326 58 348 58 C 372 58 388 70 388 88 H 356 C 356 82 352 78 348 78 C 342 78 340 80 340 84 C 340 90 344 92 356 96 L 368 100 C 386 106 392 116 392 130 C 392 148 376 160 350 160 C 324 160 308 146 308 128 H 340 C 340 134 344 138 350 138 C 356 138 360 136 360 130 C 360 124 354 122 342 118 L 330 114 C 316 108 312 98 312 84 Z" />

          {/* TECH - tracked cleanly below the right half */}
          <text
            x="392"
            y="238"
            textAnchor="end"
            fontFamily="'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="38"
            letterSpacing="0.22em"
          >
            TECH
          </text>
        </g>
      </svg>
    </div>
  );
}
