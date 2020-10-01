// 緯度経度の設定
var myLatLng = {lat: 39.656175, lng: 140.241010};

// オプション設定
var mapOptions = {
	center: myLatLng,
	zoom: 15
}

// icon画像設定
var image = { 
	url: '../img/icon-kawadora.png'
	// Size: new google.maps.Size(48, 48)
}


// メイン関数
function initMap() {
	// マップの描画
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	// マーカーの描画
	marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		icon: {
			url: '../img/icon-kawadora.svg',
			Size: new google.maps.Size(48, 48)
		}
	});
}