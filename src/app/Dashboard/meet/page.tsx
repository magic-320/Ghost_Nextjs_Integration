"use client";
import React, { Suspense } from 'react';
import Meet from "./Meet"; // Adjust the path as needed

export default function DashboardMeetPage() {
    return (
        <Suspense>
            <Meet />
        </Suspense>
    );
}
