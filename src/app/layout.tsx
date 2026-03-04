import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import { PWAInstallPrompt } from '@/components/pwa/PWAInstallPrompt';
import { PermissionManager } from '@/components/permissions/PermissionManager';

export const metadata: Metadata = {
  title: 'ONGON BANGLADESH - সাহায্যের মাধ্যমে হৃদয় সংযোগ',
  description: "ONGON BANGLADESH - a sister concern of PRANGON'S ECOSYSTEM. একটি প্ল্যাটফর্ম যেখানে সাহায্যের জন্য আবেদন করা যায় এবং সাহায্য প্রদান করা যায়।",
  manifest: '/manifest.json',
  themeColor: '#7a1013',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ONGON BD',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <PWAInstallPrompt />
        <PermissionManager />
        <Toaster />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }, function(err) {
                    console.log('SW registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}