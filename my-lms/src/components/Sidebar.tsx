'use client';

import Link from "next/link";
import styles from "../styles/Sidebar.module.css"
import { usePathname } from 'next/navigation';



export default function Sidebar(){
    const pathname = usePathname();

    const isAuthPage = pathname === '/login' || pathname === '/signup';
  return (
    <div>
    {
        !isAuthPage && (
            <aside className={`${styles.sidebar} ${styles.robotoTextstyle}`}>
                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/lectures">Lectures</Link></li>
                    <li><Link href="/notes">Notes</Link></li>
                    <li><Link href="/bookmarks">Bookmarks</Link></li>
                    <li><Link href="/assignments">Assignments</Link></li>
                    <li><Link href="/quiz">Quiz</Link></li>
                </ul>
            </aside>
        )
    }
    </div>
    
  );
}
