var score = 0; //재료 선택 합산 점수
var waterNum = Math.floor(Math.random() * 4)
var gageNum = 0;
var pageNum = 0;
var titleTextArray = [
	"먼저, 원하는 재료를 선택해봐!", 
	"다음, 원하는 카레 가루를 선택해봐!", 
	"어느 페트병에 물이 들어 있을까?", 
	"재료를 잘 손질 해주고, 그 다음은 요리법은...?",
	"조리중 ...",
	"으음, 반응이 미묘한 걸? 싫어하는 재료라도 있었나..."];

function GameStart(obj) {

	var progress = document.getElementById("progress");
	var title = document.getElementById("title");
	var HTP = document.getElementById("HowToPlay");
	var page1_eatBaby = document.getElementById("page1_eatBaby");
	var titleText = document.getElementById("titleText");
	var girl = document.getElementById("girl");
	var section2 = document.getElementById("section2");
	var section3 = document.getElementById("section3");
	var 두번째접시 = document.getElementById("두번째접시");
	var secondImageButtons = document.getElementById("secondImageButtons");
	var 두번째재료 = document.getElementById("두번째재료");
	var next = document.getElementById("next");
		
		
	progress.style.visibility = "visible";
	obj.style.visibility = "hidden";
	title.style.visibility = "hidden";
	HTP.style.visibility = "hidden";
	page1_eatBaby.style.visibility = "hidden";
	titleText.style.visibility = "visible";
	girl.style.visibility = "visible";
	section3.style.visibility = "visible";
	두번째접시.style.visibility = "visible";
	secondImageButtons.style.visibility = "visible";
	두번째재료.style.visibility = "visible";
	next.style.visibility = "visible";


	changePage1(); 

	section2.style.left = "10%";
	section2.style.width = "55%";
	section2.style.top = "27%";
}

function HowToPlay(obj) {
	var HowToPlayText = document.getElementById("HowToPlayText");
	var writingPad = document.getElementById("writingPad");
	var HTPText = document.getElementById("HTPText");
	var X = document.getElementById("X");

	HowToPlayText.style.visibility = "visible";
	writingPad.style.visibility = "visible";
	HTPText.style.visibility = "visible";
	X.style.visibility = "visible";
}

function changePage1() {
	var progress = document.getElementsByTagName('progress')[0]
    var b = document.getElementsByTagName('b')[0]
    var titleText = document.getElementById("titleText");
    progress.value = gageNum;
    b.innerText = "  " + gageNum + " %";
    titleText.innerText = titleTextArray[pageNum];

    gageNum += 25;
    pageNum++;

 	if(gageNum == 120) {
   		//게임 끝내기
   		
   	}	
}

function CheckPass() {
	var HowToPlayText = document.getElementById("HowToPlayText");
	var writingPad = document.getElementById("writingPad");
	var HTPText = document.getElementById("HTPText");
	var X = document.getElementById("X");

	HowToPlayText.style.visibility = "hidden";
	writingPad.style.visibility = "hidden";
	HTPText.style.visibility = "hidden";
	X.style.visibility = "hidden";
}

function secondImageClick(obj) {
	

	if (obj.style.backgroundColor == "rgb(163, 196, 239)"){//선택 해제
		obj.style.backgroundColor = "#ffc179";
		obj.style.border = "2px solid #ffc179";

		var select = document.getElementById(secondImageList[obj.value]);
		select.style.visibility = "hidden";
		score -= secondImageListNum[obj.value]
		var index = selectsecondImageList.indexOf(secondImageList[obj.value])
		selectsecondImageList.splice(index, 1);
	}
	else {//선택
		obj.style.backgroundColor = "#A3C4EF";
		obj.style.border = "2px solid #A3C4EF";
		obj.style.border = "2px solid #A3C4EF";

		var select = document.getElementById(secondImageList[obj.value]);
		select.style.visibility = "visible";
		score += secondImageListNum[obj.value]

		selectsecondImageList.push(secondImageList[obj.value])
	}		
}

function secondImagemouseover(obj) {
	obj.style.transform = "scale(1.04, 1.04)";	
}

function secondImagemouseout(obj) {
	obj.style.transform = "scale(1, 1)";
}


