jQuery(document).ready(function($){
	var AplCss, targetSection, tar, timing = 500, body  = document.querySelector("body");
	$('.contact').on('click' , function(e){
		// // e.preventDefault();
		body.style.overflow = "hidden";
		AplCss  = {'left':0};
		targetSection = $('.prt_contact_wrapper');
		AplCss  = {'left':0};
		targetSection.css('display', 'block');
		targetSection.animate(AplCss, timing);
	});

	$('i.prt_close').on('click' , function(){
		hide_section();
	});

	$('i#prt_close_tab').on('click' , function(){
		hide_section();
	});

	function hide_section(){
		AplCss  = {'display':'none','left':'100%'};
		body.style.overflowY = "visible";
		setTimeout(function(){ targetSection.css('display', 'none'); }, timing);
		targetSection.animate(AplCss, timing);
	};

	// Contact Form Submission
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var	email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
				url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
				image = /\.(jpe?g|gif|png|PNG|JPE?G)$/,
				mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/,
				facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/,
				twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/,
				google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/,
				check = 0;

		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}

	$(".submitForm").on("click", function() {
		var	_this = $(this),
			targetForm = _this.closest('form'),
			errroTarget = targetForm.find('.response'),
			check = checkRequire(targetForm , errroTarget);

		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});

	// Typed JS
	$('.typed').each(function(){
		var _this = $(this);
		var typed = new Typed(this, {
			stringsElement: _this.parent().find('.typed-strings')[0],
			typeSpeed: 80,
			backSpeed: 80,
			fadeOut: true,
			loop: true
		});
});

});