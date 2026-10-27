import './BadgeImage.scss';

interface BadgeImageProps {
  src: string | null;
  alt: string;
  isLoading: boolean;
}

export function BadgeImage({ src, alt, isLoading }: BadgeImageProps) {
  if (isLoading) {
    return <p>Loading badge</p>;
  }

  if (!src) {
    return <p>No badge image</p>;
  }

  return <img src={src} alt={alt} loading="lazy" />;
}
