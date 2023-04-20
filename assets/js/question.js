const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
qna.style.display = 'none';

function addAnswer(){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    a.appendChild(answer);
}

function goNext(qIndex){
    var q = document.querySelector('.questionBox');
    q.innerHTML = qnaList[qIndex].q;
    for(let i in qnaList[qIndex].a){ //반복 횟수
        addAnswer(qnaList[qIndex].a[qIndex].answer); //무엇을 반복? 답변버튼
    }
}

function begin(){
    main.style.WebkitAnimation = 'fadeOut 1s';
    main.style.animation = 'fadeOut 1s';
    setTimeout(() => {
        qna.style.WebkitAnimation = 'fadeIn 1s';
        qna.style.animation = 'fadeIn 1s';
        setTimeout(() => {
            main.style.display = 'none';
            qna.style.display = 'block';
        }, 500)
        var qIndex = 0; 
        //data.js의 질문들이 순서대로 들어올 수 있도록 초기화, 함수 goNext의 인수에도 넣는다.
        goNext(qIndex);
    }, 500)
}

