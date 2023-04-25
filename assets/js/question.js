/* 메인페이지의 '시작'버튼 클릭 -> 메인페이지 숨김 처리, 서브페이지(질문) 표출 */ 
//메인페이지 변수 설정
const main = document.querySelector('#main');
//서브페이지(질문) 변수 설정
const qna = document.querySelector('#qna');
//결과페이지 변수 설정
const result = document.querySelector('#result');
//서브페이지(질문) 상태표시줄 상수값
const endPoint = 12;
//선택지 배열
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//서브페이지(질문) 숨김
qna.style.display = 'none';


/* 5. data 배열 */
function calResult(){
    var result = select.indexOf(Math.max(...select));
    return result;
    
    // //value를 기준값으로 재정렬 -> 
    // var resultArray = pointArray.sort(function(a, b){
    //     if(a.value > b.value){
    //         return -1; 
    //     }
    //     if(a.value < b.value){
    //         return 1;
    //     }
    //     return 0;
    // });
    // console.log(resultArray);
    // let resultword = resultArray[0].key;
    // return resultword;
}


/* 4. 마지막 답변 클릭 시, 결과페이지 표출하는 함수 */
function goResult(qIndex){
    //서브페이지(질문) 서서히 사라지는 애니메이션
    qna.style.WebkitAnimation = 'fadeOut 1s'; 
    qna.style.animation = 'fadeOut 1s';

    //서브페이지(질문) 사라지는 애니메이션 실행 뒤 0.5초 후 실행
    setTimeout(() => {
        //결과페이지 서서히 나타나는 애니메이션
        result.style.WebkitAnimation = 'fadeIn 1s';
        result.style.animation = 'fadeIn 1s'; 

        //결과페이지 나타나는 애니메이션 실행 뒤 0.5초 후 실행
        setTimeout(() => {
            //서브페이지(질문) 숨김
            qna.style.display = 'none';
            //결과페이지 표출
            result.style.display = 'block';
        }, 500)
    });
    
    console.log(select);
    calResult();
}


/* 3. 답변영역 생성하는 함수 */
function addAnswer(answerText, qIndex, idx){
    //답변영역 변수 설정
    var a = document.querySelector('.answerBox');
    //버튼 태그 만들고 변수 설정
    var answer = document.createElement('button');
    //버튼 변수에 answerList클래스 추가
    answer.classList.add('answerList');
    //답변영역 변수의 자식요소로 버튼 변수 추가
    a.appendChild(answer);
    //버튼변수 태그에 answerText 인수 할당(각 질문 data)
    answer.innerHTML = answerText;

    //답변(버튼) 클릭했을 때 일어나는 이벤트
    answer.addEventListener('click', function(){
        this.classList.add('action');
        //.answerList(버튼)를 모두 선택, 변수 설정
        var children = document.querySelectorAll('.answerList');
        //답변(버튼)의 개수만큼 반복
        for(let i = 0; i < children.length; i++){
            //답변(버튼)들 모두 비활성화, 숨김처리
            children[i].disabled = true;
            children[i].style.WebkitAnimation = 'fadeOut .5s';
            children[i].style.animation = 'fadeOut .5s';
        }
        setTimeout(() => {
            var target = qnaList[qIndex].a[idx].type;
            for(let j = 0; j < target.type.length; j++){
                select[target[i]] += 1;
            }
            //몇 번째 질문의, 몇 번째 버튼 클릭했는지 select배열에 담김
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            //질문 & 답변 data 가져오는 함수(+1씩 증가)
            goNext(++qIndex);
        }, 500);
    }, false);
}


/* 2. 질문 & 답변 data 가져오고 질문영역 표출하는 함수 */
function goNext(qIndex){
    //결과 페이지 표출
    if(qIndex === endPoint){
        goResult();
        return;
    }

    //질문 영역 변수 설정
    var q = document.querySelector('.questionBox');

    //질문 영역 변수에 data.js의 object 중 q(key값) 가져오기
    q.innerHTML = qnaList[qIndex].q;

    //data.js의 답변영역들 for 반복문으로 개수만큼 불러오기
    for(let i in qnaList[qIndex].a){
        addAnswer(qnaList[qIndex].a[i].answer, qIndex, i);
    }
    
    //상태표시줄 width 설정 > qIndex에 1 더한 값에 100을 나눈 결과를 endPoint(12) 값과 곱한 것
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIndex+1) + '%';
}

/* 1. 메인페이지의 '시작'버튼 클릭하면 실행되는 함수 */
function begin(){
    //메인페이지 서서히 사라지는 애니메이션
    main.style.WebkitAnimation = 'fadeOut 1s'; 
    main.style.animation = 'fadeOut 1s';

    //메인페이지 사라지는 애니메이션 실행 뒤 0.5초 후 실행
    setTimeout(() => {
        //서브페이지(질문) 서서히 사라지는 애니메이션
        qna.style.WebkitAnimation = 'fadeIn 1s';
        qna.style.animation = 'fadeIn 1s'; 

        //서브페이지 사라지는 애니메이션 실행 뒤 0.5초 후 실행
        setTimeout(() => {
            //메인페이지 숨김
            main.style.display = 'none';
            //서브페이지 표출
            qna.style.display = 'block';
        }, 500)

        //data.js의 질문들이 순서대로 들어올 수 있도록 초기화, 함수 goNext의 인수에도 넣는다.
        var qIndex = 0;
        goNext(qIndex);
    }, 500)
}