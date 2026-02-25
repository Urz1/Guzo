interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

const GOLD = "hsl(36, 80%, 50%)";

const Logo = ({ variant = "full", className = "" }: LogoProps) => {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="GUZO"
      >
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke={GOLD}
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle
          cx="24"
          cy="24"
          r="17"
          stroke={GOLD}
          strokeWidth="0.5"
          opacity="0.15"
        />
        <text
          x="24"
          y="33"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="26"
          fontWeight="700"
          fill={GOLD}
        >
          ጉ
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="GUZO ጉዞ"
    >
      {/* Primary wordmark */}
      <text
        x="0"
        y="32"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="7"
        fill="currentColor"
      >
        GUZO
      </text>

      {/* Amharic ጉ ghost echo behind/below the G */}
      <text
        x="2"
        y="40"
        fontFamily="serif"
        fontSize="22"
        fontWeight="400"
        fill={GOLD}
        opacity="0.18"
      >
        ጉ
      </text>

      {/* Gold accent connector — thin line bridging the two scripts */}
      <rect x="0" y="39" width="52" height="1" rx="0.5" fill={GOLD} opacity="0.5" />
      <rect x="148" y="39" width="32" height="1" rx="0.5" fill={GOLD} opacity="0.3" />

      {/* Gold diamond separator */}
      <rect
        x="155"
        y="24"
        width="5"
        height="5"
        rx="0.5"
        fill={GOLD}
        opacity="0.6"
        transform="rotate(45 157.5 26.5)"
      />

      {/* Amharic integrated text */}
      <text
        x="170"
        y="32"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="22"
        fontWeight="400"
        fill={GOLD}
        opacity="0.85"
      >
        ጉዞ
      </text>

      {/* Subtle underline connecting the full mark */}
      <line
        x1="0"
        y1="46"
        x2="220"
        y2="46"
        stroke={GOLD}
        strokeWidth="0.5"
        opacity="0.12"
      />
    </svg>
  );
};

export default Logo;
