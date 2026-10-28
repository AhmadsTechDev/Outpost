import { clerkMiddleware } from '@clerk/nextjs/server';

// Jalankan Clerk middleware di setiap request yang lolos matcher di bawah.
// Clerk middleware menangani: verifikasi session token, redirect ke sign-in jika belum auth,
// dan inject data user ke request agar bisa dipakai di Server Components / Route Handlers.
export default clerkMiddleware();

export const config = {
  matcher: [
    // Jalankan di semua route KECUALI: asset Next.js (_next) dan file statis
    // (gambar, font, css, js, dll.) — supaya request asset tidak kena overhead auth.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Selalu jalankan di path internal Clerk (auto-proxy untuk domain kustom).
    '/__clerk/:path*',
    // Selalu jalankan di API routes agar endpoint backend juga terlindungi.
    '/(api|trpc)(.*)',
  ],
};