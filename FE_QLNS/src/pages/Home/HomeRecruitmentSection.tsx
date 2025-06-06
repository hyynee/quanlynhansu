import { useNavigate } from "react-router";

const HomeRecruitmentSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-20" id="recruitments">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Tuyển Dụng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Cơ Hội Nghề Nghiệp
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Công ty CyberSoft luôn chào đón các ứng viên có tài năng và nhiệt
              huyết để tham gia vào đội ngũ của chúng tôi. Chúng tôi cung cấp
              một môi trường làm việc đa dạng, năng động và thú vị.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Chúng tôi đang tìm kiếm các ứng viên cho các vị trí sau:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
              <li>Lập trình viên Front-end</li>
              <li>Lập trình viên Back-end</li>
              <li>Thiết kế đồ họa</li>
              <li>Kỹ sư phần mềm</li>
              <li>Quản lý dự án</li>
              <li>Và nhiều vị trí khác...</li>
            </ul>
            <p className="text-lg text-gray-700 mb-4">
              Nếu bạn quan tâm và muốn tham gia vào đội ngũ của chúng tôi, hãy
              gửi CV của bạn đến địa chỉ email{" "}
              <span className="font-semibold">recruitment@companyabc.com</span>.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Chúng tôi rất mong được làm việc cùng bạn!
            </p>
          </div>
          <div className="h-full flex flex-col justify-between">
            <img
              src="/src/assets/image/hiring.png"
              alt="Hiring"
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => navigate("/recruitments")}
              className="px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-md shadow-md transition-all"
            >
              Nộp hồ sơ ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecruitmentSection;
