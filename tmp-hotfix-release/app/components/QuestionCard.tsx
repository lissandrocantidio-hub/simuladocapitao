import type { Question } from '@/types/questions'
import QuestionStatement from './QuestionStatement'

type ResultCardProps = {
  question: Question
  selectedAnswer?: string
  questionNumber?: number
}

export default function ResultCard({
  question,
  selectedAnswer,
  questionNumber,
}: ResultCardProps) {
  const isCorrect = selectedAnswer === question.correct

  const correctOptionText = question.options[question.correct]

  const selectedOptionText =
    selectedAnswer && selectedAnswer in question.options
      ? question.options[selectedAnswer as keyof typeof question.options]
      : null

  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {questionNumber ? `Questão ${questionNumber}` : `Questão ${question.id}`}
          </p>

          <h3 className="text-base font-semibold text-gray-900">
            {question.subject} · {question.topic}
          </h3>

          <p className="text-sm text-gray-500">
            {question.exam} · {question.year}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {isCorrect ? 'Acertou' : 'Errou'}
        </span>
      </div>

      <div className="mb-4">
        <QuestionStatement statement={question.statement} />
      </div>

      {question.attachments && question.attachments.length > 0 && (
        <div className="mb-4 rounded-xl border border-blue-200 bg-blue-50 p-3">
          <p className="mb-2 text-sm font-medium text-blue-900">Esta questão possui anexo.</p>

          <div className="flex flex-wrap gap-2">
            {question.attachments.map((attachment) => (
              <a
                key={attachment.path}
                href={attachment.path}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
              >
                {attachment.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3 rounded-xl bg-gray-50 p-4">
        <div>
          <p className="text-sm font-semibold text-gray-700">Sua resposta</p>
          <p className="text-sm text-gray-900">
            {selectedAnswer
              ? `${selectedAnswer}${selectedOptionText ? ` — ${selectedOptionText}` : ''}`
              : 'Não respondida'}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700">Resposta correta</p>
          <p className="text-sm text-gray-900">
            {question.correct} — {correctOptionText}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-700">Explicação da resposta certa</p>
          <p className="whitespace-pre-line text-sm leading-6 text-gray-900">{question.explanation}</p>
        </div>
      </div>
    </div>
  )
}
