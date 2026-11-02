/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function LogoPemkabNagekeo({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <img
      src="/assets/aistudio/WhatsApp_Image_2026-10-05_at_19.48.52_84649d89.jpeg"
      alt="Lambang Daerah Pemerintah Kabupaten Nagekeo"
      className={`${className} object-contain`}
      loading="eager"
    />
  );
}

export function LogoEmolo({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo E-MOLO UKPBJ"
    >
      <title>Logo E-MOLO</title>
      {/* Circular Emblem Base */}
      <circle cx="50" cy="50" r="46" fill="#0B192C" stroke="#10B981" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="41" fill="#1E3E62" />

      {/* Modern Dialogue Chat Bubbles Interlocking */}
      {/* First Chat Bubble (Emerald) */}
      <path
        d="M27,33 C27,27 33,22 42,22 L58,22 C67,22 73,27 73,33 L73,43 C73,49 67,54 58,54 L44,54 L33,63 L35,54 C30,53 27,48 27,43 Z"
        fill="#059669"
        opacity="0.95"
      />

      {/* Internal Procurement Scale / Handshake Icon */}
      <path
        d="M50,28 L50,42 M41,34 L59,34"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="41" cy="39" r="3.5" fill="#FBBF24" />
      <circle cx="59" cy="39" r="3.5" fill="#FBBF24" />

      {/* Small Front Chat Bubble with Network Nodes (Gold) */}
      <path
        d="M48,50 C48,46 52,43 58,43 L69,43 C75,43 79,46 79,50 L79,57 C79,61 75,64 69,64 L65,64 L60,69 L61,64 C53,64 48,60 48,57 Z"
        fill="#D97706"
      />
      
      {/* Signal / Connection Waves */}
      <path
        d="M42,75 Q50,71 58,75"
        stroke="#38BDF8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M35,80 Q50,74 65,80"
        stroke="#FBBF24"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Subtle E-MOLO initials in tiny gold font */}
      <text
        x="50"
        y="90"
        fontSize="5.5"
        fontWeight="800"
        fill="#E2E8F0"
        textAnchor="middle"
        letterSpacing="1"
      >
        E-MOLO
      </text>
    </svg>
  );
}
