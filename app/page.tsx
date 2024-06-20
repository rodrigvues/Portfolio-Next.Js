import Intro from "@/components/intro"
import Projetos from "@/components/projetos"
import SectionDivider from "@/components/section-divider"
import Sobre from "@/components/sobre"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Sobre />
      <Projetos />
    </main>
  )
}
