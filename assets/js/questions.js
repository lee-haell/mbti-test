//질문 data.js 파일 불러오기
import { questionsData } from './data.js';

//필요한 변수
const progressValue = document.querySelector('.progress .value'); //질문바 채워지는 영역
const numberElement = document.querySelector('.number'); //질문 넘버링
const questionElement = document.querySelector('.question'); //질문
const choice1 = document.querySelector('.choice1'); //답변1
const choice2 = document.querySelector('.choice2'); //답변2

//현재 질문의 번호 변수 초기화
let currentNum = 0;
//유저의 mbti 결과
let mbti = '';

//질문들 출력하는 함수
function renderQuestion() {
    //유저가 답변을 고르면, 숫자 업데이트 되면서 다음 질문으로 넘어감
    const questionsValue = questionsData[currentNum];
    //변수 numberElement의 내용을 객체 데이터인 변수 questionData의 number속성을 불러옴
    numberElement.innerHTML = questionsValue.number;
    questionElement.innerHTML = questionsValue.question;
    choice1.innerHTML = questionsValue.choices[0].text;
    choice2.innerHTML = questionsValue.choices[1].text;
    //질문 위의 var영역 가로값 변경 > 번호변수 x 10% 만큼 가로값 적용, 대신! 처음 초기값 0이기 때문에 +1된 값부터 적용하기
    progressValue.style.width = (currentNum + 1) * 10 + '%';
}

//클릭한 답변버튼에 따라 다음 질문으로 넘어가기 전, mbti 결과 저장
//매개변수인 choiceNum은 클릭한 답변버튼의 순번인 0 또는 1번째
function nextQuestion(choiceNum) {
    const questionsValue = questionsData[currentNum];
    //문자열인 mbti값 + 클릭한 답변에 해당하는 value값 > '' + 'i'
    mbti = mbti + questionsValue.choices[choiceNum].value;
    //다음 질문으로 넘어가야 하기 때문에, 현재 질문 번호 변수에 번호 변수 + 1
    currentNum = currentNum + 1;
    //다시 질문 출력 함수 실행(다음 질문으로)
    renderQuestion();
}
//답변버튼1 클릭 시, 실행되는 (익명)함수
choice1.addEventListener('click', function(){
    nextQuestion(0);
    console.log(mbti);
});
//답변버튼2 클릭 시, 실행되는 (익명)함수
choice2.addEventListener('click', function(){
    nextQuestion(1);
    console.log(mbti);
});


renderQuestion();