import News from "../_components/news";
import Navbar from "../_components/nav";

export default function NewspPage() {
  return (
    <>
      <Navbar hideLogo={false} />

<div className="p-6 max-w-4xl mx-auto">
  <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)]">
          News
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-mono)]"
          style={{ color: "#717171" }}
        >
          Fresh sins, big wins and ongoing acts of surveillance disguised as progress.
        </p>
      </div>

      <News />
    </>
  );
}