function changePage2() {

 	changePage1();

   	var section3 = document.getElementById("section3");
   	section3.style.backgroundColor = "#FFC66B";

   	//세번째 페이지에서 제거
	var 두번째접시 = document.getElementById("두번째접시");
	var secondImageButtons = document.getElementById("secondImageButtons");
	var 두번째재료 = document.getElementById("두번째재료");
	var next = document.getElementById("next");

    //세번째 페이지에 추가
	var 빨간가루 = document.getElementById("빨간가루");
	var 초록가루 = document.getElementById("초록가루");
	var 카레가루 = document.getElementById("카레가루");
	var 고민중 = document.getElementById("고민중");
	var 말풍선 = document.getElementById("말풍선");
		

	두번째접시.style.visibility = "hidden";
	secondImageButtons.style.visibility = "hidden";
	두번째재료.style.visibility = "hidden";
	next.style.visibility = "hidden";

	빨간가루.style.visibility = "visible";
	초록가루.style.visibility = "visible";
	카레가루.style.visibility = "visible";
	고민중.style.visibility = "visible";
	말풍선.style.visibility = "visible";

	for (i=0; i<secondImageList.length; i++){
		var 재료 = document.getElementById(secondImageList[i]);
		if (재료.style.visibility == "visible"){
			재료.style.visibility = "hidden"
		}
	}  	
}

function thirdImagemouseover(obj) {
	obj.style.transform = "scale(1.06, 1.06)";	
}

function thirdImagemouseout(obj) {
	obj.style.transform = "scale(1, 1)";
}

function powderSelect(num) {
	score += num
	changePage3()
}



function changePage3() {
	//alert("물 당첨 번호" + waterNum)
	//alert(score)

   	changePage1();
   
   	var 고민중 = document.getElementById("고민중");
   	var 말풍선 = document.getElementById("말풍선");

   	고민중.src = "media/네번째/머리아파.png";
   	말풍선.src = "media/네번째/말풍선2.png";

   	고민중.style.width = "400px";
	고민중.style.left = "-15%";
    고민중.style.top = "25%";

   	말풍선.style.width = "220px";
   	말풍선.style.left = "12%";
    말풍선.style.top = "-7%";



   	//네번째 페이지에서 삭제
	var 빨간가루 = document.getElementById("빨간가루");
	var 초록가루 = document.getElementById("초록가루");
	var 카레가루 = document.getElementById("카레가루");


	//네번째 페이지에 추가
	var 페트병1 = document.getElementById("페트병1");
	var 페트병2 = document.getElementById("페트병2");
	var 페트병3 = document.getElementById("페트병3");
	var 페트병4 = document.getElementById("페트병4");



	빨간가루.style.visibility = "hidden";
	초록가루.style.visibility = "hidden";
	카레가루.style.visibility = "hidden";


	페트병1.style.visibility = "visible";
	페트병2.style.visibility = "visible";
	페트병3.style.visibility = "visible";
	페트병4.style.visibility = "visible";
	
}

function bottleSelect(num) {
	if (num == waterNum){
		score += 0
	}
	else {
		score += -5
	}

	changePage4()
}

function changePage4() {

   	changePage1();
   	
   	var section3 = document.getElementById("section3");
   	section3.style.backgroundColor = "white";


   	//네번째 페이지에서 삭제
	var 고민중 = document.getElementById("고민중");
   	var 말풍선 = document.getElementById("말풍선");
   	var 페트병1 = document.getElementById("페트병1");
	var 페트병2 = document.getElementById("페트병2");
	var 페트병3 = document.getElementById("페트병3");
	var 페트병4 = document.getElementById("페트병4");


	//네번째 페이지에 추가
	var 재료손질 = document.getElementById("재료손질");
	var fifthImageButton1 = document.getElementById("fifthImageButton1");
	var fifthImageButton2 = document.getElementById("fifthImageButton2");
	var 볶기 = document.getElementById("볶기");
	var 데치기 = document.getElementById("데치기");
	var fifthText1 = document.getElementById("fifthText1");
	var fifthText2 = document.getElementById("fifthText2");



	고민중.style.visibility = "hidden";
	말풍선.style.visibility = "hidden";
	페트병1.style.visibility = "hidden";
	페트병2.style.visibility = "hidden";
	페트병3.style.visibility = "hidden";
	페트병4.style.visibility = "hidden";


	재료손질.style.visibility = "visible";
	fifthImageButton1.style.visibility = "visible";
	fifthImageButton2.style.visibility = "visible";
	볶기.style.visibility = "visible";
	데치기.style.visibility = "visible";
	fifthText1.style.visibility = "visible";
	fifthText2.style.visibility = "visible";
	
	
}

