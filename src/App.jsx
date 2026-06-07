import ProjectCard from './components/ProjectCard'

export default function App() {
  const projects = [
    {
      id: 'cet4',
      title: 'CET-4 听力翻译刷题器',
      description: 'CET-4 全套练习工具，支持听力真题训练、翻译 AI 评分、词汇练习、错题回顾与学习统计。微信小程序版本，基于 Taro 4.x 跨端框架构建。',
      tags: ['Taro 4.x', 'React 18', 'TypeScript', 'SCSS', 'Supabase'],
      image: '/kanade/cet4-screenshot.png',
      link: 'https://clamecy1.github.io/cet4-practice',
      github: 'https://github.com/Clamecy1/cet4-practice',
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-2xl px-6 pb-24 pt-20 sm:pt-28">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-[13px] font-light tracking-[0.25em] text-warm-dark uppercase">
            clamecy1
          </h1>
          <p className="mt-4 text-[28px] font-[200] tracking-[0.06em] text-[#3d3522]">
            作品集
          </p>
        </header>

        {/* Project list */}
        <section className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}

          {/* Future placeholder */}
          <div className="rounded-2xl border border-dashed border-[#d4c8b0] px-6 py-12 text-center">
            <p className="text-sm text-[#b8a990]">
              更多作品即将上线
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-xs text-[#c4b8a0] tracking-wider">
            kanade
          </p>
        </footer>
      </div>
    </div>
  )
}
