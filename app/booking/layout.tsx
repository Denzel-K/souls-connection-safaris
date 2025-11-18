import { Suspense } from 'react'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-lux-bone">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-lux-accent border-t-transparent animate-spin mx-auto"></div>
          <p className="text-lux-ink/60">Loading booking form...</p>
        </div>
      </div>
    }>
      {children}
    </Suspense>
  )
}
