import News from "../_components/news";
import Navbar from "../_components/nav";

export default function NewspPage() {
  return (
    <>
      <Navbar hideLogo={false} />

<div className="px-6 max-w-4xl mx-auto">
  <h1 className="text-5xl mb-2 leading-tight font-[family-name:var(--font-gt-planar-heading)] pl-[10px]">News</h1>

        <p
          className="font-[family-name:var(--font-dm-mono)] font-normal text-[15px] leading-[20px] tracking-[-0.06em] mb-4"
          style={{ color: "#717171" }}
        >
          Fresh sins, big wins and ongoing acts of surveillance disguised as progress.

        </p>
        
        <News />
      </div>

      
    </>
  );
}
