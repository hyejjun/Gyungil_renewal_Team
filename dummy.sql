use gyungil;


DELETE FROM `curriculum`;
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
INSERT INTO `curriculum` (`id`, `name`, `info`, `term`, `start_time`, `end_time`, `location`, `tuition`, `qual`, `show`, `image`) VALUES
	(1, '교직원', '교직원', 0, '09:00:00', '18:00:00', '1', '1', '1', 1, '1'),
	(2, '가상증강현실 응용 SW개발자 양성과정', '트레이드밀과 VR기어 등 직접 구동할 수 있는 환경에서 내가 만든 프로그램이나 어플환경에서 구동해보고 체험해보는 집중형 체험교육입니다.', 5, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995, 금복빌딩 4층', '정부 전액 지원', '고졸이상', 1, 'curr_1.png'),
	(3, '블록체인 기반 핀테크 및 응용 SW개발자 양성과정', '정부에서 국가핵심인력을 육성하기 위해 투자하는 사람투자전략 한국형 뉴딜, 4차산업형명과 미레 비전이 있는 기술 습득', 10, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995, 금복빌딩 4층', '정부 전액 지원', '고졸이상', 1, 'curr_2.png'),
	(4, '게임 기획자 양성과정', '북미 게임개발자 커리큘럼을 모티브로 현장감 있는 게임 기획자를 육성합니다. 과정 중 총 72가지의 프로젝트와 협업을 통해 게임회사에서 먹히는 실무 전문가로 키워드립니다. 게임의 볼륨부터 각 수치 테이블 작성법까지! 현업 10년 이상의 베테랑 교수진을 통해 전수하는 게임 기획의 정수를 느껴보세요!', 5, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995, 금복빌딩 4층', '정부 전액 지원', '고졸이상', 1, 'curr_3.png'),
	(5, 'Unity 3D 게임 프로그래머 양성과정', '네덜란드 게임개발자 커리큘럼을 연구하여 직접 라이브 서비스하고 구현할 수 있는 능력을 기릅니다. 경일게임아카데미는  Unity로부터 공인하는 공식 파트너 교육센터입니다. 체계적인 유니티 전문 개발자 과정, 지금바로 신청하세요.', 5, '09:00:00', '18:00:00', '서울특병시 강동구 천호대로 995 금복빌딩 3,4층', '정부 전액 지원, 교통비, 식비지원', '고졸이상', 1, 'curr_4.png');


DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `userid`, `userpw`, `username`, `useremail`, `user_birthday`, `user_tel`, `class_code`, `quit`, `type`) VALUES
	(1, 'admin', 'jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg', '최고관리자', 'admin@admin.com', '2021-06-13', '010-000-000', 1, 0, 1);

DELETE FROM `board`;
INSERT INTO `gyungil`.`board` (`id`, `writer`, `date`, `subject`, `content`, `type`) VALUES ('1', 'admin', '2021-06-13', '취업에서 한걸음 더, 슈퍼 신입을 만듭니다.', '안녕하세요? 경일게임아카데미, 박병준 원장입니다.
경일은 업계 최고의 슈퍼신입을 육성하는 교육 스타트업입니다.

게임기획을 시작으로 게임프로그래밍, 게임원화, 프로게이머를 통합하는 게임 토탈 플랫폼 교육을 만들어 "게임콘텐츠제작" 취업률 1위, 문화의거리 원화 작품전시회, 팀케이지에이 구단 창설과 포트나이트 말썽꾼컵 한국 1위, 세계 월드컵 예선 아시아 2위, 등 굵직한 업적을 이루어왔습니다.

경일은 고용노동부 인정 우수훈련기관 중 전국 최상위 게임교육기관으로 자리매김하고 있습니다. 특히 고용의 질 향상과 실무중심의 인력 육성을 위해 필요한 유용 정보와 포트폴리오 가이드 등 취업을 위한 양질의 정보도 지속적으로 제공하고 있습니다.

저희는 게임 업계에서 인정받는 인재를 기르기 위해 모든 역량과 자원을 집중하고 있고 직무능력을 최우선으로 생각하는 실전형 직무 교육을 진행하고 있습니다. 이러한 노력이 인정받아 업계에서도 경일이라면 믿을 수 있고 괜찮다라는 평가를 받고 있고 현업인으로부터의 추천도 많이 생기고 있습니다.

경일게임아카데미 교직원 일동은 청년들이 자신의 꿈을 이루고, 미래를 설계하며, 사회 구성원으로써 당당한 자존감을 세워 전문 게임 개발자로 인정받을 수 있도록 끊임없이 노력할 것입니다.

감사합니다.', '0');
INSERT INTO `gyungil`.`board` (`id`, `writer`, `date`, `subject`, `content`, `type`) VALUES ('2', 'admin', '2021-06-13', '오시는길', '서울특별시 강동구 천호대로 995 금복빌딩 3,4층 경일게임아카데미(지하철 5,8호선 1번출구 10m이내)
Tel. 02-479-4050 / Fax. 02-479-4056
Email. kigsnet@naver.com
지하철 5,8호선 1번 출구로 올라오셔서 10m이내 금복빌딩 3층으로 올라오시면 됩니다.', '0');




	INSERT INTO `intro` ( `content`, `type`, `show`) VALUES
	('visual1.png', 1, 1),
	('visual2.png', 1, 1),
	('visual3.png', 1, 1),
	('visual4.png', 1, 1);


	INSERT IGNORE INTO `users` (`id`, `userid`, `userpw`, `username`, `useremail`, `user_birthday`, `user_tel`, `class_code`, `quit`, `type`) VALUES
	(2, 'aaa', 'mDSHbc+wXLFnpcJJU+uljErImxrfV/KPL50JrxB+6PA', '전두환', 'aaa@aaa', '2021-06-03', 'aaa', 1, 0, 3),
	(3, 'bbb', 'PnRLncOTibrwxaBmBYm4QC89u0m4mz518sk1WFKjxnc', '노태우', 'aaa@aaa', '2021-06-03', 'aaa', 1, 0, 3),
	(4, 'ccc', 'ZNqkStST/yipbv+rbnfxcyo9l9gyQVgbN9vXCnpJAP4', '김영삼', 'aaa@aaa', '2021-06-03', 'aaa', 4, 0, 3),
	(5, 'ddd', 'cw912v1z4Ee4asstvXTnXcuTJy+ghKkIKEjyNBqhq7Y', '김대중', 'aaa@aaa', '2021-06-03', 'ddd', 4, 0, 3),
	(6, 'eee', 'KCuR4I/VCjjwMNu97niY023VI2BdlNndblCymOR4RL4', '노무현', 'aaa@aaa', '2021-06-03', 'eee', 3, 0, 3),
	(7, 'fff', '8oS9w8HJ4kpJTihcs4fGlRDyjeUcFbuTF52cfyhwU5g', '박근혜', 'aaa@aaa', '2021-06-03', 'eee', 2, 0, 3),
	(8, 'ggg', 'Vpx/C0HOlklgKgIYzQLtCwo9kxMDKUUcx4K339p5znE', '이명박', 'aaa@aaa', '2021-06-03', 'eee', 3, 0, 3),
	(11, 'hhh', 'JNFmzWyLgmx3kEC0nVtnCNZJsjZVjodEM53+5q/hGZk', '문재인', 'aaa@aaa', '2021-06-03', 'eee', 1, 0, 3);



	DELETE FROM `history`;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` (`id`, `year`, `content`) VALUES
	(1, 2015, '게임 전문 교육기관으로 발돋음'),
	(2, 2015, '게임 기획 취업률 90% 달성'),
	(3, 2016, '게임 프로그래밍반 신설'),
	(4, 2016, '서울 동부고용센터 취업률 합산 77.6%'),
	(5, 2016, '트롤게임즈 퍼플오션 등 게임회사와 산학협력 체결'),
	(6, 2016, '제 1회 게임 기업 설명회'),
	(7, 2017, '와이즈 폴, 트롤게임즈 등과 FGT,  산학협력 체결'),
	(8, 2017, '제 2회 게임 기업 설명회'),
	(9, 2017, '유니티 인증 교육센터 ATC라이센스 획득'),
	(10, 2017, '고용노동부 기관인증평가 3년 우수훈련기관 선정'),
	(11, 2017, '직업능력심사평가원 훈련 이수자 평가 \'A등급\'획득'),
	(12, 2018, '(주)경일게임아카데미로 사명 변경'),
	(13, 2018, 'KGA프로게이머 아카데미 신설'),
	(14, 2019, '경일게임아카데미 별관 개원'),
	(15, 2019, '고용노동부 정책 설명회 \'취업성과우수대표기관\'으로 참여'),
	(16, 2019, '게임 원화반 신설'),
	(17, 2019, '데스티니 차일드 게임원화 콜라보 특강'),
	(18, 2019, '포트나이트 프로게임단 (주)팀케이지에이 창설'),
	(19, 2019, '포트나이트 말썽꾼 컵 한국 1위'),
	(20, 2019, '포트나이트 월드컵 예선 아시아 2위'),
	(21, 2019, '리그오브레전드 2019 Keg 대통령 배 서울지역 예선 우승'),
	(22, 2019, 'CVMAX(전) 그리핀 김대호 감독 명사 특강 '),
	(23, 2019, '배틀그라운드 KGA FLY,PKC 2부리그 진출'),
	(24, 2019, '프리미엄 사운드 세에라자드 스폰 협약'),
	(25, 2019, '관악구,송파구 중학교 진로체험'),
	(26, 2019, '제1회 문화거리 일러스트레이트 공모전 개최'),
	(27, 2019, '고용노동부 기관인증평가 3년 우수훈련기관 2회차 선정'),
	(28, 2019, '직업능력평가원 훈련 이수자 평가 \'A등급\'획득');



-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 테이블 데이터 gyungil.board:~14 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
