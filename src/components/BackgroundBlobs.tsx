"use client";

export default function BackgroundBlobs() {
  return (
    <div className="fixed -z-10 inset-0 w-screen h-screen pointer-events-none">
      {/* Light Mode Mesh Gradient */}
      <svg
        className="fixed inset-0 w-screen h-screen dark:hidden"
        width="100vw"
        height="100vh"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ objectFit: "cover" }}
      >
        <defs>
          <radialGradient id="mesh1" cx="20%" cy="20%" r="60%" fx="20%" fy="20%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mesh2" cx="80%" cy="30%" r="60%" fx="80%" fy="30%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" stopOpacity="0.6" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mesh3" cx="50%" cy="80%" r="60%" fx="50%" fy="80%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f472b6" stopOpacity="0.5" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="#f8fafc" />
        <circle cx="350" cy="200" r="400" fill="url(#mesh1)" />
        <circle cx="1200" cy="300" r="400" fill="url(#mesh2)" />
        <circle cx="800" cy="800" r="400" fill="url(#mesh3)" />
      </svg>
      {/* Dark Mode Mesh Gradient */}
      <svg
        className="fixed inset-0 w-screen h-screen hidden dark:block"
        width="100vw"
        height="100vh"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ objectFit: "cover" }}
      >
        <defs>
          <radialGradient id="dmesh1" cx="20%" cy="20%" r="60%" fx="20%" fy="20%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312e81" stopOpacity="0.7" />
            <stop offset="1" stopColor="#18181b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dmesh2" cx="80%" cy="30%" r="60%" fx="80%" fy="30%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="1" stopColor="#18181b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dmesh3" cx="50%" cy="80%" r="60%" fx="50%" fy="80%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#db2777" stopOpacity="0.5" />
            <stop offset="1" stopColor="#18181b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="#18181b" />
        <circle cx="350" cy="200" r="400" fill="url(#dmesh1)" />
        <circle cx="1200" cy="300" r="400" fill="url(#dmesh2)" />
        <circle cx="800" cy="800" r="400" fill="url(#dmesh3)" />
      </svg>
      {/* Noise Overlay */}
      <div className="fixed inset-0 w-screen h-screen" style={{
        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.08\'/></svg>')",
        opacity: 0.25,
        pointerEvents: "none",
        mixBlendMode: "overlay"
      }} />
    </div>
  );
} 