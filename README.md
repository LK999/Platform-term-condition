# Platform Terms & Conditions Collector

## 프로젝트 개요

국내 주요 플랫폼 서비스의 이용약관, 개인정보처리방침, 개인정보 제3자 제공 동의서 등을 체계적으로 수집하고 정리하는 프로젝트입니다.

## 수집 대상

다음 플랫폼 서비스들의 약관 및 정책을 수집합니다:

- **카카오 (Kakao)** - 카카오톡, 카카오맵, 카카오커머스 등
- **당근 (Danggeun/Karrot)** - 당근마켓 (중고거래, 동네가게 등)
- **네이버 (Naver)** - 네이버, 네이버 스마트스토어, 네이버 플레이스 등
- **잡플래닛 (Jobplanet)** - 기업 리뷰, 채용 플랫폼
- **쿠팡 (Coupang)** - 오픈마켓, 쿠팡이츠 등
- **배달의민족 (Baemin)** - 배달 플랫폼
- **토스 (Toss)** - 핀테크 플랫폼
- **야놀자 (Yanolja)** - 숙박/여가 플랫폼

## 수집 항목

각 서비스별로 다음 항목을 수집합니다:

1. **이용약관 (Terms of Service)**
   - 서비스 이용약관 전문
   - 유료 서비스 이용약관 (해당 시)

2. **개인정보처리방침 (Privacy Policy)**
   - 개인정보처리방침 전문
   - 개인정보 수집/이용 동의서

3. **개인정보 제3자 제공 (Third-Party Data Sharing)**
   - 일반사용자-입점 업체 간 개인정보 제공 동의
   - 입점 업체의 개인정보처리 의무 관련 조항

4. **입점 업체 관련 약관 (Merchant/Seller Terms)**
   - 입점 업체 이용약관
   - 판매자 개인정보처리 가이드라인

## 디렉토리 구조

```
Platform-term-condition/
├── README.md                    # 프로젝트 설명
├── CLAUDE.md                    # Claude 작업 가이드라인
├── service_list.md              # 수집 대상 및 진행 현황
└── data/
    ├── kakao/                   # 카카오
    │   ├── terms_of_service.md
    │   ├── privacy_policy.md
    │   ├── third_party_sharing.md
    │   └── metadata.json
    ├── danggeun/                # 당근
    │   ├── terms_of_service.md
    │   ├── privacy_policy.md
    │   ├── third_party_sharing.md
    │   └── metadata.json
    ├── naver/                   # 네이버
    │   ├── terms_of_service.md
    │   ├── privacy_policy.md
    │   ├── third_party_sharing.md
    │   └── metadata.json
    ├── jobplanet/               # 잡플래닛
    │   ├── terms_of_service.md
    │   ├── privacy_policy.md
    │   ├── third_party_sharing.md
    │   └── metadata.json
    └── ...                      # 기타 플랫폼
```

## 데이터 형식

각 서비스 디렉토리에는 다음 파일들이 포함됩니다:

- `terms_of_service.md` - 이용약관 전문 (마크다운)
- `privacy_policy.md` - 개인정보처리방침 전문 (마크다운)
- `third_party_sharing.md` - 개인정보 제3자 제공 관련 조항
- `metadata.json` - URL, 수집일시, 버전 등 메타데이터

## 수집 일자

- 최초 수집: 2026-02-17
