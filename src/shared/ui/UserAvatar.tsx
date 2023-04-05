import Image, { type StaticImageData } from "next/image";

type UserAvatarProps = {
  src: string | StaticImageData | null;
  alt: string | null | undefined;
  size?: number | string;
};

const UserAvatar = ({ src, alt, size = "2.5rem" }: UserAvatarProps) => {
  return (
    <div
      className="relative rounded-full"
      style={{ height: size, width: size }}
    >
      {src && (
        <Image
          className="rounded-full"
          src={src}
          alt={alt || "user"}
          fill
          sizes={typeof size === "number" ? `${size}px` : size}
        />
      )}
    </div>
  );
};

export default UserAvatar;
