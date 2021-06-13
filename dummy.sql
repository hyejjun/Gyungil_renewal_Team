DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `userid`, `userpw`, `username`, `useremail`, `user_birthday`, `user_tel`, `class_code`, `quit`, `type`) VALUES
	(1, 'admin', 'jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg', '최고관리자', 'admin@admin.com', '2021-06-13', '010-000-000', 1, 0, 1);

DELETE FROM `board`;
INSERT INTO `gyungil`.`board` (`id`, `writer`, `date`, `subject`, `content`, `type`) VALUES ('1', 'admin', '2021-06-13', '취업에서 한걸음 더, 슈퍼 신입을 만듭니다.', '안녕하세요? 경일게임아카데미, 박병준 원장입니다.', '0');
INSERT INTO `gyungil`.`board` (`id`, `writer`, `date`, `subject`, `content`, `type`) VALUES ('2', 'admin', '2021-06-13', '오시는길', '서울특별시 강동구 천호대로 995 금복빌딩 3,4층 경일게임아카데미(지하철 5,8호선 1번출구 10m이내)', '0');


DELETE FROM `curriculum`;
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
INSERT INTO `curriculum` (`id`, `name`, `info`, `term`, `start_time`, `end_time`, `location`, `tuition`, `qual`, `show`, `image`) VALUES
	(1, '가상증강현실 응용 SW개발자 양성과정', '트레이드밀과 VR기어 등 직접 구동할 수 있는 환경에서 내가 만든 프로그램이나 어플환경에서 구동해보고 체험해보는 집중형 체험교육입니다.', 5, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995, 금복빌딩 4층', '정부 전액 지원', '고졸이상', 1, 'curr_1.png'),
	(2, '블록체인 기반 핀테크 및 응용 SW개발자 양성과정', '정부에서 국가핵심인력을 육성하기 위해 투자하는 사람투자전략 한국형 뉴딜, 4차산업형명과 미레 비전이 있는 기술 습득', 10, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995, 금복빌딩 4층', '정부 전액 지원', '고졸이상', 1, 'curr_2.png'),
	(3, '게임 기획자 양성과정', '북미 게임개발자 커리큘럼을 모티브로 현장감 있는 게임 기획자를 육성합니다. 과정 중 총 72가지의 프로젝트와 협업을 통해 게임회사에서 먹히는 실무 전문가로 키워드립니다. 게임의 볼륨부터 각 수치 테이블 작성법까지! 현업 10년 이상의 베테랑 교수진을 통해 전수하는 게임 기획의 정수를 느껴보세요!', 5, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995, 금복빌딩 4층', '정부 전액 지원', '고졸이상', 1, 'curr_3.png'),
	(4, 'Unity 3D 게임 프로그래머 양성과정', '네덜란드 게임개발자 커리큘럼을 연구하여 직접 라이브 서비스하고 구현할 수 있는 능력을 기릅니다. 경일게임아카데미는  Unity로부터 공인하는 공식 파트너 교육센터입니다. 체계적인 유니티 전문 개발자 과정, 지금바로 신청하세요.', 5, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995 금복빌딩 3,4층', '정부 전액 지원, 교통비, 식비지원', '고졸이상', 1, 'curr_4.png');