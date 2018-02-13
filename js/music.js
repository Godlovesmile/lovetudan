// 刷新音乐播放按钮状态
function RefreshMusicImg () {
	var audio = document.getElementById('my_audio');

	if (audio.paused) {
		DisplayMusicImg(false);
	} else {
		DisplayMusicImg(true);
	}
}

// 增加切换音乐播放和暂停处理
function SwitchPlayMusic () {
	var audio = document.getElementById('my_audio');

	if (audio.paused) {
		PlayMusic();
	} else {
		PauseMusic();
	}
}

// 音乐播放和暂停处理
function PlayMusic () {
	var audio = document.getElementById('my_audio');

	audio.play();
	DisplayMusicImg(true);
}

function PauseMusic () {
	var audio = document.getElementById('my_audio');

	audio.pause();
	DisplayMusicImg(false);
}

// 显示播放或者暂停图标
function DisplayMusicImg (isplay) {
	var playmusic = document.getElementById('img_play_music');
	var pausemusic = document.getElementById('img_pause_music');

	if (isplay) {
		$(playmusic).removeClass("hide");
		$(pausemusic).addClass("hide");
	} else {
		$(playmusic).addClass("hide");
		$(pausemusic).removeClass("hide");
	}
}



//--创建页面监听，等待微信端页面加载完毕 触发音频播放
document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('my_audio');
            audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});
//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
// document.addEventListener('touchstart', function () {
//     function audioAutoPlay() {
//         var audio = document.getElementById('my_audio');
//             audio.play();
//     }
//     audioAutoPlay();
// });


