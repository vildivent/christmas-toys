import Image, { type StaticImageData } from "next/image";

type UserAvatarProps = {
  src: string | StaticImageData;
  alt: string | null | undefined;
  size: number | string;
};

const UserAvatar = ({ src, alt, size }: UserAvatarProps) => {
  return (
    <div
      className="relative rounded-full"
      style={{ height: size, width: size }}
    >
      <Image className="rounded-full" src={src} alt={alt || "user"} fill />
    </div>
  );
};

export default UserAvatar;
