/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function LogoPemkabNagekeo({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Lambang Daerah Kabupaten Nagekeo"
    >
      <title>Lambang Pemerintah Kabupaten Nagekeo</title>
      {/* Outer Pentagon Crest */}
      <polygon
        points="50,5 93,24 82,88 50,97 18,88 7,24"
        fill="#0F284E"
        stroke="#F59E0B"
        strokeWidth="3"
      />
      {/* Inner Shield */}
      <polygon
        points="50,11 87,28 78,83 50,91 22,83 13,28"
        fill="#1E3E62"
      />
      {/* Mount Ebulobo Stylized Silhouette */}
      <polygon
        points="50,28 76,68 24,68"
        fill="#047857"
        opacity="0.9"
      />
      <polygon
        points="50,28 58,68 42,68"
        fill="#10B981"
        opacity="0.8"
      />
      {/* Golden Star at Apex */}
      <path
        d="M50,14 L52,19 L57,19 L53,22 L54,27 L50,24 L46,27 L47,22 L43,19 L48,19 Z"
        fill="#FBBF24"
      />
      {/* Golden Rice and Cotton Wreath */}
      <path
        d="M26,76 C20,60 20,44 30,34"
        stroke="#F59E0B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M74,76 C80,60 80,44 70,34"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Traditional Nagekeo House / Sasandu Stylized Motif */}
      <path
        d="M34,68 L50,52 L66,68 Z"
        fill="#D97706"
      />
      {/* Blue Waves of Flores Sea */}
      <path
        d="M30,73 Q40,69 50,73 T70,73"
        stroke="#38BDF8"
        strokeWidth="2"
        fill="none"
      />
      {/* Ribbon Banner */}
      <path
        d="M22,81 L50,77 L78,81 L74,86 L50,83 L26,86 Z"
        fill="#F1F5F9"
        stroke="#0F284E"
        strokeWidth="1"
      />
      <text
        x="50"
        y="83"
        fontSize="5"
        fontWeight="bold"
        fill="#0F172A"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        NAGEKEO
      </text>
    </svg>
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
