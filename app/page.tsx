"use client";

import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import { motion } from "framer-motion";
// Remove unused local image imports if using URLs
// import mockup from "@/assets/images/png/mock.png";
// import swmansion from "@/assets/images/webp/swmansion.webp";
import { MyIcons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto px-4 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6 text-neutral-900  font-jakarta"> {/* Added dark mode text color */}
							Make your apps look{" "}
							<span className="text-primary-orange">10x awesome</span>
						</h1>
						<p className="text-xl text-gray-500 mb-8"> {/* Added dark mode text color */}
							Production-ready React Native animations that are lightweight and
							performant. Copy-paste beautiful components without the bloat,
							built by a developer for developers ❤️.
						</p>
						<div className="flex gap-4">
							{/* Using Link correctly with a standard button */}
							<Link href="/components" passHref legacyBehavior>
								<a
									className="inline-block bg-gray-800 px-8 py-3 rounded-xl
													shadow-md hover:shadow-xl
													font-medium text-gray-100
													transition-all duration-200 ease-in-out
													hover:scale-[1.05]"
								>
									Browse Components
								</a>
							</Link>
						</div>

						{/* Tech Stack */}
						<div className="relative mt-10">
							<div
								className="flex justify-start items-center mb-4 overflow-x-auto relative z-20 no-visible-scrollbar"
								style={{ scrollbarWidth: "none" }}
							>
								{/* React Native Icon */}
								<div className="flex items-center space-x-2 mr-4">
									<MyIcons.React className="md:h-11 md:w-11 h-7 w-7 text-gray-500  flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" /> {/* Adjusted size slightly */}
									<span className="text-sm font-semibold text-gray-500  flex-shrink-0">
										React Native
									</span>
								</div>

								{/* Lottie Icon */}
								<div className="flex items-center space-x-2 mr-4">
									<MyIcons.Lottie className="md:h-10 md:w-10 h-6 w-6 text-gray-500  flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" /> {/* Adjusted size slightly */}
									<span className="text-sm font-semibold text-gray-500  flex-shrink-0">
										Lottie
									</span>
								</div>

								{/* Software Mansion Icon - FIXED */}
								<div className="flex items-center space-x-2 mr-4">
									{/* Remove fill, use width/height props */}
									<Image
										src="https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/swmansion.webp"
										width={40} // Set desired width (adjust as needed)
										height={40} // Set desired height (adjust as needed)
										alt="Software Mansion Logo" // Corrected alt text
										className="rounded-md flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" // Simplified classes
									/>
									<span className="text-sm font-semibold text-gray-500  flex-shrink-0">
										Software Mansion
									</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Content - iPhone Mockups - FIXED */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative max-w-2xl mx-auto"
					>
						<div className="grid grid-cols-2 gap-4">
							{/* Column 1 */}
							<div className="space-y-4">
								{/* Mockup 1 Wrapper - Removed aspect-ratio */}
								<div className="rounded-xl p-1 hover:scale-105 transition-transform">
									<Image
										src="https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/mock.png"
										alt="Animation Demo 1"
										width={250} // Use actual width of your source image
										height={500} // Use actual height of your source image
										className="rounded-lg object-cover w-full h-auto" // Added w-full h-auto, removed fill
									/>
								</div>
								{/* Mockup 2 Wrapper */}
								<div className="rounded-xl p-1 hover:scale-105 transition-transform">
									<Image
										src="https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/mock.png"
										alt="Animation Demo 2"
										width={250} // Use actual width of your source image
										height={500} // Use actual height
										className="rounded-lg object-cover w-full h-auto" // Added w-full h-auto, removed fill
									/>
								</div>
							</div>
							{/* Column 2 */}
							<div className="space-y-4 mt-4">
								{/* Mockup 3 Wrapper */}
								<div className="rounded-xl p-1 hover:scale-105 transition-transform">
									<Image
										src="https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/mock.png"
										alt="Animation Demo 3"
										width={250} // Use actual width of your source image
										height={500} // Use actual height
										className="rounded-lg object-cover w-full h-auto" // Added w-full h-auto, removed fill
									/>
								</div>
								{/* Mockup 4 Wrapper */}
								<div className="rounded-xl p-1 hover:scale-105 transition-transform">
									<Image
										src="https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/mock.png"
										alt="Animation Demo 4"
										width={250} // Use actual width of your source image
										height={500} // Use actual height
										className="rounded-lg object-cover w-full h-auto" // Added w-full h-auto, removed fill
									/>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			{/* Features Section */}
			<div className="container mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 font-jakarta"> {/* Added dark mode text color */}
						As simple as copy and paste
					</h2>
					<p className="text-gray-500  text-xl"> {/* Added dark mode text color */}
						Just drop the code into your UI folder and start using these
						components right away. No complex setup needed.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							// Added dark mode background/shadow
							className="bg-gray-100 p-6 rounded-xl shadow-lg transition-colors"
						>
							<div className="flex flex-row gap-2 items-center mb-2"> {/* Reduced bottom margin */}
								{/* Render icon directly if it's a string/emoji */}
								<div className="text-3xl">{feature.icon}</div>
								<h3 className="text-xl text-neutral-900 font-semibold font-jakarta"> {/* Added dark mode text color */}
									{feature.title}
								</h3>
							</div>

							<p className="text-gray-500 ">{feature.description}</p> {/* Added dark mode text color */}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

// Use MyIcons components if you intend to replace emojis with SVG icons
const features = [
	{
		icon: "🚀", // Or <MyIcons.Rocket className="w-8 h-8 text-blue-500" />
		title: "Minimal Dependencies",
		description:
			"Built with Software Mansion's Reanimated and Gesture Handler. No additional animation libraries needed.",
	},
	{
		icon: "📋", // Or <MyIcons.ClipboardIcon className="w-8 h-8 text-green-500" />
		title: "Copy & Paste Ready",
		description:
			"Drop the components into your project and they'll work instantly with your existing React Native setup.",
	},
	{
		icon: "⚡", // Or <MyIcons.LightningIcon className="w-8 h-8 text-yellow-500" />
		title: "Native Performance",
		description:
			"Powered by Reanimated 3, all animations run on the native thread for butter-smooth 60 FPS performance.",
	},
];