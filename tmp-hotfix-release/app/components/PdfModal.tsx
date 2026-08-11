'use client'

type PdfModalProps = {
  isOpen: boolean
  onClose: () => void
  pdfPath: string
  title: string
}

export default function PdfModal({
  isOpen,
  onClose,
  pdfPath,
  title,
}: PdfModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-sm font-semibold text-gray-900">{title}</h2>

          <div className="flex items-center gap-2">
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Abrir em nova aba
            </a>

            <button
              onClick={onClose}
              className="rounded-lg bg-black px-3 py-2 text-sm font-medium text-white"
            >
              Fechar
            </button>
          </div>
        </div>

        <div className="flex-1 bg-gray-100">
          <iframe
            src={pdfPath}
            title={title}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}