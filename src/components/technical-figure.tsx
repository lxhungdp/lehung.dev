type FigureVariant = "segmental" | "cable" | "box" | "cantilever" | "alignment";

export function TechnicalFigure({
  variant = "segmental",
  compact = false,
}: {
  variant?: FigureVariant;
  compact?: boolean;
}) {
  const isCable = variant === "cable";
  const isAlignment = variant === "alignment";

  return (
    <div className={`technical-figure ${compact ? "technical-figure--compact" : ""}`}>
      <div className="technical-figure__label" aria-hidden="true">
        {isAlignment ? "GEOMETRY STUDY" : isCable ? "CABLE SYSTEM" : "BRIDGE ELEVATION"}
        <span> / SCHEMATIC</span>
      </div>
      <svg
        viewBox="0 0 720 420"
        role="img"
        aria-label={
          isAlignment
            ? "Schematic bridge alignment diagram"
            : isCable
              ? "Schematic cable-stayed bridge elevation"
              : "Schematic bridge elevation"
        }
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id={`grid-${variant}-${compact ? "small" : "large"}`} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#d7e1e5" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="720" height="420" fill="#eef3f5" />
        <rect width="720" height="420" fill={`url(#grid-${variant}-${compact ? "small" : "large"})`} />
        {isAlignment ? (
          <>
            <path d="M72 310C160 290 172 115 290 134S450 357 644 111" fill="none" stroke="#496f7e" strokeWidth="13" strokeLinecap="round" />
            <path d="M72 310C160 290 172 115 290 134S450 357 644 111" fill="none" stroke="#f5f8f9" strokeWidth="2" strokeDasharray="9 8" />
            <path d="M70 310H645M290 134V310M502 244V310" fill="none" stroke="#92a8b1" strokeWidth="1.5" strokeDasharray="5 6" />
            <g fill="#205b70"><circle cx="72" cy="310" r="5" /><circle cx="290" cy="134" r="5" /><circle cx="502" cy="244" r="5" /><circle cx="644" cy="111" r="5" /></g>
            <g fill="#526e7b" fontFamily="monospace" fontSize="13"><text x="77" y="334">START</text><text x="290" y="121">CONTROL POINT</text><text x="528" y="238">ALIGNMENT</text></g>
          </>
        ) : (
          <>
            <path d="M48 309H674" fill="none" stroke="#a5b9c1" strokeWidth="1.5" />
            <path d="M54 245H666" fill="none" stroke="#4f7180" strokeWidth="8" />
            <path d="M54 257C165 272 264 276 360 276s195-4 306-19" fill="none" stroke="#2f6478" strokeWidth="3" />
            {isCable ? (
              <>
                <path d="M346 245V72H374V245" fill="#aec3cc" stroke="#557887" strokeWidth="2" />
                <path d="M360 76L90 245M360 76L165 245M360 76L248 245M360 76L472 245M360 76L555 245M360 76L630 245" fill="none" stroke="#557887" strokeWidth="2" />
                <path d="M356 279V314H364V279" fill="#8ba8b4" />
              </>
            ) : (
              <>
                <path d="M137 268V308M351 276V308M567 268V308" fill="none" stroke="#829eaa" strokeWidth="18" />
                <path d="M108 309h58M322 309h58M538 309h58" fill="none" stroke="#829eaa" strokeWidth="8" />
                {variant === "cantilever" && <path d="M240 262L351 276L462 262" fill="none" stroke="#2783a0" strokeWidth="4" />}
                {variant === "box" && <path d="M87 246v24h544v-24" fill="none" stroke="#7c9ca9" strokeWidth="2" />}
              </>
            )}
            <path d="M54 222V91M666 222V91M54 105H666" fill="none" stroke="#9eb3bc" strokeWidth="1.5" />
            <path d="m54 105 9-5m-9 5 9 5m603-5-9-5m9 5-9 5" fill="none" stroke="#9eb3bc" strokeWidth="1.5" />
            <g fill="#526e7b" fontFamily="monospace" fontSize="13"><text x="60" y="332">A</text><text x="647" y="332">A</text></g>
          </>
        )}
      </svg>
      {!compact && <p className="technical-figure__caption">Conceptual diagram · not a project drawing</p>}
    </div>
  );
}
