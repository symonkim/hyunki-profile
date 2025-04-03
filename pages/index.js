import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-2">스마트시티 & ITS 기술 전문가</h1>
          <p className="text-gray-600">30년 경력의 현장형 베테랑 기술자, AI 시대에도 끊임없이 성장하는 전문가</p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-xl font-semibold">📌 기본 정보</h2>
          <p><strong>이름:</strong> 김현기 (Hyunki KIM)</p>
          <p><strong>나이:</strong> 61세 (1964년생)</p>
          <p className="flex items-center gap-2"><Mail size={16} /> kee1472@naver.com</p>
          <p className="flex items-center gap-2"><Phone size={16} /> 010-2668-6582</p>
          <p><strong>주소:</strong> 서울특별시</p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-xl font-semibold">🎓 학력 및 자격</h2>
          <ul className="list-disc list-inside">
            <li>숭실대학교 전산원 정보처리학과 수료</li>
            <li>정보처리산업기사</li>
            <li>정보통신기술자 특급</li>
            <li>정보통신 감리원 고급</li>
            <li>스마트팜관리사 1급</li>
            <li>PMP(프로젝트관리전문가) 1급</li>
            <li>ChatGPT 활용 실무 교육 수료</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-xl font-semibold">💼 경력 요약</h2>
          <ul className="list-disc list-inside">
            <li>30여 년간 스마트시티 및 ITS 중심의 제안, 설계, 구축, PM 수행</li>
            <li>회로설계, PCB 아트웍, 펌웨어(H/W, S/W, UI) 개발</li>
            <li>보일러 컨트롤러, 백화점 LED 전광판 등 개발 실무</li>
            <li>SI 관제센터, 통합 제어시스템, A/V 시스템 통합 구축</li>
            <li>정부 국책과제 ‘스마트가로등 엣지 컨트롤러’ PM</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-xl font-semibold">🌟 보유 역량</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>펌웨어 개발</Badge>
            <Badge>회로설계</Badge>
            <Badge>프로젝트 매니지먼트</Badge>
            <Badge>스마트시티 제안</Badge>
            <Badge>AI 도구 활용</Badge>
            <Badge>기술 자문</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button className="mt-4">이력서 다운로드</Button>
      </div>
    </div>
  );
}