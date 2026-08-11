import { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "@/imports/LandingPage/svg-43c3sbdu0y";
import imgHero from "@/imports/LandingPage/23ad9b20b783ec8ecbca8810c3ea0834c3385477.png";
import imgUnion from "@/imports/LandingPage/4503c1ab2b6d0b6005f48ed12d886dcc3fbd9cf4.png";
import imgSection1 from "@/imports/LandingPage/42fdca886c344e9b2fbd5fad6857a94fc829d443.png";
import imgSection2 from "@/imports/LandingPage/3411bb33ee6fdd7728be2a9eb2d05309bab9970a.png";

function Logo() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Blue logo navy text horizontal"
    >
      {/* CloudHost lettering */}
      <div className="col-1 h-[23.62px] ml-[54.12px] mt-[4.79px] relative row-1 w-[138.877px]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="23.6203"
          preserveAspectRatio="none"
          viewBox="0 0 138.877 23.6203"
          width="138.877"
        >
          <g id="Group1000004636">
            <path d={svgPaths.p32155300} fill="white" />
            <path d={svgPaths.p33074e80} fill="white" />
            <path d={svgPaths.p3d2cf200} fill="white" />
            <path d={svgPaths.p184f73a0} fill="white" />
            <path d={svgPaths.p14f4500} fill="white" />
            <path d={svgPaths.p5712100} fill="white" />
            <path d={svgPaths.p3e92db40} fill="white" />
            <path d={svgPaths.p21b40600} fill="white" />
            <path d={svgPaths.p650a800} fill="white" />
          </g>
        </svg>
      </div>
      {/* Cloud icon with ID overlay */}
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
        <div className="col-1 h-[33.361px] ml-0 mt-0 relative row-1 w-[50.574px]">
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            height="33.361"
            src={imgUnion}
            width="50.574"
          />
        </div>
        <div className="col-1 h-[15.976px] ml-[18.46px] mt-[10.47px] relative row-1 w-[14.479px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="15.9763"
            preserveAspectRatio="none"
            viewBox="0 0 14.4787 15.9763"
            width="14.4787"
          >
            <path d={svgPaths.p2ef36b00} fill="#016DFC" />
            <path d={svgPaths.p8fc7600} fill="#016DFC" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = ["Produk", "Harga", "Solusi", "Program", "Bantuan", "Promo"];

  return (
    <nav className="relative z-20 w-full">
      <div className="flex items-center justify-between px-5 py-4 md:px-8 lg:px-[140px]">
        <Logo />

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-[40px] xl:gap-[50px] font-['DM_Sans:Medium',sans-serif] font-medium text-[15px] xl:text-[16px] text-white">
          {navLinks.map((link) => (
            <span key={link} className="cursor-pointer hover:text-white/80 transition-colors">
              {link}
            </span>
          ))}
        </div>

        {/* Tablet nav (fewer links) */}
        <div className="hidden md:flex lg:hidden gap-6 font-['DM_Sans:Medium',sans-serif] font-medium text-[14px] text-white">
          {navLinks.slice(0, 4).map((link) => (
            <span key={link} className="cursor-pointer">{link}</span>
          ))}
        </div>

        {/* Login button – desktop/tablet */}
        <div className="hidden md:flex backdrop-blur-[20px] bg-[rgba(255,255,255,0.2)] rounded-[12px] border border-white/30 cursor-pointer">
          <div className="flex items-center gap-2 px-5 py-3">
            <span
              className="font-['DM_Sans:Bold',sans-serif] font-bold text-[14px] xl:text-[16px] text-white"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              LOGIN
            </span>
            <svg className="size-4" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3bad5400} fill="white" />
            </svg>
          </div>
        </div>

        {/* Hamburger – mobile */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0268fe] border-t border-white/20 px-5 py-4 flex flex-col gap-1 z-50">
          {navLinks.map((link) => (
            <span
              key={link}
              className="font-['DM_Sans:Medium',sans-serif] font-medium text-[16px] text-white py-3 border-b border-white/10 cursor-pointer"
            >
              {link}
            </span>
          ))}
          <div className="mt-3 backdrop-blur-[20px] bg-[rgba(255,255,255,0.2)] rounded-[12px] border border-white/30 w-fit">
            <div className="flex items-center gap-2 px-5 py-3">
              <span className="font-['DM_Sans:Bold',sans-serif] font-bold text-[16px] text-white">
                LOGIN
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const checkItems = [
    "Integrasi AI (ChatGPT, Claude, dll)",
    "Manage server cloud lewat chat",
    "Create VM dengan mudah",
    "Otomatisasi operasional cloud",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0268fe] to-[#1434d6]">
      {/* Desktop/tablet hero image */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block pointer-events-none">
        <img
          alt=""
          className="w-full h-full object-contain object-right-top pt-16"
          src={imgHero}
        />
      </div>

      <Navbar />

      <div className="relative z-10 px-5 pt-8 pb-16 md:px-8 md:pt-12 md:pb-20 lg:px-[140px] lg:pt-16 lg:pb-28">
        <div className="max-w-[640px]">
          <h1
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[30px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[1.3] text-white mb-4"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Menghubungkan AI ke Infrastruktur Cloud dengan Lebih Mudah
          </h1>
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] leading-[2] text-white mb-6"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Kelola server cloud berbasis AI langsung lewat chat. Cukup beri perintah untuk membuat
            dan menjalankan operasional cloud dengan lebih praktis.
          </p>

          <div className="flex flex-col mb-8">
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-4 py-0.5">
                <div className="shrink-0 size-5 relative">
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    viewBox="0 0 16.6667 16.6667"
                  >
                    <path d={svgPaths.p2b5fcd00} fill="white" />
                  </svg>
                </div>
                <span
                  className="font-['DM_Sans:Regular',sans-serif] font-normal text-[15px] lg:text-[18px] leading-[2] text-white"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button
            className="rounded-[12px] px-7 py-4 font-['DM_Sans:Bold',sans-serif] font-bold text-[15px] lg:text-[16px] text-white cursor-pointer"
            style={{
              backgroundImage:
                "linear-gradient(168.73deg, rgb(253, 161, 77) 0%, rgb(253, 77, 246) 100%)",
            }}
          >
            Mulai Konfigurasi Sekarang
          </button>
        </div>

        {/* Hero image on mobile – below text */}
        <div className="md:hidden mt-10 w-full max-w-[340px] mx-auto">
          <img alt="" className="w-full object-contain" src={imgHero} />
        </div>
      </div>
    </section>
  );
}

function McpSection() {
  return (
    <section className="bg-white w-full py-14 md:py-20 lg:py-[100px] px-5 md:px-8 lg:px-[165px]">
      <div className="max-w-[1110px] mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-10 items-center">
        {/* Illustration */}
        <div className="w-full md:w-[45%] lg:w-[512px] shrink-0">
          <img
            alt="MCP Server Illustration"
            className="w-full max-h-[430px] object-contain"
            src={imgSection1}
          />
        </div>

        {/* Text content */}
        <div className="w-full md:flex-1 flex flex-col gap-4 items-start">
          <h2
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.3] text-[#1b2c42]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            MCP Server IDCloudHost
          </h2>
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-[15px] lg:text-[16px] leading-[1.75] text-[#8292a6]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            MCP Server IDCloudHost merupakan sebuah solusi untuk menghubungkan AI dengan server
            cloud, Anda bisa manage server cloud dengan lebih mudah, cepat, dan otomatis.
          </p>
          <button
            className="bg-[#016dfc] px-7 py-4 rounded-[8px] font-['DM_Sans:Bold',sans-serif] font-bold text-[15px] lg:text-[16px] text-white mt-1 cursor-pointer"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Konfigurasi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}

type StepCardProps = {
  iconPath: string;
  title: string;
  description: string;
};

function StepCard({ iconPath, title, description }: StepCardProps) {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] rounded-[16px] w-full">
      <div className="flex gap-3 items-start p-6 lg:p-8">
        <div className="shrink-0 size-[60px]">
          <svg className="block size-full" fill="none" viewBox="0 0 60 60">
            <circle cx="30" cy="30" fill="#016DFC" fillOpacity="0.1" r="30" />
            <path d={iconPath} fill="#016DFC" />
          </svg>
        </div>
        <div className="flex flex-col gap-2 items-start flex-1 min-w-0">
          <p
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[17px] lg:text-[18px] leading-[1.5] text-[#1b2c42]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {title}
          </p>
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-[15px] lg:text-[16px] leading-[1.75] text-[#8292a6]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CloudSpeedSection() {
  return (
    <section className="bg-white w-full py-14 md:py-20 lg:py-[100px] px-5 md:px-8 lg:px-[165px]">
      <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-center">
        {/* Text + step cards */}
        <div className="w-full md:flex-1 flex flex-col gap-4 md:gap-6 items-start">
          <h2
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.3] text-[#1b2c42]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Jalankan Cloud Lebih Cepat dengan AI
          </h2>
          <div className="flex flex-col gap-5 md:gap-6 w-full">
            <StepCard
              iconPath={svgPaths.p2f011c00}
              title="Buat Token Akses"
              description="Dapatkan token dari panel IDCloudHost dengan kontrol akses yang aman dan fleksibel."
            />
            <StepCard
              iconPath={svgPaths.p39c3dc00}
              title="Hubungkan ke AI favorit Anda"
              description="Integrasikan MCP dengan ChatGPT, Claude, atau AI lainnya tanpa setup yang rumit."
            />
            <StepCard
              iconPath={svgPaths.p3bc50980}
              title="Jalankan semua lewat chat"
              description="Buat VM, cek billing dan kelola server cukup dengan perintah sederhana, semua dalam satu percakapan."
            />
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-[45%] lg:w-[512px] shrink-0">
          <img
            alt="AI Cloud Illustration"
            className="w-full max-h-[430px] object-contain"
            src={imgSection2}
          />
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  iconPath: string;
  title: string;
  description: string;
};

function FeatureCard({ iconPath, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] rounded-[16px] h-full">
      <div className="flex flex-col gap-3 items-start p-6 lg:p-8 h-full">
        <div className="shrink-0 size-[60px]">
          <svg className="block size-full" fill="none" viewBox="0 0 60 60">
            <circle cx="30" cy="30" fill="#016DFC" r="30" />
            <path d={iconPath} fill="white" />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <p
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[17px] lg:text-[18px] leading-[1.5] text-[#1b2c42]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {title}
          </p>
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-[15px] lg:text-[16px] leading-[1.75] text-[#8292a6]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      iconPath: svgPaths.pa478680,
      title: "Kelola Server Lebih Praktis",
      description:
        "Buat, jalankan, stop, atau ubah spesifikasi VM hanya dengan perintah. Tidak perlu lagi klik manual di dashboard.",
    },
    {
      iconPath: svgPaths.pdecf080,
      title: "Atur Storage dan Disk dengan Mudah",
      description:
        "Tambah kapasitas, attach disk, atau kelola storage tanpa konfigurasi yang rumit.",
    },
    {
      iconPath: svgPaths.pb802500,
      title: "Manajemen Network dalam Satu Jalur",
      description:
        "Atur IP, firewall, hingga jaringan dengan lebih cepat tanpa berpindah-pindah menu.",
    },
    {
      iconPath: svgPaths.p1ae4db00,
      title: "Monitoring Billing Secara Real-Time",
      description:
        "Cek tagihan, penggunaan resource, dan biaya langsung dari percakapan.",
    },
    {
      iconPath: svgPaths.p1434700,
      title: "Automasi Tanpa Coding Ribet",
      description:
        "Jalankan tugas berulang seperti provisioning atau scaling tanpa perlu script kompleks.",
    },
    {
      iconPath: svgPaths.p1122baf0,
      title: "Kontrol Cloud Lebih Cepat dengan AI",
      description:
        "Cukup beri instruksi, dan sistem akan membantu mengeksekusi operasional cloud secara otomatis.",
    },
  ];

  return (
    <section className="bg-white w-full py-14 md:py-20 lg:py-[80px] px-5 md:px-8 lg:px-[165px]">
      <div className="max-w-[1110px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="text-center">
          <h2
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.3] text-[#1b2c42]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Kemudahan Mengelola Cloud dengan MCP Server
          </h2>
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-[14px] lg:text-[16px] leading-[1.75] text-[#8292a6] mt-2"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Dengan MCP Server, semua operasional cloud bisa dilakukan dalam satu alur kerja berbasis
            AI
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              iconPath={f.iconPath}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnnouncementIcon({ active }: { active: boolean }) {
  return (
    <div className="flex items-center justify-center shrink-0">
      <div className="-scale-y-100 rotate-180">
        <svg className="size-6" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.p120675b1} fill={active ? "#016DFC" : "#C0CCDB"} />
        </svg>
      </div>
    </div>
  );
}

function FaqSection() {
  const questions = [
    "Apa saja yang bisa dilakukan dengan MCP Server?",
    "Apakah MCP Server sulit digunakan?",
    "Bisa digunakan dengan AI apa saja?",
  ];

  return (
    <section className="bg-white w-full py-14 md:py-20 lg:py-[100px] px-5 md:px-8 lg:px-[165px]">
      <div className="max-w-[1110px] mx-auto flex flex-col gap-8 md:gap-10 items-center">
        <div className="text-center">
          <h2
            className="font-['DM_Sans:Bold',sans-serif] font-bold text-[26px] sm:text-[32px] lg:text-[40px] text-[#1b2c42] leading-[1.5]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            FAQ MCP Server
          </h2>
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-[14px] lg:text-[16px] text-[#8292a6] mt-1"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Pertanyaan yang sering diajukan terkait Layanan MCP Server
          </p>
        </div>

        <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] rounded-[15px] w-full flex flex-col md:flex-row overflow-hidden">
          {/* Questions sidebar */}
          <div className="md:w-[380px] lg:w-[475px] shrink-0 flex flex-col border-b md:border-b-0 md:border-r border-[#8392A6]/25">
            <div className="bg-white p-5 border-b border-[#8392A6]/15">
              <p
                className="font-['DM_Sans:Bold',sans-serif] font-bold text-[20px] lg:text-[24px] text-[#1b2c42]"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                FAQ
              </p>
            </div>

            {/* Active question */}
            <div className="bg-[rgba(77,168,253,0.15)] p-4 lg:p-5 flex gap-4 lg:gap-5 items-center">
              <AnnouncementIcon active />
              <p
                className="font-['DM_Sans:Bold',sans-serif] font-bold text-[15px] lg:text-[16px] leading-[1.75] text-[#016dfc]"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                Apa itu MCP Server IDCloudHost?
              </p>
            </div>

            {/* Other questions */}
            {questions.map((q) => (
              <div
                key={q}
                className="bg-white p-4 lg:p-5 flex gap-4 lg:gap-5 items-center border-t border-[#8392A6]/15 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <AnnouncementIcon active={false} />
                <p
                  className="font-['DM_Sans:Medium',sans-serif] font-medium text-[14px] lg:text-[16px] leading-[1.75] text-[#1b2c42]"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {q}
                </p>
              </div>
            ))}
          </div>

          {/* Answer panel */}
          <div className="flex-1 p-5 md:p-6 lg:p-8 flex flex-col gap-4 justify-center">
            <p
              className="font-['DM_Sans:Bold',sans-serif] font-bold text-[20px] lg:text-[24px] leading-[1.75] text-[#1b2c42]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Apa itu MCP Server IDCloudHost?
            </p>
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal text-[14px] lg:text-[16px] leading-[2] text-[#8292a6]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              MCP Server adalah solusi untuk menghubungkan AI dengan server cloud, sehingga Anda
              bisa mengelola operasional cloud langsung lewat chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socialPaths = [
    svgPaths.p3a493480,
    svgPaths.p31ee2f40,
    svgPaths.p26d92f00,
    svgPaths.p3218d600,
    svgPaths.p1dc3de00,
    svgPaths.p1cdb3380,
  ];

  const serviceLinks = [
    "Cloud VPS",
    "Server VPS",
    "Cloud Hosting",
    "Dedicated Server",
    "Layanan Lainnya",
  ];
  const companyLinks = [
    "Tentang Perusahaan",
    "Afiliasi",
    "Tanya Jawab",
    "Ketentuan Layanan",
    "Request Penawaran",
  ];
  const otherLinks = ["Pembayaran", "Status Server", "Promo", "Panduan", "Blog"];

  return (
    <footer className="bg-[#0c1e46] w-full pt-10 md:pt-12 lg:pt-[50px] pb-6 px-5 md:px-8 lg:px-[165px]">
      <div className="max-w-[1110px] mx-auto flex flex-col gap-8 md:gap-10">
        {/* Top content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]">
          {/* About block */}
          <div className="flex flex-col gap-3 lg:max-w-[380px] shrink-0">
            <p
              className="font-['DM_Sans:Bold',sans-serif] font-bold text-[18px] lg:text-[20px] text-white capitalize"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              About IDCloudHost
            </p>
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal text-[13px] lg:text-[14px] leading-[2] text-[#8292a6]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              IDCloudHost (PT Cloud Hosting Indonesia) adalah penyedia layanan Web Hosting Provider
              berbasis SSD Cloud Hosting yang mempunyai tujuan untuk selalu menjaga website tetap
              hidup dan cepat di akses dari berbagai negara. Saat ini tersedia Beberapa Data Center
              Utama yang dapat Anda gunakan dengan berlangganan menggunakan layanan Kami.
            </p>
            <div className="flex gap-2 items-center flex-wrap">
              {socialPaths.map((path, i) => (
                <svg key={i} className="size-6 cursor-pointer" fill="none" viewBox="0 0 24 24">
                  <path d={path} fill="#8292A6" />
                </svg>
              ))}
            </div>
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal text-[13px] lg:text-[14px] leading-[2] text-[#8292a6]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Tim Support kami siap membantu Anda selama 24 jam. Hubungi{" "}
              <span className="text-[#016dfc] cursor-pointer">Tim Support</span>
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-0 lg:flex lg:gap-[40px] xl:gap-[83px] flex-1 lg:ml-8">
            {[
              { title: "Service", links: serviceLinks },
              { title: "Company", links: companyLinks },
              { title: "Links", links: otherLinks },
            ].map(({ title, links }) => (
              <div key={title} className="flex flex-col">
                <p
                  className="font-['DM_Sans:Bold',sans-serif] font-bold text-[15px] lg:text-[20px] text-white leading-[2.75]"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {title}
                </p>
                {links.map((link) => (
                  <p
                    key={link}
                    className="font-['DM_Sans:Regular',sans-serif] font-normal text-[12px] lg:text-[15px] leading-[2.75] text-[#8292a6] cursor-pointer hover:text-white/80 transition-colors"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-3">
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-[13px] lg:text-[14px] leading-[2] text-[#8292a6]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            2015 - 2024 © PT Cloud Hosting Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <McpSection />
      <CloudSpeedSection />
      <FeaturesSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
