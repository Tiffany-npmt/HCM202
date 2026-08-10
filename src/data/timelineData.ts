export interface TimelineMilestone {
  year: string;
  event: string;
  explanation: string;
  significance: string;
  imageKeyword: string; // Used to search or render custom fallback icon/style
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "1911",
    event: "Ra đi tìm đường cứu nước",
    explanation: "Quyết định ra đi tìm đường cứu nước ở tuổi 21 của người thanh niên Nguyễn Tất Thành xuất phát từ tấm lòng yêu nước thương dân sâu sắc và sự trăn trở trước sự thất bại của các phong trào yêu nước chống Pháp đầu thế kỷ XX.",
    significance: "Đặt nền móng khởi đầu cho cuộc hành trình 30 năm bôn ba qua nhiều châu lục, từ đó tìm thấy con đường cứu nước đúng đắn cho dân tộc Việt Nam theo học thuyết Mác-Lênin.",
    imageKeyword: "nha_rong"
  },
  {
    year: "1919",
    event: "Yêu sách của nhân dân An Nam",
    explanation: "Đòi các quyền bình đẳng pháp lý, tự do, dân chủ cơ bản cho người dân Việt Nam. Mặc dù bị các nước đế quốc phớt lờ, sự kiện này đã tạo tiếng vang lớn trong phong trào cách mạng thế giới.",
    significance: "Thể hiện bước đi đầu tiên đòi quyền tự quyết của dân tộc Việt Nam trên đấu trường quốc tế, chuyển biến nhận thức từ chủ nghĩa yêu nước sang giác ngộ cách mạng.",
    imageKeyword: "versailles"
  },
  {
    year: "1930",
    event: "Cương lĩnh chính trị đầu tiên",
    explanation: "Cương lĩnh chính trị đầu tiên do Nguyễn Ái Quốc khởi thảo xác định con đường cách mạng Việt Nam là cách mạng tư sản dân quyền và thổ địa cách mạng để đi tới xã hội cộng sản. Nhiệm vụ đánh đổ đế quốc Pháp xâm lược được đưa lên hàng đầu.",
    significance: "Đánh dấu bước ngoặt chấm dứt cuộc khủng hoảng kéo dài về đường lối cứu nước và tổ chức lãnh đạo phong trào giải phóng dân tộc Việt Nam.",
    imageKeyword: "cuong_linh"
  },
  {
    year: "1945",
    event: "Tuyên ngôn Độc lập",
    explanation: "Tuyên bố khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày 2/9/1945. Bản Tuyên ngôn khéo léo trích dẫn Tuyên ngôn Độc lập của Mỹ (1776) và Pháp (1791) để khẳng định quyền dân tộc thiêng liêng: quyền bình đẳng, quyền sống, quyền tự do và quyền mưu cầu hạnh phúc.",
    significance: "Mở ra kỷ nguyên mới độc lập, tự do cho dân tộc, phá tan xiềng xích thực dân Pháp hơn 80 năm và ách phát xít Nhật.",
    imageKeyword: "tuyen_ngon"
  },
  {
    year: "1946",
    event: "Lời kêu gọi toàn quốc kháng chiến",
    explanation: "Trước dã tâm xâm lược lần nữa của thực dân Pháp, Người ra Lời kêu gọi kháng chiến với câu nói đanh thép: 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.'",
    significance: "Hiệu triệu sức mạnh yêu nước của toàn thể nhân dân Việt Nam, đoàn kết nhất tề đứng lên kháng chiến bảo vệ chính quyền cách mạng non trẻ.",
    imageKeyword: "khang_chien"
  },
  {
    year: "1966",
    event: "Không có gì quý hơn độc lập, tự do",
    explanation: "Khi đế quốc Mỹ mở rộng chiến tranh phá hoại miền Bắc, Hồ Chí Minh ra lời kêu gọi toàn dân đoàn kết chiến đấu, khẳng định chân lý thời đại: 'Không có gì quý hơn độc lập, tự do.' Đây là khẩu hiệu hành động cổ vũ tinh thần của hàng triệu con người.",
    significance: "Trở thành động lực tinh thần vĩ đại cho toàn quân và dân ta vượt qua muôn vàn gian khổ để kháng chiến thắng lợi, giải phóng miền Nam, thống nhất đất nước.",
    imageKeyword: "doc_lap_tu_do"
  }
];
