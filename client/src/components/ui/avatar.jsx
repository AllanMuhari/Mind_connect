import React from "react";

const Avatar = ({ className, children, ...props }) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};

const AvatarImage = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

const AvatarFallback = ({ children, ...props }) => {
  return (
    <div
      className="bg-gray-300 text-white flex items-center justify-center h-full w-full"
      {...props}>
      {children}
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback };
