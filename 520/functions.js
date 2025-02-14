/*
 * http://www.mycodes.net
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
  var current = new Date(); // Lấy thời gian hiện tại đúng cách
  var seconds = Math.floor((current - new Date(date)) / 1000);

  var days = Math.floor(seconds / (3600 * 24));
  seconds %= (3600 * 24);

  var hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  var minutes = Math.floor(seconds / 60);
  seconds %= 60;

  // Định dạng giá trị thành 2 chữ số
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  var result = ` <span class="digit">${days}</span> Ngày 
                   <span class="digit">${hours}</span> Giờ 
                   <span class="digit">${minutes}</span> Phút 
                   <span class="digit">${seconds}</span> Giây`;

  $("#clock").html(result);
}