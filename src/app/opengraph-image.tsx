import { ImageResponse } from "next/og";

export const alt = "Le Xuan Hung — Bridge Engineer and Engineering Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f8fafb",
        color: "#1b2b35",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "48px 64px 0",
          paddingBottom: 18,
          borderBottom: "1px solid #cbd9df",
          color: "#426272",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        <span>LEHUNG.DEV</span>
        <span>ENGINEERING / SOFTWARE</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", margin: "54px 64px 0" }}>
        <div style={{ display: "flex", color: "#1d637a", fontSize: 21, letterSpacing: 2 }}>
          PORTFOLIO · BRIDGE STRUCTURES &amp; COMPUTATIONAL TOOLS
        </div>
        <div style={{ display: "flex", marginTop: 21, fontSize: 74, fontWeight: 700, letterSpacing: -3 }}>
          Le Xuan Hung<span style={{ color: "#1d637a" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 8, fontSize: 29, color: "#405462" }}>
          Bridge Engineer &amp; Engineering Software Developer
        </div>
      </div>

      <div style={{ display: "flex", position: "absolute", left: 64, right: 64, bottom: 64, height: 142 }}>
        <svg width="1072" height="142" viewBox="0 0 1072 142" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 131H1072" stroke="#a8bec8" strokeWidth="1" />
          <path d="M0 80H1072M0 88H1072" stroke="#2b6c83" strokeWidth="3" />
          <path d="M86 89V131M536 89V131M986 89V131" stroke="#668997" strokeWidth="5" />
          <path d="M86 80C264 -2 358 -2 536 80C714 -2 808 -2 986 80" stroke="#2b6c83" strokeWidth="2" />
          <path d="M176 53V80M266 26V80M356 26V80M446 53V80M626 53V80M716 26V80M806 26V80M896 53V80" stroke="#9ab6c1" strokeWidth="1" />
          <path d="M0 109H1072" stroke="#d8e2e7" strokeWidth="1" strokeDasharray="4 7" />
          <circle cx="86" cy="80" r="4" fill="#1d637a" /><circle cx="536" cy="80" r="4" fill="#1d637a" /><circle cx="986" cy="80" r="4" fill="#1d637a" />
        </svg>
      </div>
      <div style={{ display: "flex", position: "absolute", left: 64, bottom: 25, fontSize: 15, color: "#637682", letterSpacing: 1 }}>
        SELECTED PROJECTS · RESEARCH · ENGINEERING TOOLS
      </div>
    </div>,
    size,
  );
}
