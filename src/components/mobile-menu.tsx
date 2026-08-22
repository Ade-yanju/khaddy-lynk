"use client";
import Link from "next/link";
import { useState } from "react";
type NavItem=readonly [string,string];
export function MobileMenu({nav}:{nav:readonly NavItem[]}){const [open,setOpen]=useState(false);return <div className="lg:hidden"><button onClick={()=>setOpen(value=>!value)} className="rounded p-2 text-2xl" aria-expanded={open} aria-label="Open menu">☰</button>{open&&<div className="absolute inset-x-0 top-[84px] border-y border-[#d9e2df] bg-[#f8f6f0] px-5 py-4"><nav className="container flex flex-col gap-3">{nav.map(([name,href])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="font-semibold">{name}</Link>)}<div className="flex gap-2 pt-2"><Link href="/for-employers" className="btn btn-primary flex-1">Request Staff</Link><Link href="/apply" className="btn btn-secondary flex-1">Find a Job</Link></div></nav></div>}</div>}
