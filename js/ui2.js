/*******************************
 * 파일명 : ui.js
 * 설명 : 수도계량기 동파위험정보 : JS
 * Update : 2023.12.07.
 *******************************/

$(document).ready(function () {
	$(window).resize(function(){
		//console.log(window.outerWidth);
	});
	
	
	// 전체 지우기 버튼 클릭 시
	$(".btn_clear_search_keyword").on("click", function() {
		// 입력 필드 내용 지우기
		$(this).siblings(".search_keyword_wrap input").val("");	
		$(this).hide();
	});
	
	  // 입력 필드에서 키보드 입력 감지 
	$(".search_keyword_wrap input").on("input", function() {
		// 입력이 있을 때 전체 지우기 버튼 표시
		if ($(this).val() !== "") {
			$(this).siblings(".btn_clear_search_keyword").show();
			//$(".btn_reservoir_search").hide();
		} else {
		  // 입력이 없을 때는 숨김
		$(this).siblings(".btn_clear_search_keyword").hide();
		//$(".btn_reservoir_search").show();
		}
	});
	
	/* pop_layer 닫기 */
	$(".btn_pop_layer_close").click(function () {
		$(this).parent().parent().parent(".pop_layer").hide();		
		return false; 
	});

	/* pop_layer : 오염원 목록 : 지도 닫기 */
	$(".map_view_mode .btn_pop_layer_close").click(function () {
		$(this).parent().parent(".pop_layer").hide();		
		return false; 
	});

	$(".page_move_num").keyup(function(event){
		var inputVal = $(this).val();
		$(this).val(inputVal.replace(/[^0-9]/gi,''));
	
	});

	// 주오염원 등록/수정 선택 버튼
	$(".item_chk_wrap button").click(function () {
		$(this).toggleClass("on");
		$(this).siblings().removeClass("on");
		return false; 
	});


	$(".pic_add").on('change',function(){
		var fileName = $(".pic_add").val();
		$(".upload-name").val(fileName);
	});


	// 초기 bbb의 높이 설정
	adjustBbbHeight();

	// aaa의 높이가 변할 때마다 bbb의 높이 조정
	$(window).on('resize', function() {
		adjustBbbHeight();
	}); 

	
	function adjustBbbHeight() {
		var containerHeight = $('body').height();
		var aaaHeight = $(".top").outerHeight() + 50;
		//var aaaHeight = $('.top').css("height");
		//aaaHeight = -30;
		//alert(containerHeight + "=======" + aaaHeight ); 
		var bbbHeight = containerHeight - aaaHeight ;
		$('.pop_cont').height(bbbHeight);
	}
	return false; 

    // 주오염원 등록/수정
	inpEditHeight();	
	$(window).on('resize', function() {
		inpEditHeight();
	});
	function inpEditHeight() {
		var bodyHeight = $('body').height();
		var topContHeight = $(".pop_input_edit .top_cont").outerHeight() + 50;
		var popContHeight = bodyHeight - topContHeight ;
		$('.pop_input_edit .pop_cont').height(popContHeight);
	}
	
	// 키워드 검색 결과별 오염원 목록
	listDetailHeight();	
	$(window).on('resize', function() {
		listDetailHeight();
	});
	function listDetailHeight() {
		var bodyHeight = $('body').height();
		var topContHeight = $(".pop_result_list_detail .top_cont").outerHeight() + 50;
		var popContHeight = bodyHeight - topContHeight ;
		$('.pop_result_list_detail .pop_cont').height(popContHeight);
	}
	
	// 오염원 목록 선택 (오염원 상세)
	resultViewHeight();	
	$(window).on('resize', function() {
		resultViewHeight();
	});
	function resultViewHeight() {
		var bodyHeight = $('body').height();
		var topContHeight = $(".pop_result_view .top_cont").outerHeight() + 50;
		var popContHeight = bodyHeight - topContHeight ;
		$('.pop_result_view .pop_cont').height(popContHeight);
	}
	
});