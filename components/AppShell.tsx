"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import SiteHeader from './SiteHeader';

const AppShell = ({children} : {children: React.ReactNode}) => {
  
   const pathname = usePathname();
  //  if /workspace/*, then render children only (full screen mode) but if not, render header and children (normal mode)
   const isFullScreenRoute = pathname?.startsWith("/workspace/") || pathname?.startsWith("/workspace");

   if (isFullScreenRoute) {
     return <>{children}</>
   }

  return (
    <>
       <SiteHeader/>
       <div className="flex flex-1 flex-col pt-18">{children}</div> 
    </>
  )
}

export default AppShell
