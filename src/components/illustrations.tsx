import React from 'react';

export const OnlineLearningIllustration = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg width="300" height="200" viewBox="0 0 300 200" className={className} {...props}>
        <defs>
            <clipPath id="clipOnline">
                <path d="M282.6,151.2c-29,26.4-74.8,24.8-112,28.8s-74,20.4-108-4.8c-34.8-25.2-31.2-76.8-22-114C49.4,24.1,89,1.1,132.2,0.5 c43.2-0.6,80.4,24.5,116,42.1C284.6,60.2,311.4,124.8,282.6,151.2z"></path>
            </clipPath>
        </defs>
        <g clipPath="url(#clipOnline)">
            <rect width="300" height="200" fill="#a0dff4" />
            <g transform="translate(50 20)">
                <path d="M150,150 L120,170 L20,170 L20,30 L180,30 L180,110 L150,150 Z" fill="#2c3e50" />
                <rect x="25" y="35" width="150" height="70" fill="#34495e" />
                <g transform="translate(100 50) scale(0.8)">
                    <rect x="0" y="0" width="80" height="50" fill="#f1c40f" rx="5" />
                    <path d="M5,10 h70 M5,20 h70 M5,30 h50 M5,40 h60" stroke="#2c3e50" strokeWidth="2" />
                    <circle cx="70" cy="40" r="3" fill="#e74c3c" />
                </g>
                <circle cx="170" cy="40" r="4" fill="white" />
                <rect x="160" y="55" width="8" height="8" stroke="white" strokeWidth="2" transform="rotate(45 164 59)" />
                <path d="M40,50 L50,40 L60,50" fill="none" stroke="white" strokeWidth="2" />
            </g>
            <g transform="translate(60 80)">
                <path d="M0,80 C20,40,60,30,90,50 L90,120 L0,120 Z" fill="#e74c3c" />
                <path d="M90,50 C120,70,140,110,140,120 L90,120 Z" fill="#c0392b" />
                <path d="M60,20 a20,20 0 1,1 0,1" fill="#3498db"/>
                <circle cx="60" cy="20" r="10" fill="#2980b9" />
                <path d="M60,30 C50,45,70,45,60,30" fill="#2980b9" />
            </g>
        </g>
    </svg>
);

export const ReadingIllustration = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg width="250" height="180" viewBox="0 0 250 180" className={className} {...props}>
         <defs>
            <clipPath id="clipReading">
                <path d="M235.8,111.9c-20.3,32.3-64.8,40.6-101.9,41.9c-37.1,1.3-66.8-4.1-92.4-23.3 C15.9,111.3,4.4,79.5,10.2,50.1C16,20.7,39.1-4.1,70.5-9.9c31.4-5.8,71,12.7,100.8,26.7 C200.3,30.7,256.1,79.6,235.8,111.9z"></path>
            </clipPath>
        </defs>
        <g clipPath="url(#clipReading)">
            <rect width="250" height="180" fill="#a0dff4" />
            <g transform="translate(20 30)">
                {/* Bookshelf */}
                <rect x="10" y="20" width="180" height="80" fill="#2c3e50" />
                {[...Array(3)].map((_, i) => (
                    <rect key={i} x="10" y={45 + i * 25} width="180" height="2" fill="#34495e" />
                ))}
                {/* Books */}
                <g fill="#f1c40f"><rect x="15" y="22" width="10" height="20" /><rect x="27" y="22" width="10" height="20" /></g>
                <rect x="40" y="22" width="15" height="20" fill="#e74c3c" />
                <rect x="58" y="22" width="10" height="20" fill="#e67e22" />
                <g fill="#f1c40f"><rect x="70" y="22" width="10" height="20" /><rect x="82" y="22" width="10" height="20" /></g>
                <rect x="95" y="22" width="15" height="20" fill="#3498db" />
                <rect x="113" y="22" width="10" height="20" fill="#2ecc71" />
                
                <rect x="15" y="47" width="10" height="20" fill="#9b59b6" />
                <rect x="28" y="47" width="15" height="20" fill="#3498db" />
                <rect x="46" y="47" width="10" height="20" fill="#e74c3c" />
                <g fill="#f1c40f"><rect x="58" y="47" width="10" height="20" /><rect x="70" y="47" width="10" height="20" /></g>
                <rect x="83" y="47" width="15" height="20" fill="#2ecc71" />
                <rect x="101" y="47" width="10" height="20" fill="#e67e22" />
                
                <rect x="15" y="72" width="15" height="20" fill="#e74c3c" />
                <rect x="33" y="72" width="10" height="20" fill="#3498db" />

                {/* Person */}
                <g transform="translate(100 90)">
                    <path d="M0,60 L20,60 A30,30 0 0,0 50,30 L50,10 A20,20 0 0,1 70,0 A20,20 0 0,1 90,10 L90,30 A30,30 0 0,0 120,60 L140,60 L120,80 L20,80 Z" fill="#e74c3c" opacity="0.8" transform="translate(-70 -10)" />
                    <circle cx="0" cy="0" r="15" fill="#3498db" />
                    <path d="M-10,0 a10,10 0 0,1 20,0" fill="#2980b9" />
                    <path d="M-15,10 C-5,30 5,30 15,10" fill="#c0392b" transform="translate(0 30)" />
                    <path d="M-15,40 L-30,60 L30,60 L15,40" fill="#2980b9" transform="translate(0 15)" />
                    <g transform="translate(-20, 45)">
                        <path d="M0,0 C-10,10 -10,20 0,20" fill="none" stroke="#2c3e50" strokeWidth="3"/>
                        <rect x="-20" y="15" width="15" height="30" fill="#e74c3c" />
                        <path d="M -20 15 C -25 10, -30 10, -30 15" fill="none" stroke="#c0392b" strokeWidth="2" />
                    </g>
                </g>
                 {/* Open Book */}
                <g transform="translate(80, 115)">
                     <path d="M 0 0 L 30 0 L 30 20 C 30 25, 25 25, 20 25 L 10 25 C 5 25, 0 25, 0 20 Z" fill="#f39c12" />
                    <path d="M 5,5 h20 M5,10 h20 M5,15 h15" stroke="#2c3e50" strokeWidth="1"/>
                </g>

            </g>
        </g>
    </svg>
);
