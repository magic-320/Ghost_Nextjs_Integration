"use client";
import React, { Suspense } from 'react';
import Chatbot from "./Chatbot"; // Adjust the path as needed

export default function DashboardChatbotPage() {
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <Chatbot />
        </Suspense>
    );
}
