/*******************************
 * 파일명 : ui.js
 * 설명 : 농업용저수지 통합수질관리시스템 (오염원관리대장) : JS
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

	// Adjusts the height of the pop_cont element in the specified container
	function adjustPopContHeight(containerSelector) {
		var bodyHeight = $('body').height();
		var topContHeight = $(containerSelector + ' .top_cont').outerHeight() + 50;
		var popContHeight = bodyHeight - topContHeight;
		$(containerSelector + ' .pop_cont').height(popContHeight);
	}

	// Initial adjustments and event listeners for pop_result_list_detail
	adjustPopContHeight('.pop_result_list_detail');
	$(window).on('resize', function () {
		adjustPopContHeight('.pop_result_list_detail');
	});

	// Initial adjustments and event listeners for pop_result_view
	adjustPopContHeight('.pop_result_view');
	$(window).on('resize', function () {
		adjustPopContHeight('.pop_result_view');
	});

	// Initial adjustments and event listeners for pop_result_view
	adjustPopContHeight('.pop_input_edit');
	$(window).on('resize', function () {
		adjustPopContHeight('.pop_input_edit');
	});

	
});