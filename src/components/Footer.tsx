
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { name: "WhatsApp", icon: FaWhatsapp, url: "" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/rajalakshmi_roofing?igsh=dGJzZWxhbXZkeHU5" },
  { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/people/Rajalakshmi-Roofings/pfbid026fUyHM24PcnJJQNpQPECQmHeMLuiviSnG7MjUW68TfTRd3ohDvpS31LeN7p5d4AWl/?rdid=qCt123OppOGV1yLz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18U7y9aXzH%2F"}, // Add actual Facebook URL" 
  { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/@rajalakshmiroofing3035" },
];

const phoneNumbers = [
  { label: "+91 73737 48338", value: "+917373748338" },
  { label: "+91 73737 78338", value: "+917373778338" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D161A] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:py-14 lg:px-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-10">

          {/* Left: Brand Information */}
          <div className="max-w-[320px]">
            <img
              src="/images/zaron-logo.png"
              alt="Zaron Industriess"
              loading="lazy"
              className="h-auto w-[105px] object-contain"
            />

            <p className="mt-4 text-[11px] uppercase tracking-wide text-white/75">
              ROOFING | CLADDING | STRUCTURES
            </p>

            <p className="mt-4 text-[12px] leading-[1.5] text-white/90 sm:text-[13px]">
              Delivering High-Performance Roofing, Cladding
              And Structural Solutions For Industrial And
              Commercial Projects Across India
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-5">
              {socialLinks.map(({ name, icon: Icon, url }) =>
                url ? (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="text-[20px] text-white transition-colors hover:text-[#F47721]"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    key={name}
                    role="img"
                    aria-label={name}
                    className="text-[20px] text-white"
                  >
                    <Icon aria-hidden="true" />
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Contact Information */}
          <div className="w-full max-w-[270px]">
            <h3 className="text-[16px] font-normal text-white">
              Get In Touch
            </h3>

            <div className="mt-2 h-[3px] w-10 bg-[#F47721]" />

            <div className="mt-7 space-y-5">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone size={14} className="text-[#F47721]" />
                </div>

                <div className="text-[12px] leading-[1.5]">
                  <div className="flex flex-wrap gap-x-1">
                    {phoneNumbers.map((phone, index) => (
                      <span key={phone.value}>
                        <a
                          href={`tel:${phone.value}`}
                          className="hover:text-[#F47721]"
                        >
                          {phone.label}
                        </a>
                        {index === 0 && ","}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/85">
                    Mon – Sat 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail size={14} className="text-[#F47721]" />
                </div>

                <div className="flex flex-col text-[12px] leading-[1.6]">
                  <a
                    href="mailto:sales@zaron.in"
                    className="hover:text-[#F47721]"
                  >
                    sales@zaron.in
                  </a>

                  <a
                    href="mailto:info@zaron.in"
                    className="hover:text-[#F47721]"
                  >
                    info@zaron.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={14} className="text-[#F47721]" />
                </div>

                <address className="text-[12px] not-italic leading-[1.5] text-white/90">
                  All 5/112, Tirupur Main Rd,
                  <br />
                  Kaikattipudur, post,
                  <br />
                  Palangarai,
                  <br />
                  Tamil Nadu – 641654
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
