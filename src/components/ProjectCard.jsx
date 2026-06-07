export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: '0 2px 16px rgba(60, 40, 20, 0.06), 0 0 0 1px rgba(60, 40, 20, 0.04)',
      }}
    >
      {/* Screenshot */}
      <div className="mb-5 overflow-hidden rounded-xl bg-[#f5f0e6]">
        <div className="aspect-[16/10] w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-[#b8a990]">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
              <path d="M3 7l9 6 9-6"/>
            </svg>
            <span className="text-xs tracking-wider">CET-4 · 听力翻译刷题器</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <h2 className="mb-1.5 text-lg font-[450] tracking-wide text-[#3d3522]">
        {project.title}
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-[#8a7560]">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#e5dcc8] px-3 py-0.5 text-[11px] tracking-wide text-[#8a7560]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 text-sm">
        <span className="font-[400] tracking-wide text-[#3d3522] group-hover:text-[#8a7560] transition-colors">
          查看项目 →
        </span>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs tracking-wide text-[#b8a990] hover:text-[#8a7560] transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </a>
  )
}
