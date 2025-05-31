"use client";

import { motion } from "framer-motion";
import { MyIcons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Copy,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { LazyVideo } from "@/components/LazyVideo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-background bg-grid-pattern bg-[size:6rem_4rem] -z-10" />
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 border-gray-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              New Animated Component every week • Growing library
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-6 text-neutral-900  font-jakarta">
              {" "}
              {/* Added dark mode text color */}
              Make your apps look{" "}
              <span className="text-primary-orange">10x awesome</span>
            </h1>
            <p className="text-xl text-gray-500 mb-8">
              {" "}
              {/* Added dark mode text color */}
              Production-ready React Native animations that are lightweight and
              performant. Copy-paste beautiful components without the bloat,
              built by a developer for developers ❤️.
            </p>
            <div className="flex gap-4">
              <Link href="/docs/getting-started/install-expo">
                <Button
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-700 font-medium text-gray-100 text-base px-8 py-4 shadow-lg hover:shadow-xl rounded-xl transition-all duration-200 group"
                >
                  Browse Components
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
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
                  <MyIcons.React className="md:h-8 md:w-8 h-7 w-7 text-gray-500  flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />{" "}
                  {/* Adjusted size slightly */}
                  <span className="text-sm font-semibold text-gray-500  flex-shrink-0">
                    React Native
                  </span>
                </div>

				<div className="flex items-center space-x-2 mr-4">
                  <MyIcons.ExpoIcon className="md:h-8 md:w-8 h-7 w-7 text-gray-500  flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />{" "}
                  {/* Adjusted size slightly */}
                  <span className="text-sm font-semibold text-gray-500  flex-shrink-0">
                    Expo
                  </span>
                </div>

                {/* Lottie Icon */}
                <div className="flex items-center space-x-2 mr-4">
                  <MyIcons.RnghIcon className="md:h-8 md:w-8 h-6 w-6 text-gray-500  flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />{" "}
                  {/* Adjusted size slightly */}
                  <span className="text-sm font-semibold text-gray-500  flex-shrink-0">
				  Gesture Handler
                  </span>
                </div>

                {/* Software Mansion Icon - FIXED */}
				<div className="flex items-center space-x-2">
            	<MyIcons.R3Icon className="md:h-8 md:w-8 h-6 w-6 text-gray-500  flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />{" "}
				<span className="text-sm font-semibold text-gray-500  flex-shrink-0">Reanimated 3</span>
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
                <LazyVideo
                  videoSrc={videoData[0].src}
                  containerWrapperClassName="rounded-xl p-1 hover:scale-105 transition-transform"
                  // customPlaceholderImageSrc={videoData[0].customPlaceholderImageSrc} // Uncomment if you have this
                  videoElementAttributes={{
                    height: 500, // HTML attribute for intrinsic size hint & skeleton height
                    className: "rounded-3xl object-fill w-full", // Applied to video & placeholder
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true, // Crucial for iOS
                    "aria-label": videoData[0].ariaLabel,
                    // poster: "optional_native_video_poster.jpg" // Video's own poster attribute
                  }}
                />
                <LazyVideo
                  videoSrc={videoData[1].src}
                  containerWrapperClassName="rounded-xl p-1 hover:scale-105 transition-transform"
                  videoElementAttributes={{
                    height: 500,
                    className: "rounded-3xl object-fill w-full",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    "aria-label": videoData[1].ariaLabel,
                  }}
                />
              </div>
              {/* Column 2 */}
              <div className="space-y-4 mt-4">
                {/* Mockup 3 Wrapper */}
                <LazyVideo
                  videoSrc={videoData[2].src}
                  containerWrapperClassName="rounded-xl p-1 hover:scale-105 transition-transform"
                  videoElementAttributes={{
                    height: 500,
                    className: "rounded-3xl object-fill w-full",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    "aria-label": videoData[2].ariaLabel,
                  }}
                />
                <LazyVideo
                  videoSrc={videoData[3].src}
                  containerWrapperClassName="rounded-xl p-1 hover:scale-105 transition-transform"
                  videoElementAttributes={{
                    height: 500,
                    className: "rounded-3xl object-fill w-full",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    "aria-label": videoData[3].ariaLabel,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Features Section */}
	  <div className="container mx-auto px-4 py-20 bg-gray-50/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Why choose our animations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 font-jakarta">
            From idea to app store in <span className="text-primary-orange">half the time</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Stop building animations from scratch. Use our growing library of battle-tested components and focus on what
            makes your app unique.
          </p>
        </motion.div>

		<div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-100 h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-200 rounded-lg">{feature.icon}</div>
                    <h3 className="text-xl text-neutral-900 font-semibold font-jakarta">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <div className="text-sm text-primary-orange font-medium">{feature.benefit}</div>
                </CardContent>
              </Card>
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
		icon: <Copy className="w-6 h-6 text-blue-600" />,
		title: "Copy & Paste Ready",
		description:
		  "Drop components into your project and they work instantly. No complex setup, no configuration files, no headaches.",
		benefit: "Save hours of development time",
	  },
	  {
		icon: <Zap className="w-6 h-6 text-yellow-600" />,
		title: "Native Performance",
		description:
		  "Built with Reanimated 3, all animations run on the native thread for butter-smooth 60 FPS performance on any device.",
		benefit: "Guaranteed smooth performance",
	  },
	  {
		icon: <Clock className="w-6 h-6 text-green-600" />,
		title: "Always Growing",
		description:
		  "New animation every week means your library keeps expanding. Never run out of fresh ideas for your apps.",
		benefit: "52+ new components per year",
	  },
];

const videoData = [
  {
    src: "https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/ccinfo.mp4",
    ariaLabel: "Credit Card Form Animation Demo",
    // Optional: Add a specific poster image if you have one
    // customPlaceholderImageSrc: "/placeholders/ccinfo-poster.jpg",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/header.mp4",
    ariaLabel: "Animated Header Demo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/onboarding.mp4",
    ariaLabel: "Onboarding Screen Animation Demo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets/picker.mp4",
    ariaLabel: "Custom Picker Animation Demo",
  },
];
