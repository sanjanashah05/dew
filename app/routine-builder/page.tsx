import RoutineBuilder from '../components/RoutineBuilder'

export default function RoutineBuilderPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl font-bold text-[#9F2A3A] mb-6">Routine Builder</h1>
      <div className="w-full max-w-5xl">
        <RoutineBuilder />
      </div>
    </main>
  )
}
