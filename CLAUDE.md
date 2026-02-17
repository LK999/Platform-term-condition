# CLAUDE.md - Claude 작업 가이드라인

## 프로젝트 목적

국내 주요 플랫폼 서비스의 이용약관 및 개인정보 관련 정책을 수집하여 체계적으로 정리하는 프로젝트입니다.

## 작업 가이드라인

### 수집 대상 문서

각 플랫폼 서비스에서 다음 문서를 수집합니다:

1. **이용약관 (Terms of Service)** - 서비스 이용 조건 전체
2. **개인정보처리방침 (Privacy Policy)** - 개인정보 수집, 이용, 보관, 파기 등
3. **개인정보 제3자 제공 동의 (Third-Party Data Sharing)** - 일반사용자와 입점 업체 간 개인정보 제공
4. **입점 업체 개인정보처리 의무** - 입점 업체/판매자의 개인정보 처리 관련 의무 조항

### 수집 방법

- WebFetch 도구를 사용하여 각 서비스의 약관 페이지를 크롤링
- 원문 텍스트를 마크다운 형식으로 변환하여 저장
- 각 문서의 원본 URL, 수집 일시를 metadata.json에 기록

### 파일 저장 규칙

- 경로: `data/{service_name}/`
- 서비스 이름은 영문 소문자 (예: kakao, naver, danggeun, jobplanet)
- 각 문서는 별도 마크다운 파일로 저장
- 메타데이터는 JSON 형식으로 저장

### metadata.json 형식

```json
{
  "service_name": "서비스 한글명",
  "service_name_en": "서비스 영문명",
  "collected_at": "2026-02-17",
  "documents": [
    {
      "type": "terms_of_service",
      "title": "문서 제목",
      "url": "원본 URL",
      "file": "terms_of_service.md",
      "collected_at": "2026-02-17"
    }
  ]
}
```

### 주요 확인 사항

수집 시 다음 항목을 특히 주의하여 확인합니다:

- 일반 사용자의 개인정보가 입점 업체에 어떻게 제공되는지
- 입점 업체가 받은 개인정보를 어떻게 처리해야 하는지
- 제3자 제공 동의의 범위와 조건
- 개인정보 처리 위탁과 제3자 제공의 구분

### 수집 대상 서비스 목록

진행 현황은 `service_list.md`에서 관리합니다.

### 브랜치

- 작업 브랜치: `claude/collect-platform-policies-Sa7zG`

### 커밋 규칙

- 각 서비스 수집 완료 시 커밋
- 커밋 메시지: `feat: collect {service_name} terms and policies`
