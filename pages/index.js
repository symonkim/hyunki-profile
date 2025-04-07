export default function Home() {
  return (
    <div style={{ display: 'flex', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      {/* English Section */}
      <div style={{ flex: 1, paddingRight: '1rem', borderRight: '1px solid #ccc' }}>
        <h1>Hyunki (Simon Kim) / Smart City & C-ITS Expert</h1>
        <section>
          <h2>👨‍💻 Career Summary</h2>
          <ul>
            <li>PM of Smart Streetlight Edge Controller Development</li>
            <li>Smart City, C-ITS Planning & Implementation</li>
            <li>30 years of experience (SI, AV, Monitoring, Firmware)</li>
          </ul>
        </section>
        <section>
          <h2>📜 Certifications</h2>
          <ul>
            <li>Top-level ICT Engineer</li>
            <li>Senior ICT Auditor</li>
            <li>Smart Farm Manager Level 1</li>
            <li>PMP Level 1</li>
            <li>Industrial Engineer Information Processing</li>
          </ul>
        </section>
        <section>
          <h2>📁 Projects</h2>
          <ul>
            <li>Highway Safety System (BEACON + DSRC)</li>
            <li>Integrated SI Control Center & Building Guides</li>
            <li>Exhibition & Museum AV System</li>
          </ul>
        </section>
        <section>
          <h2>📬 Contact</h2>
          <p>Email: kee1472@naver.com</p>
          <p>GitHub: <a href="https://github.com/symonkim" target="_blank">github.com/symonkim</a></p>
        </section>
      </div>

      {/* Korean Section */}
      <div style={{ flex: 1, paddingLeft: '1rem' }}>
        <h1>현기 (시몬 킴) / 스마트시티 · C-ITS 전문가</h1>
        <section>
          <h2>👨‍💻 경력 요약</h2>
          <ul>
            <li>스마트가로등 에지 컨트롤러 개발 및 구축 PM</li>
            <li>스마트시티 및 C-ITS 제안, 설계, 구축</li>
            <li>30년 경력 (SI, AV 시스템, 모니터링, 펌웨어 등)</li>
          </ul>
        </section>
        <section>
          <h2>📜 자격증</h2>
          <ul>
            <li>정보통신기술자 특급</li>
            <li>정보통신 감리원 고급</li>
            <li>스마트팜관리사 1급</li>
            <li>PMP 1급</li>
            <li>정보처리산업기사</li>
          </ul>
        </section>
        <section>
          <h2>📁 주요 프로젝트</h2>
          <ul>
            <li>도로공사 안전관리 시스템 (BEACON + DSRC)</li>
            <li>통합 SI 관제센터 및 빌딩 안내 시스템</li>
            <li>전시장/박물관 A/V 시스템 설계 및 구축</li>
          </ul>
        </section>
        <section>
          <h2>🎨 포트폴리오</h2>
          <ul>
            <li><strong>미디어 월 (LED Wall) - BC 카드 본사 로비(을지로)</strong><br/>시스템 구성도, 사양, 운영 U.I</li>
            <li><strong>Studio system 구축 – 한양대 뉴스룸</strong><br/>스튜디오, 조명, 크로마키, 운영/조정 시스템</li>
            <li><strong>미디어 월 (매직밀러) – 호텔 리셉션 데스크</strong><br/>시스템 구성도, 직관적 U.I</li>
            <li><strong>빌딩안내시스템 – 중소기업 중앙회</strong><br/>무인정보 KIOSK, DMR, 엘리베이터, UI 구성</li>
            <li><strong>빌딩안내시스템 – YesApm</strong><br/>전광판, 매직밀러, 인터랙티브 KIOSK, 엘리베이터, 시스템 구성도</li>
          </ul>
        </section>
        <section>
          <h2>📬 연락처</h2>
          <p>이메일: kee1472@naver.com</p>
          <p>GitHub: <a href="https://github.com/symonkim" target="_blank">github.com/symonkim</a></p>
        </section>
      </div>
    </div>
  );
}
