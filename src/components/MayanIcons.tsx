// Mayan-inspired geometric pattern icons
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

// Icon 1: Stepped pyramid pattern
export const MayanPyramid = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 3 L18 9 L15 9 L15 12 L18 12 L18 15 L21 15 L21 21 L3 21 L3 15 L6 15 L6 12 L9 12 L9 9 L6 9 Z" />
  </svg>
);

// Icon 2: Diamond with center cross
export const MayanDiamond = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 3 L21 12 L12 21 L3 12 Z" />
    <line x1="12" y1="7" x2="12" y2="17" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// Icon 3: Stepped diamond (chevron pattern)
export const MayanChevron = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 3 L19 10 L16 10 L12 6 L8 10 L5 10 Z" />
    <path d="M12 9 L17 14 L14 14 L12 12 L10 14 L7 14 Z" />
    <path d="M12 15 L15 18 L12 18 L12 21 L12 18 L9 18 Z" />
  </svg>
);

// Icon 4: Cross with diamond corners
export const MayanCross = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="10" y="3" width="4" height="18" />
    <rect x="3" y="10" width="18" height="4" />
    <path d="M8 8 L10 10 L8 10 Z" />
    <path d="M16 8 L14 10 L16 10 Z" />
    <path d="M8 16 L10 14 L8 14 Z" />
    <path d="M16 16 L14 14 L16 14 Z" />
  </svg>
);

// Icon 5: Concentric diamond pattern
export const MayanConcentric = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 3 L21 12 L12 21 L3 12 Z" />
    <path d="M12 6 L18 12 L12 18 L6 12 Z" />
    <path d="M12 9 L15 12 L12 15 L9 12 Z" />
  </svg>
);

// Icon 6: Zigzag stepped pattern
export const MayanSteps = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 8 L8 8 L8 5 L13 5 L13 8 L16 8 L16 5 L21 5" />
    <path d="M3 12 L8 12 L8 10 L13 10 L13 12 L16 12 L16 10 L21 10" />
    <path d="M3 16 L8 16 L8 14 L13 14 L13 16 L16 16 L16 14 L21 14" />
    <path d="M3 20 L8 20 L8 18 L13 18 L13 20 L16 20 L16 18 L21 18" />
  </svg>
);

// Icon 7: Sun symbol with rays
export const MayanSun = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2 L12 6" />
    <path d="M12 18 L12 22" />
    <path d="M22 12 L18 12" />
    <path d="M6 12 L2 12" />
    <path d="M18.4 5.6 L15.5 8.5" />
    <path d="M8.5 15.5 L5.6 18.4" />
    <path d="M18.4 18.4 L15.5 15.5" />
    <path d="M8.5 8.5 L5.6 5.6" />
  </svg>
);

// Icon 8: Geometric bird (condor/eagle)
export const MayanBird = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 8 L8 12 L4 10 L8 14 L12 18 L16 14 L20 10 L16 12 Z" />
    <circle cx="12" cy="8" r="2" />
    <path d="M8 12 L6 14" />
    <path d="M16 12 L18 14" />
  </svg>
);
