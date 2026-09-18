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
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: "#ffffff",
        color: "#17191c",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, color: "#5f6771", letterSpacing: 1 }}>
        lehung.dev
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 86, fontWeight: 700, letterSpacing: -3 }}>
          Le Xuan Hung
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 34, color: "#5f6771" }}>
          Bridge structural engineer and engineering software developer
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #e4e6ea",
          paddingTop: 28,
          fontSize: 22,
          color: "#5f6771",
        }}
      >
        <span>Selected work</span>
        <span>Seoul, South Korea</span>
      </div>
    </div>,
    size,
  );
}
