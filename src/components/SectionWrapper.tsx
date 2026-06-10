interface SectionWrapperProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, children, className = "" }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {title && (
          <h2 className="mb-8 text-center text-2xl font-bold text-primary md:text-3xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
