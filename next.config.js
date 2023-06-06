/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.quizur.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
