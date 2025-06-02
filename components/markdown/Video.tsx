// components/markdown/Video.tsx
import React from 'react';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  // You can add other custom props like title, description, etc.
  poster?: string;
  // Add any other standard video attributes you want to expose or default
}

const Video: React.FC<VideoProps> = ({
  src,
  poster,
  width = 330, // Default width
  height = 670, // Default height
  controls = true, // Default to show controls
  className,
  ...props
}) => {
  // You could use your LazyVideo component here if the video is below the fold!
  // For simplicity, this is a direct video tag.
  return (
    <div className={`my-4 ${className || ''}`}> {/* Optional wrapper for margin/styling */}
      <video
        width={width}
        height={height}
        controls={controls}
        poster={poster}
        {...props} // Spread other HTML video attributes
        // Consider adding playsInline for better mobile experience
        // muted and autoPlay if it's a short demo you want to loop
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;