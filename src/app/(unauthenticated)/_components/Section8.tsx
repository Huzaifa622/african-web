import EmblaCarousel from "./ui/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function Section8()
{
    return(
        <div className="py-12 max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center py-8">
                <h2 className="text-xl font-bold text-[#FF0000]">\ From our Customers \</h2>
                <h1 className="text-3xl font-bold text-[#0E1F51]">Testimonials</h1>
            </div>
 <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}