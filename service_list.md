# 플랫폼 서비스 수집 목록

## 수집 현황

| # | 서비스명 | 영문명 | 분류 | 이용약관 | 개인정보처리방침 | 제3자 제공 | 상태 |
|---|---------|--------|------|---------|----------------|-----------|------|
| 1 | 카카오 | Kakao | 종합 플랫폼 | ✅ 크롤링 완료 | ✅ 크롤링 완료 | ✅ 크롤링 완료 | 수집 완료 |
| 2 | 당근 | Danggeun (Karrot) | 중고거래/지역 플랫폼 | ✅ 크롤링 완료 | ✅ 크롤링 완료 | ✅ 크롤링 완료 | 수집 완료 |
| 3 | 네이버 | Naver | 종합 플랫폼 | ⏳ URL만 저장 | ⏳ URL만 저장 | ⏳ 검색결과 저장 | URL 확인 필요 |
| 4 | 잡플래닛 | Jobplanet | 채용/기업리뷰 플랫폼 | ⏳ 검색결과 저장 | ⏳ 검색결과 저장 | ⏳ 검색결과 저장 | URL 확인 필요 |
| 5 | 쿠팡 | Coupang | 이커머스 플랫폼 | ⏳ 검색결과 저장 | ⏳ 검색결과 저장 | ⏳ 검색결과 저장 | URL 확인 필요 |
| 6 | 배달의민족 | Baemin | 배달 플랫폼 | ✅ 업주약관 크롤링 | ⏳ 검색결과 저장 | ⏳ 검색결과 저장 | 일부 수집 |
| 7 | 토스 | Toss | 핀테크 플랫폼 | ⏳ URL만 저장 | ⏳ URL만 저장 | ⏳ URL만 저장 | URL 확인 필요 |
| 8 | 야놀자 | Yanolja (NOL) | 숙박/여가 플랫폼 | ✅ 크롤링 완료 | ⏳ URL만 저장 | ⏳ URL만 저장 | 일부 수집 |

## 범례

- ✅ 크롤링 완료 (원문 텍스트 추출 성공)
- ⏳ URL만 저장 / 검색결과 저장 (직접 크롤링 불가, 수동 확인 필요)
- ❌ 수집 불가 (사유 기재)
- `-` 미수집

## 크롤링 불가 사유

| 서비스 | 사유 |
|--------|------|
| 네이버 | naver.com 도메인 접근 차단 |
| 잡플래닛 | jobplanet.co.kr 403 Forbidden |
| 쿠팡 | coupang.com 403 Forbidden, SPA 렌더링 |
| 토스 | SPA 렌더링 (Next.js), 본문 미포함 |
| 야놀자 (개인정보) | SPA 렌더링 (Next.js), 본문 미포함 |

## 수동 확인 필요 URL 목록

### 네이버
- 이용약관: https://policy.naver.com/rules/service.html
- 개인정보처리방침: https://policy.naver.com/policy/privacy.html

### 잡플래닛
- 이용약관: https://www.jobplanet.co.kr/welcome/terms
- 개인정보처리방침: https://www.jobplanet.co.kr/welcome/privacy
- 채용서비스 약관: https://www.jobplanet.co.kr/welcome/recruitment_policy

### 쿠팡
- 이용약관: https://www.coupang.com/np/policies/terms-of-use
- 개인정보처리방침: https://privacy.coupang.com/ko/center/coupang/coupang-v7-0/
- 판매자 개인정보처리방침: https://privacy.coupang.com/ko/land/seller/

### 배달의민족
- 개인정보처리방침: 앱 내 또는 woowahan.com 확인 필요
- 파트너 이용약관: https://www.woowa-partner.co.kr/member/agree.jsp

### 토스
- 개인정보처리방침: https://toss.im/privacy
- 토스페이먼츠 제3자 제공: https://pages.tosspayments.com/terms/privacy/consent2/
- 토스플레이스 제3자 제공: https://pages.tossplace.com/policies/625/421

### 야놀자
- 개인정보처리방침: https://policy.yanolja.com/?t=privacy
- 비즈니스 개인정보처리방침: https://business.yanolja.com/mo/kr/privacy
