type QuestionStatementProps = {
  statement: string
  className?: string
}

type CorrelationLayout = {
  intro: string[]
  leftItems: string[]
  rightItems: string[]
}

function parseCorrelationLayout(statement: string): CorrelationLayout | null {
  if (!statement.includes('Itens a correlacionar:')) {
    return null
  }

  const lines = statement
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const markerIndex = lines.findIndex((line) => line === 'Itens a correlacionar:')

  if (markerIndex === -1) {
    return null
  }

  const intro = lines.slice(0, markerIndex).filter((line) => !/^\(\d+\)/.test(line))
  const leftItems = lines.slice(0, markerIndex).filter((line) => /^\(\d+\)/.test(line))
  const rightItems = lines
    .slice(markerIndex + 1)
    .filter((line) => line.startsWith('- '))
    .map((line) => line.slice(2))

  if (leftItems.length === 0 || rightItems.length === 0) {
    return null
  }

  return { intro, leftItems, rightItems }
}

export default function QuestionStatement({
  statement,
  className = '',
}: QuestionStatementProps) {
  const correlationLayout = parseCorrelationLayout(statement)

  if (correlationLayout) {
    return (
      <div className={className}>
        <div className="space-y-2 text-sm leading-7 text-gray-800">
          {correlationLayout.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Coluna da esquerda
            </p>
            <div className="space-y-2 text-sm leading-7 text-gray-900">
              {correlationLayout.leftItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Coluna da direita
            </p>
            <div className="space-y-2 text-sm leading-7 text-gray-900">
              {correlationLayout.rightItems.map((item) => (
                <p key={item}>( ) {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <p className={`whitespace-pre-line text-sm leading-7 text-gray-800 ${className}`}>{statement}</p>
}
