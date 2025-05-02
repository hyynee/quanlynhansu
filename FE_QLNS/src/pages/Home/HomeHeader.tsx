import "../../assets/style/HomeHeader.css";

const HomeHeader = () => {
  return (
    <header
      className="container p-20 text-center mb-12 bg-no-repeat bg-cover bg-center h-[600px] rounded-md shadow-lg mx-auto"
      style={{ backgroundImage: `url('/src/assets/image/slider2.png')` }}
    >
      <div className="sloganContainer flex justify-center items-center flex-col gap-5 ">
        <h1>Chào mừng</h1>
        <h1>đến với hệ thống quản lý </h1>
        <h1>
          <span>NhânSự</span>
        </h1>
        <button className="btnGlobal btnSlider mt-4 bg-yellow-500 text-white font-bold hover:bg-yellow-400">
          Bắt đầu nào
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
