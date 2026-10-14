
import { ArrowUpRight, MapPin } from "lucide-react";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5050.555334174183!2d77.28031207600873!3d11.183713751547238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9038baebcbb59%3A0x65ea405423a60cf4!2sZaron%20Industriess!5e1!3m2!1sen!2sin!4v1791963368399!5m2!1sen!2sin";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Zaron%20Industriess";

export default function Location() {
  return (
    <section
      id="location"
      className="w-full bg-[#EDEDED] py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-7 flex items-center gap-4">
          <span className="h-[3px] w-10 shrink-0 bg-[#F47721]" />

          <h2 className="text-xl font-semibold text-[#111719] sm:text-2xl">
            Our Location
          </h2>
        </div>

        {/* Map Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          {/* Google Map */}
          <div className="h-[300px] w-full sm:h-[400px] lg:h-[480px]">
            <iframe
              title="Zaron Industriess Google Maps Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full border-0"
            />
          </div>

          {/* Location Information */}
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF0E5]">
                <MapPin
                  size={22}
                  className="text-[#F47721]"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#111719]">
                  Zaron Industriess
                </h3>

                <p className="text-sm text-[#6B7280]">
                  Visit our location
                </p>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#0D161A] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#F47721] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F47721]"
            >
              Get Directions
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
