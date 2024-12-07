"use client";
import React, { Suspense } from 'react';
import Assessment from "./Assessment"; // Adjust the path as needed

export default function DashboardAssessmentPage() {
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <Assessment />
        </Suspense>
    );
}
