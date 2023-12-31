import './globals.css';
import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Stefanos Michelakis',
  description: 'Stefanos Michelakis ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <ToastContainer position="top-center" hideProgressBar />
      </body>
    </html>
  );
}
