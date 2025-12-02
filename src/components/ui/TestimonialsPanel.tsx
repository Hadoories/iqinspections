type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialsPanelProps = {
  testimonials: readonly Testimonial[];
};

export function TestimonialsPanel({ testimonials }: TestimonialsPanelProps) {
  if (!testimonials.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure
          key={testimonial.author}
          className="flex h-full flex-col rounded-2xl border border-sky-100 bg-white/90 p-5 shadow-lg shadow-sky-200/60"
        >
          <p className="flex-1 text-sm text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>
          <figcaption className="mt-4 border-t border-sky-50 pt-4 text-sm font-semibold text-slate-900">
            {testimonial.author}
            <span className="block text-xs font-normal uppercase tracking-wide text-slate-500">
              {testimonial.role}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

