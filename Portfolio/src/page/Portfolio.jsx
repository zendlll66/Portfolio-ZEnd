export default function PortfolioPage() {
  return (
    <div className="relative bg-black h-screen w-screen overflow-y-auto">
      <div className="w-full h-full px-10 relative  left-[50%] translate-x-[-50%] text-[48px] overflow-y-auto">
        <div className="text-center space-x-3 mt-20">
          <label className="text-white font-extrabold">PORTFOLIO</label>
        </div>
        <div className=" grid md:grid-cols-3 gap-5 mt-[80px] w-fit mx-auto mb-20">
          {/* การ์ดซ้ำ */}
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="bg-[#191919] h-auto w-auto rounded-[24px] overflow-hidden"
              >
                <img
                  className=""
                  src="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
                  alt="Sample"
                />
                <div className="p-5 space-y-2">
                  <h2 className="text-white text-[24px]">
                    <a href="#">View All Projects</a>
                  </h2>
                  <p className="text-[15px] text-white text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, eligendi.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
