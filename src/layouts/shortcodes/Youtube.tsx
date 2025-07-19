import React, { useState } from "react";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer bg-black"
      onClick={() => setIframeLoaded(true)}
      {...rest}
    >
      {!isIframeLoaded ? (
        <>
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white opacity-90"
              viewBox="0 0 68 48"
            >
              <path
                d="M66.52 7.85a8.27 8.27 0 00-5.82-5.83C55.71 0 34 0 34 0S12.29 0 .3 2.02A8.27 8.27 0 00.3 7.85 85.2 85.2 0 000 24a85.2 85.2 0 00.3 16.15 8.27 8.27 0 005.82 5.83C12.29 48 34 48 34 48s21.71 0 33.7-2.02a8.27 8.27 0 005.82-5.83A85.2 85.2 0 0068 24a85.2 85.2 0 00-1.48-16.15zM27 34V14l18 10-18 10z"
                fill="currentColor"
              />
            </svg>
          </div>
        </>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Youtube;
