import './BadgeImage.scss';

interface BadgeImageProps {
  src: string | null;
  alt: string;
  isLoading: boolean;
}

export function BadgeImage({ src, alt, isLoading }: BadgeImageProps) {
  if (isLoading) {
    return (
      <p className="badge-image__status" role="status">
        Loading badge
      </p>
    );
  }

  if (!src) {
    return <p className="badge-image__status">No badge image</p>;
  }

  return <img className="badge-image__img" src={src} alt={alt} loading="lazy" />;
}
