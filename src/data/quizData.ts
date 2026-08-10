export interface QuizQuestionType {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
}

export const quizQuestions: QuizQuestionType[] = [
  {
    id: 1,
    question: "Theo Hồ Chí Minh, lộ trình giải phóng đúng đắn tại các nước thuộc địa phương Đông diễn ra theo trình tự nào?",
    options: {
      A: "Giải phóng giai cấp -> Giải phóng dân tộc -> Giải phóng xã hội -> Giải phóng con người.",
      B: "Giải phóng dân tộc -> Giải phóng xã hội -> Giải phóng giai cấp -> Giải phóng con người.",
      C: "Giải phóng xã hội -> Giải phóng dân tộc -> Giải phóng con người.",
      D: "Giải phóng giai cấp -> Giải phóng xã hội -> Giải phóng con người."
    },
    correctAnswer: "B",
    explanation: "Ở thuộc địa phương Đông, mâu thuẫn dân tộc bao trùm mâu thuẫn giai cấp nên phải giải phóng dân tộc trước."
  },
  {
    id: 2,
    question: "Công thức thành lập Đảng Cộng sản Việt Nam của Hồ Chí Minh có thêm yếu tố nào so với lý luận mác-xít truyền thống?",
    options: {
      A: "Phong trào dân chủ tư sản.",
      B: "Phong trào yêu nước.",
      C: "Phong trào cải cách văn hóa.",
      D: "Khối liên minh quốc tế."
    },
    correctAnswer: "B",
    explanation: "Người bổ sung phong trào yêu nước vì đây là bệ đỡ tinh thần cực kỳ mạnh mẽ của toàn thể dân chúng Việt Nam."
  },
  {
    id: 3,
    question: "Mục tiêu hàng đầu được Cương lĩnh chính trị đầu tiên (1930) xác định là gì?",
    options: {
      A: "Tiến hành cách mạng ruộng đất triệt để.",
      B: "Đánh đổ đế quốc Pháp, làm cho nước Nam được hoàn toàn độc lập.",
      C: "Thành lập Chính phủ liên bang Đông Dương.",
      D: "Xây dựng ngay nền kinh tế xã hội chủ nghĩa."
    },
    correctAnswer: "B",
    explanation: "Đặt độc lập dân tộc lên hàng đầu, trên hết và trước hết; tạm gác cách mạng điền địa."
  },
  {
    id: 4,
    question: "Luận điểm sáng tạo lớn nhất, mang tính đột phá lý luận nhất của Hồ Chí Minh là gì?",
    options: {
      A: "Cách mạng thuộc địa phụ thuộc hoàn toàn vào cách mạng vô sản chính quốc.",
      B: "Cách mạng thuộc địa có khả năng chủ động giành thắng lợi trước cách mạng vô sản ở chính quốc.",
      C: "Cách mạng thuộc địa và cách mạng chính quốc nổ ra đồng thời.",
      D: "Cách mạng thuộc địa chỉ cần đấu tranh hòa bình."
    },
    correctAnswer: "B",
    explanation: "Vượt qua tư duy thụ động của Quốc tế Cộng sản, Hồ Chí Minh khẳng định thuộc địa có thể chủ động tự giải phóng mình."
  },
  {
    id: 5,
    question: "Người sử dụng hình ảnh ẩn dụ nào để mô tả bản chất bóc lột của chủ nghĩa tư bản?",
    options: {
      A: "Con đỉa hai vòi.",
      B: "Con rắn độc mất đầu.",
      C: "Ánh sáng lập lòe trong đêm.",
      D: "Con thuyền không lái."
    },
    correctAnswer: "A",
    explanation: "Một vòi bám vào vô sản chính quốc, một vòi hút máu vô sản thuộc địa; muốn giết nó phải cắt cả hai vòi."
  },
  {
    id: 6,
    question: "Phương pháp bạo lực cách mạng quần chúng của Hồ Chí Minh là sự kết hợp của những yếu tố nào?",
    options: {
      A: "Đấu tranh quân sự và bạo động vũ trang đơn thuần.",
      B: "Lực lượng chính trị và quân sự; đấu tranh chính trị và đấu tranh vũ trang.",
      C: "Đấu tranh ngoại giao và thỏa hiệp chính trị.",
      D: "Biểu tình hòa bình và đấu tranh nghị trường."
    },
    correctAnswer: "B",
    explanation: "Kết hợp song hành cả chính trị và quân sự, trong đó chính trị là cơ sở để xây dựng lực lượng vũ trang."
  },
  {
    id: 7,
    question: "Sự kiện lịch sử nào ở Việt Nam là minh chứng thực tiễn đầu tiên khẳng định tính đúng đắn của việc cách mạng thuộc địa chủ động thắng lợi trước chính quốc?",
    options: {
      A: "Phong trào Xô viết Nghệ Tĩnh (1930-1931).",
      B: "Thắng lợi của Cách mạng Tháng Tám năm 1945.",
      C: "Chiến thắng Điện Biên Phủ năm 1954.",
      D: "Hiệp định Paris được ký kết năm 1973."
    },
    correctAnswer: "B",
    explanation: "Cách mạng Tháng Tám thành công rực rỡ khi giai cấp vô sản ở Pháp chưa giành được chính quyền."
  }
];