function HowToCook(num) {
	score += num

	changePage5()
}

function changePage5() {
   	changePage1();

   	var 로딩배경 = document.getElementById("로딩배경");
   	var 냄비 = document.getElementById("냄비");
   	var 냄비뚜껑 = document.getElementById("냄비뚜껑");



   	로딩배경.style.visibility = "visible";
   	냄비.style.visibility = "visible";
   	냄비뚜껑.style.visibility = "visible";

   	//냄비 뚜껑 시간 조절
   	setTimeout(function() {
  	changePage6();
	}, 5000);
}

function changePage6() {
 
 	var section3 = document.getElementById("section3");
   	section3.style.backgroundColor = "#FFC66B";


   	var 로딩배경 = document.getElementById("로딩배경");
   	var 냄비 = document.getElementById("냄비");
   	var 냄비뚜껑 = document.getElementById("냄비뚜껑");
   	var 냄비뚜껑div = document.getElementById("냄비뚜껑");



   	//마지막 페이지에 삭제
	var 재료손질 = document.getElementById("재료손질");
	var fifthImageButton1 = document.getElementById("fifthImageButton1");
	var fifthImageButton2 = document.getElementById("fifthImageButton2");
	var 볶기 = document.getElementById("볶기");
	var 데치기 = document.getElementById("데치기");
	var fifthText1 = document.getElementById("fifthText1");
	var fifthText2 = document.getElementById("fifthText2");
	var progress = document.getElementById("progress");
	var titleText = document.getElementById("titleText");
	var girl = document.getElementById("girl");



   	로딩배경.style.visibility = "hidden";
   	냄비.style.visibility = "hidden";
   	냄비뚜껑.style.visibility = "hidden";



   	재료손질.style.visibility = "hidden";
	fifthImageButton1.style.visibility = "hidden";
	fifthImageButton2.style.visibility = "hidden";
	볶기.style.visibility = "hidden";
	데치기.style.visibility = "hidden";
	fifthText1.style.visibility = "hidden";
	fifthText2.style.visibility = "hidden";
	progress.style.visibility = "hidden";
	titleText.style.visibility = "hidden";
	girl.style.visibility = "hidden";




	var 재료손질 = document.getElementById("고민중");
	var replay = document.getElementById("replay");
	var successImage = document.getElementById("successImage");
	var failImage = document.getElementById("failImage");
	
	
	재료손질.style.visibility = "visible";
	replay.style.visibility = "visible";
	

    재료손질.style.width = "500px";
   	재료손질.style.left = "-640px";
    



    

	//마지막 페이지에 추가
	//실패
	if ((selectsecondImageList.length <= 4) || ((selectsecondImageList.indexOf("대파") != -1) && (selectsecondImageList.indexOf("버섯") != -1)) || (score <= -20)){
		failImage.style.visibility = "visible";
		재료손질.style.width = "550px";
   		재료손질.style.left = "-640px";
		재료손질.style.top = "60px";
		재료손질.src = "media/끝/실패배경.png";
	}
	else if (((selectsecondImageList.indexOf("대파") != -1) || (selectsecondImageList.indexOf("버섯") != -1)) || ((score >= -19) && (score <= 10))) {
		failImage.style.visibility = "visible";
		titleText.innerText = titleTextArray[5];
		titleText.style.visibility = "visible";
		재료손질.style.width = "700px";
   		재료손질.style.left = "-730px";
		재료손질.style.top = "-20px";
		재료손질.src = "media/끝/애매한성공배경.png";
	}
	//성공
	else {
		successImage.style.visibility = "visible";
		재료손질.style.width = "500px";
   		재료손질.style.left = "-640px";
		재료손질.style.top = "-20px";
		재료손질.src = "media/끝/성공배경.png";
	}
	
   	
}

function finalImagemouseover() {

	var 실패땀 = document.getElementById("실패땀");
	실패땀.style.visibility = "visible";

}

function finalImagemouseout() {

	var 실패땀 = document.getElementById("실패땀");
	실패땀.style.visibility = "hidden";

}





