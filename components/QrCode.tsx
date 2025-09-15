"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import animationData from "@/public/qrcode.json";
import { ExternalLink } from "lucide-react";

// Dynamically import Lottie for client-side only rendering
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function QrCode() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, closeModal]);

    // Show only on /docs/components or any subroute
    if (!pathname.startsWith("/docs/components") && !pathname.startsWith("/docs/screens")) {
        return null;
      }

  return (
    <>
      {/* Floating QR Code Button/Trigger */}
      <button
        onClick={openModal}
        className="fixed bottom-4 right-4 z-40 flex flex-col items-center p-2 bg-neutral-300/70 backdrop-blur-sm rounded-lg shadow-lg hover:bg-neutral-200/80  transition-colors cursor-pointer group"
        aria-label="Open QR code scanner for Expo Go"
      >
        <div className="w-24 h-24">
          <Lottie animationData={animationData} loop autoplay />
        </div>
        <span className="mt-2 text-xs font-medium text-neutral-500 group-hover:text-neutral-400 transition-colors">
          Preview on Device
        </span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeModal} // Close modal on overlay click
          role="dialog"
          aria-modal="true"
          aria-labelledby="qrModalTitle"
        >
          <div
            className="bg-neutral-100 p-6 pt-10 sm:p-8 sm:pt-12 rounded-xl shadow-2xl relative w-full max-w-xs sm:max-w-sm text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-neutral-500 hover:text-neutral-400  transition-colors"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Text above QR */}
            <h2
              id="qrModalTitle"
              className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-neutral-900"
            >
              Scan with Expo Go to preview
            </h2>

            {/* QR Code Image */}
            <div className="bg-white p-2 sm:p-3 rounded-md inline-block shadow-md">
              <Image
                src={'https://cdn.jsdelivr.net/gh/waleedcj/EziuiAssets@main/eas-updateV2.svg'}
                alt="Expo Go QR Code"
                width={220} // Adjust to the natural width of your QR image or desired display width
                height={220} // Adjust to the natural height of your QR image or desired display height
                priority // Optional: if this image is important for LCP
                unoptimized
                className="rounded-sm" // Optional: if the QR code image itself doesn't have rounded corners and you want them
              />
            </div>
            <div className="mt-4">
              <p className="mb-2 text-sm text-neutral-600">
                Or open directly in Expo Go:
              </p>
              <a
                href={"exp://u.expo.dev/f9c40f35-634f-4bc1-be5e-001b77476a82/group/e1132dba-f786-480b-95ab-9c28f7007e66"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-neutral-900 bg-neutral-300 hover:bg-neutral-500 transition-colors w-full break-all"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in Expo Go
              </a>
              <p className="mt-3 text-xs text-neutral-500">
                Point your device&apos;s camera or the Expo Go app at the QR code above, or tap the button.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}