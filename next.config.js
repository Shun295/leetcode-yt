/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

console.log("Firebase API Key:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
