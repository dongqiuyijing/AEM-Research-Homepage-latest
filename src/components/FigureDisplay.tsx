interface FigureDisplayProps {
  src: string;
  caption: string;
  figNumber: number;
  className?: string;
  imgClassName?: string;
}
const FigureDisplay = ({
  src,
  caption,
  figNumber,
  className = "",
  imgClassName = ""
}: FigureDisplayProps) => {
  return <figure className={`my-8 ${className}`}>
      <div className="overflow-hidden rounded-lg border border-border bg-popover shadow-[var(--shadow-card)]">
        <img src={src} alt={`Figure ${figNumber}: ${caption}`} className={`w-full h-auto ${imgClassName}`} crossOrigin="anonymous" />
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
        <span className="font-semibold text-primary">Figure {figNumber}.</span>{" "}
        {caption}
      </figcaption>
    </figure>;
};
export default FigureDisplay;