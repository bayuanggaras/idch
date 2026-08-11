import svgPaths from "./svg-43c3sbdu0y";
import imgAheroImg1 from "./23ad9b20b783ec8ecbca8810c3ea0834c3385477.png";
import imgUnion from "./4503c1ab2b6d0b6005f48ed12d886dcc3fbd9cf4.png";
import imgAIllustrasiSection11 from "./42fdca886c344e9b2fbd5fad6857a94fc829d443.png";
import imgZIllustrasiSection21 from "./3411bb33ee6fdd7728be2a9eb2d05309bab9970a.png";
type ButtonProps = {
  className?: string;
  property1?: "Login" | "Primary";
};

function Button({ className, property1 = "Login" }: ButtonProps) {
  const isLogin = property1 === "Login";
  const isPrimary = property1 === "Primary";
  return (
    <div className={className || `relative rounded-[12px] ${isPrimary ? "bg-[#016dfc]" : "backdrop-blur-[20px] bg-[rgba(255,255,255,0.2)]"}`}>
      <div aria-hidden={isLogin ? true : undefined} className={isPrimary ? "flex flex-row items-center justify-center size-full" : "absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]"}>
        {isPrimary && (
          <div className="content-stretch flex items-center justify-center px-[28px] py-[16px] relative size-full">
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
              Primary Button
            </p>
          </div>
        )}
      </div>
      {isLogin && (
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[16px] relative size-full">
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
              LOGIN
            </p>
            <div className="relative shrink-0 size-[20px]" data-name="Keyboard arrow down">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
                <g clipPath="url(#clip0_0_83)" id="Keyboard arrow down">
                  <g id="Vector" />
                  <path d={svgPaths.p3bad5400} fill="white" id="Vector_2" />
                </g>
                <defs>
                  <clipPath id="clip0_0_83">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Background() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Background">
      <div className="absolute bg-gradient-to-b from-[#0268fe] h-[787px] left-0 to-[#1434d6] to-[111.56%] top-0 w-[1440px]" />
      <div className="absolute h-[527px] left-[758px] top-[144px] w-[682px]" data-name="ahero-img 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAheroImg1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[23.62px] ml-[54.12px] mt-[4.79px] relative row-1 w-[138.877px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.6203" preserveAspectRatio="none" viewBox="0 0 138.877 23.6203" width="138.877">
        <g id="Group 1000004636">
          <path d={svgPaths.p32155300} fill="white" id="C" />
          <path d={svgPaths.p33074e80} fill="white" id="l" />
          <path d={svgPaths.p3d2cf200} fill="white" id="o" />
          <path d={svgPaths.p184f73a0} fill="white" id="u" />
          <path d={svgPaths.p14f4500} fill="white" id="d" />
          <path d={svgPaths.p5712100} fill="white" id="H" />
          <path d={svgPaths.p3e92db40} fill="white" id="o_2" />
          <path d={svgPaths.p21b40600} fill="white" id="s" />
          <path d={svgPaths.p650a800} fill="white" id="t" />
        </g>
      </svg>
    </div>
  );
}

function Id() {
  return (
    <div className="col-1 h-[15.976px] ml-[18.46px] mt-[10.47px] relative row-1 w-[14.479px]" data-name="Id">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.9763" preserveAspectRatio="none" viewBox="0 0 14.4787 15.9763" width="14.4787">
        <g id="Id">
          <path d={svgPaths.p2ef36b00} fill="#016DFC" id="Vector" />
          <path d={svgPaths.p8fc7600} fill="#016DFC" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[33.361px] ml-0 mt-0 relative row-1 w-[50.574px]" data-name="Union">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="33.361" src={imgUnion} width="50.574" />
      </div>
      <Id />
    </div>
  );
}

function BlueLogoNavyTextHorizontal() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Blue logo navy text horizontal">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['DM_Sans:Medium',sans-serif] font-medium gap-[50px] items-start leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap">
      <p className="relative shrink-0 text-white" style={{ fontVariationSettings: '"opsz" 14' }}>
        Produk
      </p>
      <p className="relative shrink-0 text-[#f2f2f2]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Harga
      </p>
      <p className="relative shrink-0 text-[#f2f2f2]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Solusi
      </p>
      <p className="relative shrink-0 text-[#f2f2f2]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Program
      </p>
      <p className="relative shrink-0 text-[#f2f2f2]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Bantuan
      </p>
      <p className="relative shrink-0 text-[#f2f2f2]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Promo
      </p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute content-stretch flex gap-[196px] items-center justify-center left-0 overflow-clip px-[15px] py-[7px] top-0 w-[1440px]" data-name="Navbar">
      <BlueLogoNavyTextHorizontal />
      <Frame18 />
      <Button className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.2)] relative rounded-[12px] shrink-0" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[48px] w-[636px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Menghubungkan AI ke Infrastruktur Cloud dengan Lebih Mudah
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2] min-w-full relative shrink-0 text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Kelola server cloud berbasis AI langsung lewat chat. Cukup beri perintah untuk membuat dan menjalankan operasional cloud dengan lebih praktis.
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check_circle">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <path d={svgPaths.p2b5fcd00} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[2] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Integrasi AI (ChatGPT, Claude, dll)
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check_circle">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <path d={svgPaths.p2b5fcd00} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[2] min-w-px relative text-[18px] text-white" style={{ fontVariationSettings: '"opsz" 14' }}>
        Manage server cloud lewat chat
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check_circle">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <path d={svgPaths.p2b5fcd00} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[2] min-w-px relative text-[18px] text-white" style={{ fontVariationSettings: '"opsz" 14' }}>
        Create VM dengan mudah
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check_circle">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <path d={svgPaths.p2b5fcd00} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[2] min-w-px relative text-[18px] text-white" style={{ fontVariationSettings: '"opsz" 14' }}>
        Otomatisasi operasional cloud
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <div className="relative rounded-[12px] shrink-0" style={{ backgroundImage: "linear-gradient(168.73149613735208deg, rgb(253, 161, 77) 0%, rgb(253, 77, 246) 100%)" }} data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[28px] py-[16px] relative size-full">
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
              Mulai Konfigurasi Sekarang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderTitle() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[15px] items-start left-0 px-[140px] top-[calc(50%+39.96px)]" data-name="Header Title">
      <Frame33 />
      <Frame34 />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="-translate-x-1/2 absolute h-[707.553px] left-1/2 top-[2px] w-[1440px]">
      <Navbar />
      <HeaderTitle />
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[2px]">
      <Frame20 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white h-[787px] overflow-clip relative shrink-0 w-[1440px]" data-name="Hero Section">
      <Background />
      <Group2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#016dfc] content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Konfigurasi Sekarang
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.3] min-w-full relative shrink-0 text-[#1b2c42] text-[40px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        MCP Server IDCloudHost
      </p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        MCP Server IDCloudHost merupakan sebuah solusi untuk menghubungkan AI dengan server cloud, Anda bisa manage server cloud dengan lebih mudah, cepat, dan otomatis.
      </p>
      <Button1 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-center px-[165px] py-[100px] relative size-full">
          <div className="h-[429.5px] relative shrink-0 w-[512px]" data-name="aIllustrasi Section 1 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAIllustrasiSection11} />
          </div>
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" fillOpacity="0.1" id="Ellipse 6" r="30" />
          <g id="copper-coin-line">
            <path d={svgPaths.p2f011c00} fill="#016DFC" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Buat Token Akses
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Dapatkan token dari panel IDCloudHost dengan kontrol akses yang aman dan fleksibel.
      </p>
    </div>
  );
}

