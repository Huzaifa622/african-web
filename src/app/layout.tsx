"use client"
import "./globals.css";

import {Toaster} from 'react-hot-toast'
import {Raleway} from "next/font/google"
const raleway = Raleway({weight:"400" , subsets:["latin" , "cyrillic"]})
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased overflow-x-hidden`} suppressHydrationWarning={true}
      >
         <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
