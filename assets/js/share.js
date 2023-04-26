const url = 'https://animallovetype.netlify.app/';

//마지막 결과페이지에서 공유하기 버튼 클릭 시 실행되는 함수
function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '동물로 알아보는 연애유형 TEST 결과';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.jpg';
    const shareURL = url + 'page/result-' + resultAlt + '.html';

    //카카오톡 공유하기
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
            },
        },
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
            },
        }
        ],
    });
}