function Feature() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="Feature">
      <div className="content-stretch flex gap-[12px] items-start p-[32px] relative size-full">
        <Frame36 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" fillOpacity="0.1" id="Ellipse 6" r="30" />
          <g id="robot-2-line">
            <path d={svgPaths.p39c3dc00} fill="#016DFC" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Hubungkan ke AI favorit Anda
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Integrasikan MCP dengan ChatGPT, Claude, atau AI lainnya tanpa setup yang rumit.
      </p>
    </div>
  );
}

function Feature1() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="Feature">
      <div className="content-stretch flex gap-[12px] items-start p-[32px] relative size-full">
        <Frame37 />
        <Frame7 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" fillOpacity="0.1" id="Ellipse 6" r="30" />
          <g id="message-3-line">
            <path d={svgPaths.p3bc50980} fill="#016DFC" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Jalankan semua lewat chat
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Buat VM, cek billing dan kelola server cukup dengan perintah sederhana, semua dalam satu percakapan.
      </p>
    </div>
  );
}

function Feature2() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="Feature">
      <div className="content-stretch flex gap-[12px] items-start p-[32px] relative size-full">
        <Frame38 />
        <Frame8 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Feature />
      <Feature1 />
      <Feature2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#1b2c42] text-[40px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Jalankan Cloud Lebih Cepat dengan AI
      </p>
      <Frame35 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[40px] items-center justify-center px-[165px] py-[100px] relative size-full">
          <Frame11 />
          <div className="h-[429.5px] relative shrink-0 w-[512px]" data-name="zIllustrasi Section 2 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZIllustrasiSection21} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 text-center w-full" data-name="Title">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#1b2c42] text-[40px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Kemudahan Mengelola Cloud dengan MCP Server
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] relative shrink-0 text-[#8292a6] text-[16px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        Dengan MCP Server, semua operasional cloud bisa dilakukan dalam satu alur kerja berbasis AI
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" id="Ellipse 6" r="30" />
          <g id="hard-drive-3-line">
            <path d={svgPaths.pa478680} fill="white" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Kelola Server Lebih Praktis
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Buat, jalankan, stop, atau ubah spesifikasi VM hanya dengan perintah. Tidak perlu lagi klik manual di dashboard.
      </p>
    </div>
  );
}

