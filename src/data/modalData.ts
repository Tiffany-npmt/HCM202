export interface ModalContent {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  significance?: string;
  bulletPoints?: string[];
  columns?: {
    col1Title: string;
    col1Content: string[];
    col2Title: string;
    col2Content: string[];
  };
}

export const modalsData: Record<string, ModalContent> = {
  "boi-canh-lich-su": {
    id: "boi-canh-lich-su",
    title: "Bối Cảnh Lịch Sử Việt Nam cuối Thế kỷ XIX - đầu Thế kỷ XX",
    subtitle: "Sự bế tắc của các phong trào yêu nước và hành trình tìm đường cứu nước",
    paragraphs: [
      "Năm 1858, thực dân Pháp nổ súng xâm lược Việt Nam tại bán đảo Sơn Trà (Đà Nẵng). Triều đình nhà Nguyễn nhu nhược từng bước đầu hàng, ký các hiệp ước đầu hàng dâng nước ta cho thực dân Pháp xâm lược.",
      "Trước sự xâm lăng tàn bạo của đế quốc, các phong trào yêu nước chống Pháp bùng lên mạnh mẽ theo hai khuynh hướng chủ đạo: khuynh hướng phong kiến (phong trào Cần Vương, khởi nghĩa Yên Thế) và khuynh hướng dân chủ tư sản (phong trào Phan Bội Châu, Phan Châu Trinh). Tuy nhiên, các phong trào này lần lượt bị dập tắt đẫm máu.",
      "Nguyên nhân thất bại chủ yếu do thiếu một đường lối cứu nước đúng đắn khoa học, chưa xác định rõ lực lượng và phương pháp đấu tranh thích hợp. Đất nước rơi vào tình cảnh khủng hoảng trầm trọng về đường lối cứu nước và lực lượng lãnh đạo."
    ],
    bulletPoints: [
      "Khuynh hướng phong kiến (Cần Vương, Yên Thế): Nỗ lực trung quân ái quốc nhưng hệ tư tưởng đã lỗi thời trước sự xâm lược của CNTB hiện đại.",
      "Khuynh hướng dân chủ tư sản (Phan Bội Châu): Dựa vào Nhật để đuổi Pháp (chẳng khác nào 'đưa hổ cửa trước, rước beo cửa sau').",
      "Khuynh hướng dân chủ ôn hòa (Phan Châu Trinh): Yêu cầu Pháp cải cách, khai dân trí (chẳng khác nào 'xin giặc rủ lòng thương').",
      "Khủng hoảng đường lối: Cần một con đường mới đi thẳng vào bản chất thời đại và giải quyết căn cốt vấn đề thuộc địa."
    ],
    significance: "Sự bế tắc này đặt ra yêu cầu lịch sử bức thiết phải tìm ra con đường cứu nước mới, độc lập và sáng tạo. Đó chính là tiền đề thúc đẩy người thanh niên Nguyễn Tất Thành quyết định ra đi tìm đường cứu nước vào ngày 5/6/1911."
  },
  "hiep-dinh-so-bo": {
    id: "hiep-dinh-so-bo",
    title: "Phân Tích Hiệp Định Sơ Bộ (06/03/1946)",
    subtitle: "Minh chứng về tư duy độc lập thực tế, toàn diện của Hồ Chí Minh",
    paragraphs: [
      "Sau Cách mạng Tháng Tám 1945, nước Việt Nam Dân chủ Cộng hòa non trẻ đứng trước tình thế hiểm nghèo: 'ngàn cân treo sợi tóc'. Ở miền Bắc, 20 vạn quân Tưởng Giới Thạch kéo vào dưới danh nghĩa giải giáp quân Nhật nhưng thực chất âm mưu lật đổ chính quyền cách mạng; ở miền Nam, quân Pháp nổ súng quay lại xâm lược.",
      "Để tránh việc phải đụng độ cùng lúc nhiều kẻ thù nguy hiểm, Hồ Chí Minh đã chủ động đưa ra sách lược ngoại giao vô cùng khôn khéo: ký Hiệp định Sơ bộ ngày 6/3/1946 với đại diện Chính phủ Pháp (Sainteny).",
      "Theo Hiệp định, nước Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là một quốc gia tự do, có Chính phủ, Nghị viện, Quân đội và Tài chính riêng nằm trong khối Liên hiệp Pháp."
    ],
    bulletPoints: [
      "Độc lập thực quyền: Người vạch trần bản chất bù nhìn của các chính phủ do thực dân dựng lên. Quyền lực thực tế phải nằm ở: Ngoại giao độc lập, Quân đội riêng, Tài chính tự chủ và Tổ chức nhà nước hợp pháp.",
      "Sách lược hòa để tiến: Việc ký hiệp định giúp ta đuổi 20 vạn quân Tưởng về nước mà không tốn một viên đạn, giành thời gian hòa hoãn quý báu để củng cố lực lượng chuẩn bị cho cuộc kháng chiến trường kỳ không thể tránh khỏi.",
      "Tính linh hoạt sáng tạo: Sẵn sàng nhân nhượng về mặt danh nghĩa (quốc gia tự do thuộc Liên hiệp Pháp) nhưng giữ vững nguyên tắc cốt lõi là độc lập thực quyền và sự tự quyết về các vấn đề nội bộ."
    ],
    significance: "Hiệp định Sơ bộ 6-3-1946 là một mẫu mực tuyệt vời về nghệ thuật ngoại giao của Hồ Chí Minh: dĩ bất biến ứng vạn biến, bảo vệ tối đa lợi ích dân tộc trong hoàn cảnh ngặt nghèo nhất."
  },
  "thong-nhat-toan-ven": {
    id: "thong-nhat-toan-ven",
    title: "Độc Lập Gắn Liền Với Thống Nhất Và Toàn Vẹn Lãnh Thổ",
    subtitle: "Những dẫn chứng lịch sử đập tan âm mưu chia cắt đất nước của thực dân",
    paragraphs: [
      "Thực dân Pháp khi xâm lược nước ta luôn thực hiện chính sách 'chia để trị' hòng chia cắt Việt Nam thành ba kỳ (Bắc, Trung, Nam) với ba chế độ cai trị khác nhau. Sau năm 1945, thực dân Pháp rắp tâm dựng lên cái gọi là 'Nam Kỳ tự trị' hòng tách miền Nam ra khỏi Việt Nam thống nhất.",
      "Trước âm mưu hiểm độc đó, Hồ Chí Minh đã kiên quyết đấu tranh bảo vệ sự toàn vẹn lãnh thổ và thống nhất nước nhà. Khái niệm độc lập của Người không chỉ dành cho từng vùng miền, mà phải là độc lập cho toàn bộ bờ cõi Việt Nam thống nhất từ Bắc chí Nam."
    ],
    bulletPoints: [
      "Thư gửi đồng bào Nam Bộ (1946): Người viết: 'Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi!'",
      "Chống lại Vĩ tuyến 17 chia cắt: Khi đất nước bị tạm thời chia cắt sau Hiệp định Giơ-ne-vơ (1954), Người luôn nung nấu ý chí giải phóng miền Nam thống nhất đất nước, khẳng định Nam Bắc là một nhà.",
      "Niềm tin trong Di chúc: Người viết: 'Dù khó khăn gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi. Đế quốc Mỹ nhất định phải cút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà.'"
    ],
    significance: "Ý chí thống nhất đất nước của Hồ Chí Minh phản ánh chân lý lịch sử ngàn đời của dân tộc: Việt Nam là một khối thống nhất không thể chia cắt về cả địa lý, lịch sử, văn hóa lẫn tâm hồn."
  },
  "so-sanh-lo-trinh": {
    id: "so-sanh-lo-trinh",
    title: "So Sánh Lộ Trình Cách Mạng",
    subtitle: "Điểm sáng tạo cốt lõi của Hồ Chí Minh so với Lý luận kinh điển Quốc tế Cộng sản",
    paragraphs: [
      "Trong quá trình tìm đường cứu nước, Hồ Chí Minh đã tiếp thu chủ nghĩa Mác-Lênin nhưng không áp dụng máy móc. Người đã có sự điều chỉnh lộ trình cách mạng cực kỳ sáng tạo dựa trên thực tiễn của một nước thuộc địa nửa phong kiến phương Đông, nơi mâu thuẫn dân tộc sâu sắc hơn mâu thuẫn giai cấp."
    ],
    columns: {
      col1Title: "Lý Luận Kinh Điển Gốc (Quốc tế Cộng sản)",
      col1Content: [
        "Lộ trình tuần tự: Cách mạng đi từ giải phóng giai cấp (giai cấp vô sản giành chính quyền tại chính quốc) rồi mới dẫn dắt giải phóng dân tộc ở các thuộc địa.",
        "Trọng tâm đấu tranh: Đặt nặng đấu tranh giai cấp, xung đột giữa vô sản và tư sản làm động lực chính.",
        "Cách mạng ruộng đất: Đòi hỏi tiến hành cách mạng điền địa song song hoặc đi trước giải phóng dân tộc để lôi kéo nông dân đấu tranh."
      ],
      col2Title: "Lộ Trình Sáng Tạo Hồ Chí Minh",
      col2Content: [
        "Đảo ngược lộ trình: Tiến hành giải phóng dân tộc trước. Lộ trình đầy đủ: Giải phóng Dân tộc → Giải phóng Xã hội → Giải phóng Giai cấp → Giải phóng Con người.",
        "Trọng tâm đấu tranh: Đặt mâu thuẫn dân tộc (giữa nhân dân Việt Nam và đế quốc xâm lược) lên hàng đầu, trên hết và trước hết.",
        "Tạm gác khẩu hiệu ruộng đất: Cương lĩnh 1930 tạm gác cách mạng ruộng đất triệt để, chỉ thực hiện tịch thu ruộng đất của bọn đế quốc và tay sai phản quốc chia cho dân cày nghèo nhằm cô lập tối đa kẻ thù chính."
      ]
    },
    significance: "Sự sáng tạo này giúp quy tụ sức mạnh tối đa của toàn dân tộc Việt Nam, tránh chia rẽ nội bộ bởi xung đột giai cấp quá sớm, bảo đảm cách mạng đi đúng hướng và giành thắng lợi quyết định."
  },
  "con-dia-hai-voi": {
    id: "con-dia-hai-voi",
    title: "Hình Tượng Ẩn Dụ 'Con Đỉa Hai Vòi'",
    subtitle: "Bản chất bóc lột của chủ nghĩa đế quốc và tính bình đẳng giữa hai cuộc cách mạng",
    paragraphs: [
      "Trong tác phẩm 'Bản án chế độ thực dân Pháp' (1925), Nguyễn Ái Quốc đã sử dụng hình tượng ẩn dụ hết sức độc đáo: 'con đỉa hai vòi' để miêu tả bản chất của chủ nghĩa đế quốc.",
      "Người chỉ rõ chủ nghĩa tư bản đế quốc giống như một con đỉa có hai vòi: một vòi bám vào giai cấp vô sản ở chính quốc (hút máu nhân dân lao động nước mình) và một vòi bám vào nhân dân lao động các nước thuộc địa (vắt kiệt tài nguyên và sức lao động của các dân tộc bị áp bức).",
      "Muốn tiêu diệt con quái vật đó, người ta phải cắt đứt cả hai vòi cùng một lúc. Nghĩa là, cuộc cách mạng của giai cấp vô sản ở chính quốc và cuộc cách mạng giải phóng dân tộc ở thuộc địa phải phối hợp chặt chẽ, khăng khít với nhau."
    ],
    bulletPoints: [
      "Mối quan hệ bình đẳng: Bác bỏ quan điểm xem thường cách mạng thuộc địa của một số đảng cộng sản phương Tây. Hai cuộc cách mạng có mối quan hệ bình đẳng, tương trợ lẫn nhau chứ không phụ thuộc một chiều.",
      "Đánh vào điểm yếu nhất: Khẳng định thuộc địa là nơi tập trung nọc độc của con rắn tư bản đế quốc, do đó cách mạng thuộc địa hoàn toàn có thể bùng nổ chủ động và giành thắng lợi trước để hỗ trợ chính quốc.",
      "Khẩu hiệu hành động: Quyết tâm tự lực tự cường: 'Đem sức ta mà tự giải phóng cho ta' chứ không thụ động chờ đợi thắng lợi của giai cấp vô sản ở các nước phát triển."
    ],
    significance: "Hình tượng con đỉa hai vòi thể hiện tư duy lý luận xuất sắc của Hồ Chí Minh, phá vỡ khuôn mẫu thụ động và thiết lập hệ thống quan điểm chỉ đạo thực tiễn cách mạng tự lực, tự cường."
  },
  "cach-mang-thang-tam": {
    id: "cach-mang-thang-tam",
    title: "Minh Chứng Lịch Sử: Cách Mạng Tháng Tám 1945",
    subtitle: "Thắng lợi rực rỡ của tinh thần tự lực tự cường và tính chủ động giành chính quyền trước chính quốc",
    paragraphs: [
      "Cách mạng Tháng Tám năm 1945 ở Việt Nam là một minh chứng thực tiễn đanh thép, khẳng định tính đúng đắn tuyệt đối trong luận điểm sáng tạo của Hồ Chí Minh: Cách mạng thuộc địa có thể chủ động nổ ra và giành thắng lợi trước cách mạng ở chính quốc.",
      "Vào thời điểm tháng 8 năm 1945, khi thời cơ cách mạng chín muồi (Nhật đầu hàng đồng minh), dưới sự lãnh đạo của Đảng và Mặt trận Việt Minh do Hồ Chí Minh dẫn dắt, nhân dân cả nước đã đồng loạt nổi dậy khởi nghĩa giành chính quyền trước khi quân đồng minh kéo vào giải giáp quân Nhật.",
      "Lúc này, giai cấp vô sản ở nước Pháp (chính quốc) vẫn chưa giành được chính quyền. Việt Nam đã tự mình giải phóng, thiết lập nhà nước dân chủ nhân dân đầu tiên tại Đông Nam Á."
    ],
    bulletPoints: [
      "Tự mình cứu mình: Đúng theo lời dạy của Người: 'Đem sức ta mà tự giải phóng cho ta', nhân dân Việt Nam không trông chờ vào sự giúp đỡ bên ngoài để giành tự do.",
      "Chớp thời cơ vàng: Khởi nghĩa giành chính quyền diễn ra nhanh chóng, gọn nhẹ chỉ trong vòng 15 ngày (từ 14/8 đến 28/8/1945) với rất ít xương máu, tạo thế đứng pháp lý vững chắc đón quân đồng minh.",
      "Ý nghĩa toàn cầu: Cổ vũ mạnh mẽ phong trào giải phóng dân tộc của các nước thuộc địa khác trên thế giới, chứng minh rằng một dân tộc nhỏ bé nhưng đoàn kết và chủ động hoàn toàn có thể tự đánh đổ xiềng xích thực dân."
    ],
    significance: "Thành công của Cách mạng Tháng Tám 1945 ghi dấu son chói lọi trong lịch sử dân tộc, là thắng lợi đầu tiên của chủ nghĩa Mác-Lênin được vận dụng sáng tạo ở một nước thuộc địa."
  },
  "bao-luc-cach-mang": {
    id: "bao-luc-cach-mang",
    title: "Phương Pháp Bạo Lực Cách Mạng Quần Chúng Nhân Dân",
    subtitle: "Sự kết hợp nhuần nhuyễn giữa lực lượng chính trị và lực lượng quân sự",
    paragraphs: [
      "Đối phó với bạo lực phản cách mạng tàn bạo của kẻ thù xâm lược, Hồ Chí Minh khẳng định con đường duy nhất là dùng bạo lực cách mạng để giành và giữ chính quyền. Tuy nhiên, quan niệm về bạo lực cách mạng của Người mang tính sáng tạo sâu sắc.",
      "Bạo lực cách mạng trong tư tưởng Hồ Chí Minh không phải là hành động ám sát cá nhân, cũng không phải là những cuộc khởi nghĩa quân sự đơn thuần, phiêu lưu. Đó là bạo lực của quần chúng nhân dân bao gồm cả lực lượng chính trị và lực lượng vũ trang."
    ],
    bulletPoints: [
      "Hai lực lượng cốt lõi: Lực lượng chính trị (quần chúng nhân dân yêu nước được tổ chức) và Lực lượng quân sự (quân đội nhân dân, dân quân tự vệ). Lực lượng chính trị là cơ sở cho lực lượng quân sự.",
      "Hai hình thức đấu tranh song hành: Đấu tranh chính trị (biểu tình, bãi công, đấu tranh nghị trường, binh vận) kết hợp chặt chẽ với Đấu tranh vũ trang (tác chiến quân sự).",
      "Thực tiễn Cách mạng Tháng Tám: Giành chính quyền chủ yếu bằng lực lượng chính trị của quần chúng nhân dân có lực lượng vũ trang hỗ trợ, làm tê liệt ý chí phản kháng của kẻ thù."
    ],
    significance: "Tư duy bạo lực cách mạng quần chúng giúp huy động tối đa sức mạnh của toàn dân, biến bạo lực thành công cụ nhân văn vì mục đích giải phóng con người, hạn chế tối đa đổ máu."
  }
};
