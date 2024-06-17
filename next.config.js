// const withPWA = require('next-pwa')({
//     dest: 'public'
//   })

/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = withPWA({
//     pwa: {
//         dest: "public",
//         register: true,
//         skipWaiting: true,
//     }
// });

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  });
  
  module.exports = withPWA({
    reactStrictMode: true,
    // הגדרות נוספות במידת הצורך
  });