function Feature3() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Feature">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Frame40 />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" id="Ellipse 6" r="30" />
          <g id="u-disk-line">
            <path d={svgPaths.pdecf080} fill="white" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Atur Storage dan Disk dengan Mudah
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] relative shrink-0 text-[#8292a6] text-[16px] w-[307px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Tambah kapasitas, attach disk, atau kelola storage tanpa konfigurasi yang rumit.
      </p>
    </div>
  );
}

function Feature4() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Feature">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Frame41 />
        <Frame12 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" id="Ellipse 6" r="30" />
          <g id="router-line">
            <path d={svgPaths.pb802500} fill="white" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Manajemen Network dalam Satu Jalur
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Atur IP, firewall, hingga jaringan dengan lebih cepat tanpa berpindah-pindah menu.
      </p>
    </div>
  );
}

function Feature5() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Feature">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Frame42 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Feature3 />
      <Feature4 />
      <Feature5 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004571">
          <circle cx="30" cy="30" fill="#016DFC" id="Ellipse 6" r="30" />
          <g id="computer-line">
            <path d={svgPaths.p1ae4db00} fill="white" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Monitoring Billing Secara Real-Time
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Cek tagihan, penggunaan resource, dan biaya langsung dari percakapan.
      </p>
    </div>
  );
}

function Feature6() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Feature">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Frame44 />
        <Frame14 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" id="Ellipse 6" r="30" />
          <g id="code-ai-line">
            <path d={svgPaths.p1434700} fill="white" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Automasi Tanpa Coding Ribet
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Jalankan tugas berulang seperti provisioning atau scaling tanpa perlu script kompleks.
      </p>
    </div>
  );
}

function Feature7() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Feature">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Frame45 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="Frame 1000004572">
          <circle cx="30" cy="30" fill="#016DFC" id="Ellipse 6" r="30" />
          <g id="remote-control-line">
            <path d={svgPaths.p1122baf0} fill="white" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[#1b2c42] text-[18px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Kontrol Cloud Lebih Cepat dengan AI
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#8292a6] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Cukup beri instruksi, dan sistem akan membantu mengeksekusi operasional cloud secara otomatis.
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame51 />
    </div>
  );
}

