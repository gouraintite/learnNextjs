import '@/app/ui/global.css'
import {urbanist} from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`} >{children}</body>
    </html>
  );
}
