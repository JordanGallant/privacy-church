import News from "../_components/news"
import Navbar from "../_components/nav"

export default function NewspPage() {
  return (
    <>
        <Navbar hideLogo={false} />
  <h1 className="text-6xl font-bold mb-4 italic font-[var(--font-gt-planar-light)]">
          News
        </h1>
        
        <p className="text-base text-gray-600 mb-8 font-[var(--font-gt-planar-light)]">
          Fresh sins, big wins and ongoing acts of surveillance disguised as progress.
        </p>

    <News/>
    </>
  )
}