function Feature8() {
  return (
    <div className="bg-white drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="Feature">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[32px] relative size-full">
        <Frame46 />
        <Frame16 />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Feature6 />
      <Feature7 />
      <Feature8 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame43 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-center justify-center px-[165px] py-[80px] relative shrink-0 w-[1440px]" data-name="Section 3">
      <Title />
      <Frame50 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center leading-[1.5] relative shrink-0 text-center w-full whitespace-nowrap">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#1b2c42] text-[40px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        FAQ MCP Server
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#8292a6] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Pertanyaan yang sering diajukan terkait Layanan MCP Server
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex items-center p-[20px] relative shrink-0 w-[475px]">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1b2c42] text-[24px] w-[179px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        FAQ
      </p>
    </div>
  );
}

function IcRoundAnnouncement() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[24px]" data-name="ic:round-announcement">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <g id="ic:round-announcement">
              <path d={svgPaths.p120675b1} fill="#016DFC" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(77,168,253,0.15)] content-stretch flex gap-[20px] items-center p-[20px] relative shrink-0 w-[475px]">
      <IcRoundAnnouncement />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.75] relative shrink-0 text-[#016dfc] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        Apa itu MCP Server IDCloudHost?
      </p>
    </div>
  );
}

function IcRoundAnnouncement1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[24px]" data-name="ic:round-announcement">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <g id="ic:round-announcement">
              <path d={svgPaths.p120675b1} fill="#C0CCDB" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center p-[20px] relative shrink-0 w-[475px]">
      <IcRoundAnnouncement1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.75] min-w-px relative text-[#1b2c42] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Apa saja yang bisa dilakukan dengan MCP Server?
      </p>
    </div>
  );
}

function IcRoundAnnouncement2() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[24px]" data-name="ic:round-announcement">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <g id="ic:round-announcement">
              <path d={svgPaths.p120675b1} fill="#C0CCDB" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center p-[20px] relative shrink-0 w-[475px]">
      <IcRoundAnnouncement2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.75] min-w-px relative text-[#1b2c42] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Apakah MCP Server sulit digunakan?
      </p>
    </div>
  );
}

function IcRoundAnnouncement3() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[24px]" data-name="ic:round-announcement">
          <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
            <g id="ic:round-announcement">
              <path d={svgPaths.p120675b1} fill="#C0CCDB" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center p-[20px] relative shrink-0 w-[475px]">
      <IcRoundAnnouncement3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.75] min-w-px relative text-[#1b2c42] text-[16px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Bisa digunakan dengan AI apa saja?
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame26 />
      <Frame30 />
      <Frame27 />
      <Frame31 />
      <Frame29 />
    </div>
  );
}

function Frame49() {
  return <div className="relative self-stretch shrink-0 w-[4px]" />;
}

function Frame28() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start justify-center leading-[2] p-[20px] relative size-full">
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#1b2c42] text-[24px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
            Apa itu MCP Server IDCloudHost?
          </p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#8292a6] text-[16px] w-[524px]" style={{ fontVariationSettings: '"opsz" 14' }}>
            MCP Server adalah solusi untuk menghubungkan AI dengan server cloud, sehingga Anda bisa mengelola operasional cloud langsung lewat chat.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start px-[10px] relative self-stretch shrink-0">
      <Frame28 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_16px_32px_rgba(0,7,46,0.04)] flex items-start p-[20px] relative rounded-[15px] shrink-0" data-name="FAQ">
      <Frame24 />
      <div className="relative self-stretch shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="343" preserveAspectRatio="none" viewBox="0 0 1 343" width="1">
            <path d="M0.5 0V343" id="Vector 1" stroke="#8392A6" strokeOpacity="0.25" />
          </svg>
        </div>
      </div>
      <Frame49 />
      <Frame25 />
    </div>
  );
}

