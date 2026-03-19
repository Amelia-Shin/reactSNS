# 🐦 ReactSNS

> 소셜 네트워크 서비스

<br />

## 🔗 배포 주소

**👉 [https://react-sns-one.vercel.app](https://react-sns-one.vercel.app)**

<br />

## 📖 프로젝트 소개

실시간 소셜 미디어 플랫폼으로, 사용자 인증, 포스트 작성/수정/삭제, 댓글/대댓글, 좋아요, 프로필 관리 등의 기능을 구현한 풀스택 웹 애플리케이션입니다.
React + TypeScript + Supabase를 활용하여 실시간 데이터 처리와 인증을 구현했으며,  
Vercel을 통해 배포된 풀스택 개인 프로젝트입니다.

<br />

## ⚙️ 기술 스택

### Frontend
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### State Management & Data Fetching
![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)

### Backend & Auth
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

### Deploy
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br />

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🔐 회원가입 / 로그인 | Supabase Auth 기반 사용자 인증 |
| ✍️ 게시글 작성 | 텍스트 중심의 포스트 작성 및 업로드 |
| 🔁 무한 스크롤 | react-intersection-observer를 활용한 피드 무한 로딩 |
| 🌙 다크 모드 | next-themes를 활용한 라이트/다크 테마 전환 |
| 🔔 토스트 알림 | sonner를 활용한 UX 피드백 알림 |
| 📱 반응형 UI | Tailwind CSS 기반의 모바일 대응 레이아웃 |

<br />

## 🚀 시작 가이드

### 요구사항

- Node.js 18 이상
- npm

### 설치 및 실행

```bash
# 1. 레포지토리 클론
git clone https://github.com/Amelia-Shin/reactSNS.git
cd reactSNS

# 2. 패키지 설치
npm install

# 3. 환경변수 설정
# .env 파일을 생성하고 아래 값을 입력해주세요
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# 4. 개발 서버 실행
npm run dev
```

### 빌드

```bash
npm run build
```

<br />

## 📁 프로젝트 구조

```
src/
├── components/     # 재사용 UI 컴포넌트
├── pages/          # 라우팅 페이지
├── hooks/          # 커스텀 훅
├── store/          # Zustand 상태 관리
└── supabase/       # Supabase 클라이언트 설정
```

<br />

---

<p align="center">Made with ❤️ by <a href="https://github.com/Amelia-Shin">Amelia-Shin</a></p>
