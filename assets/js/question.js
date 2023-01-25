//메인, 질문 페이지, 버튼 변수
const main = document.getElementById('main');
const qna = document.getElementById('qna');
const btn = document.getElementById('mainBtn');

//질문 페이지에서 표출되는 답변 영역에 내용 출력되는 함수
function renderAnswer(e){
    //질문 영역 태그 변수 & 그 안에 버튼 태그 생성 & 버튼 클래스 추가
    let answerBox = document.getElementById('answerBox');
    let answerBtn = document.createElement('button');
    answerBox.appendChild(answerBtn);
    answerBtn.classList.add('aBtn');
    //생성된 버튼 태그에 인자 넣기
    answerBtn.innerHTML = e;
}

//질문 페이지에서 질문 내용 출력되는 함수, 답변 출력되는 함수 호출
function renderQuestion(questionIndex){
    let question = document.getElementById('questionBox');
    //질문 페이지의 질문이 들어가는 영역에 data.js에 있는 object(qnaList)에서 q값 index 차례대로 불러오기
    question.innerHTML = qnaList[questionIndex].q;
    //클릭할 답변 내용들은 for반복문으로 data.js에 있는 object(qnaList)에서 a값 index 차례대로 불러오기
    for(let i in qnaList[questionIndex].a){ //총 3가지인 a가 반복
        renderAnswer(qnaList[questionIndex].a[i].answer);
    }
}

//메인 페이지 클릭 시, 질문 페이지로 이동하는 함수
function begin(){
    main.classList.add('hide');
    qna.classList.remove('hide');
    
    //질문 인덱스 초기화
    let questionIndex = 0;
    renderQuestion(questionIndex);
}

btn.addEventListener('click', function(){
    begin();
    console.log('성공!');
});