function SectionFaq() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section FAQ">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[165px] py-[100px] relative size-full">
          <Frame32 />
          <Faq />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0">
      <p className="capitalize font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white w-[540px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        About IDCloudHost
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2] min-w-full relative shrink-0 text-[#8292a6] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"opsz" 14' }}>
        IDCloudHost (PT Cloud Hosting Indonesia) adalah penyedia layanan Web Hosting Provider berbasis SSD Cloud Hosting yang mempunyai tujuan untuk selalu menjaga website tetap hidup dan cepat di akses dari berbagai negara. Saat ini tersedia Beberapa Data Center Utama yang dapat Anda gunakan dengan berlangganan menggunakan layanan Kami.
      </p>
    </div>
  );
}

function EntypoSocialFacebookWithCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="entypo-social:facebook-with-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="entypo-social:facebook-with-circle">
          <path d={svgPaths.p3a493480} fill="#8292A6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EntypoSocialInstagramWithCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="entypo-social:instagram-with-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="entypo-social:instagram-with-circle">
          <path d={svgPaths.p31ee2f40} fill="#8292A6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EntypoSocialTwitterWithCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="entypo-social:twitter-with-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="entypo-social:twitter-with-circle">
          <path d={svgPaths.p26d92f00} fill="#8292A6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EntypoSocialLinkedinWithCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="entypo-social:linkedin-with-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="entypo-social:linkedin-with-circle">
          <path d={svgPaths.p3218d600} fill="#8292A6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EntypoSocialYoutubeWithCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="entypo-social:youtube-with-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="entypo-social:youtube-with-circle">
          <path d={svgPaths.p1dc3de00} fill="#8292A6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EntypoSocialPinterestWithCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="entypo-social:pinterest-with-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="entypo-social:pinterest-with-circle">
          <path d={svgPaths.p1cdb3380} fill="#8292A6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <EntypoSocialFacebookWithCircle />
      <EntypoSocialInstagramWithCircle />
      <EntypoSocialTwitterWithCircle />
      <EntypoSocialLinkedinWithCircle />
      <EntypoSocialYoutubeWithCircle />
      <EntypoSocialPinterestWithCircle />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame2 />
      <Frame />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#8292a6] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
        <span className="leading-[2]">{`Tim Support kami siap membantu Anda selama 24 jam. Hubungi `}</span>
        <span className="leading-[2] text-[#016dfc]">Tim Support</span>
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] capitalize content-stretch flex font-['Proxima_Nova:Regular',sans-serif] gap-[83px] items-start leading-[0] not-italic relative shrink-0 text-[#8b8b8b] text-[0px]">
      <div className="relative shrink-0 w-[145px]">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[2.75] mb-0 text-[20px] text-white" style={{ fontVariationSettings: '"opsz" 14' }}>
          Service
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Cloud VPS
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Server VPS
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Cloud Hosting
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Dedicated Server
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Layanan Lainnya
        </p>
      </div>
      <div className="relative shrink-0 whitespace-nowrap">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[2.75] mb-0 text-[20px] text-white" style={{ fontVariationSettings: '"opsz" 14' }}>
          Company
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Tentang Perusahaan
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Afiliasi
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Tanya Jawab
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Ketentuan Layanan
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Request Penawaran
        </p>
      </div>
      <div className="relative shrink-0 whitespace-nowrap">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[2.75] mb-0 text-[20px] text-white" style={{ fontVariationSettings: '"opsz" 14' }}>
          Links
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Pembayaran
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Status Server
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Promo
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] mb-0 text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Panduan
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[2.75] text-[#8292a6] text-[15px]" style={{ fontVariationSettings: '"opsz" 14' }}>
          Blog
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-[1113px]">
      <Frame3 />
      <Frame48 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[2] min-w-px relative text-[#8292a6] text-[14px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        2015 - 2024 © PT Cloud Hosting Indonesia
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
      <Frame4 />
      <Frame1 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#0c1e46] content-stretch flex flex-col items-center justify-center overflow-clip pb-[25px] pt-[50px] px-[165px] relative shrink-0 w-[1440px]">
      <Frame5 />
    </div>
  );
}

function SectionFooter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Footer">
      <Frame47 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Landing-Page">
      <HeroSection />
      <Section />
      <Section1 />
      <Section2 />
      <SectionFaq />
      <SectionFooter />
    </div>
  );
}