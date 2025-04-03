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
          <p>GitHub: <a href="https://github.com/syncomkim" target="_blank">github.com/syncomkim</a></p>
        </section>
      </div>

      {/* Korean Section */}
      <div style={{ flex: 1, paddingLeft: '1rem' }}>
        <h1>현기 (시몬킴) / 스마트시티 · C-ITS 전문가</h1>

        <section>
          <h2>👨‍💻 경력 요약</h2>
          <ul>
            <li>스마트가로등 엣지 컨트롤러 개발 및 구축 PM</li>
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
          <h2>📬 연락처</h2>
          <p>이메일: kee1472@naver.com</p>
          <p>GitHub: <a href="https://github.com/syncomkim" target="_blank">github.com/syncomkim</a></p>
        </section>
      </div>
    </div>
  );
}
