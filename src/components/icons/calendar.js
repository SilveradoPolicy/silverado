import React from 'react';

export default function Calendar() {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="32" cy="32" r="32" fill="#306184" />
            <rect
                x="16.5047"
                y="17.8523"
                width="30.9895"
                height="28.2947"
                rx="5.05263"
                stroke="white"
                strokeWidth="2.02105"
            />
            <line
                x1="48.5059"
                y1="26.6101"
                x2="15.4953"
                y2="26.6101"
                stroke="white"
                strokeWidth="2.02105"
            />
            <line
                x1="25.2644"
                y1="14.4832"
                x2="25.2644"
                y2="21.22"
                stroke="white"
                strokeWidth="2.02105"
                strokeLinecap="round"
            />
            <line
                x1="38.7371"
                y1="14.4832"
                x2="38.7371"
                y2="21.22"
                stroke="white"
                strokeWidth="2.02105"
                strokeLinecap="round"
            />
        </svg>
    );
}
