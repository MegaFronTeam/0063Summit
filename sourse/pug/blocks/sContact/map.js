var myMap;

					ymaps.ready(init);

					function init () {
						myMap = new ymaps.Map('map', {
							center:[55.752105, 37.545416],
							clusterize: true,
							zoom: 15
						});

						var placemark = new ymaps.Placemark([55.752105, 37.545416], {
							balloonContent: 'г.Москва, Краснопресненская набережная д.14',
							iconCaption: 'Лекторий Музея «Гараж»'
						}, {
							iconColor: '#872B95',
						});
						myMap.geoObjects.add(placemark);

						myMap.behaviors.disable('scrollZoom');
						if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
							myMap.behaviors.disable('drag');
						};
					};