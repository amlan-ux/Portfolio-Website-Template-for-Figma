export function Skills() {
  const skills = {
    'Technical': ['React & Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'Supabase'],
    'Figma': ['Plugin APIs', 'Dev Mode', 'Code Connect', 'MCP Integration', 'Webhooks'],
    'Advocacy': ['Technical Writing', 'Workshops', 'Public Speaking', 'Community Building'],
    'Design': ['Design Systems', 'Accessibility', 'Workflow Automation', 'AI/UX']
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-12">
        <h2 className="mb-2">Skills & Expertise</h2>
        <div className="h-1 w-20 bg-secondary"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={category}
            className="bg-card border-2 border-border p-6 hover:shadow-lg transition-all duration-300"
            style={{
              transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`,
              borderRadius: 'var(--radius-card)'
            }}
          >
            <h3 className="mb-4 pb-2 border-b-2 border-border">{category}</h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}