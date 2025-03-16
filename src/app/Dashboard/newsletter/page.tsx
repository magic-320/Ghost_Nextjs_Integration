"use client";

// import Newsletter from "./Newsletter"; // Adjust the path as needed

// export default function DashboardNewsletterPage() {
//     return <Newsletter />;
// }

import dynamic from "next/dynamic";

const Newsletter = dynamic(() => import('./Newsletter'), { ssr: false });

export default Newsletter;