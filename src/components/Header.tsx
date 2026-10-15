import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


const socialLinks = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/+919626299966", // Add actual WhatsApp URL
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/rajalakshmi_roofing?igsh=dGJzZWxhbXZkeHU5", // Add actual Instagram URL
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/people/Rajalakshmi-Roofings/pfbid026fUyHM24PcnJJQNpQPECQmHeMLuiviSnG7MjUW68TfTRd3ohDvpS31LeN7p5d4AWl/?rdid=qCt123OppOGV1yLz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18U7y9aXzH%2F", // Add actual Facebook URL
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@rajalakshmiroofing3035", // Add actual YouTube URL
  },
];

export default function Header() {
  return (
    <header className="bg-[#0D161A] text-white">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-6 sm:px-6 md:h-32 lg:h-[170px] lg:px-8">
        <div className="min-w-0 shrink">
          <img
            src="/images/zaron-logo.png"
            alt="Zaron Industries"
            className="block h-auto max-h-20 w-24 max-w-full object-contain sm:max-h-24 sm:w-28 md:max-h-28 md:w-32 lg:max-h-36 lg:w-40"
          />
        </div>

        <div className="flex shrink-0 items-center gap-0 sm:gap-2 md:gap-3 lg:gap-5">
          {socialLinks.map(({ name, icon: Icon, url }) =>
            url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex size-11 shrink-0 items-center justify-center text-2xl text-white sm:text-[26px] lg:text-3xl focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon aria-hidden="true" />
              </a>
            ) : (
              <span
                key={name}
                className="inline-flex size-11 shrink-0 items-center justify-center text-2xl text-white sm:text-[26px] lg:text-3xl focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                role="img"
                aria-label={name}
              >
                <Icon aria-hidden="true" />
              </span>
            )
          )}
        </div>
      </div>
    </header>
  );
}

