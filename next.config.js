/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: `/${process.env.CLOUD_NAME}/image/**`,
			},
		],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
