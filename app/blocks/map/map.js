ymaps.ready(init);
let myMap;
let myPlacemark;
let myMap2;
let myPlacemark2;
let myMap3;
let myPlacemark3;

function init() {
  myMap = new ymaps.Map('map', {
    center: [55.771422, 37.63711],
    zoom: 15,
    controls: []
  });

  myPlacemark = new ymaps.Placemark([55.771422, 37.63711], {
    hintContent: 'ВЕТКЛИНИКА'
  });

  myMap.geoObjects.add(myPlacemark);

  myMap2 = new ymaps.Map('map2', {
    center: [55.771422, 37.63711],
    zoom: 15,
    controls: []
  });

  myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
    hintContent: 'ВЕТКЛИНИКА'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/images/marker3.svg',
    iconImageSize: [22, 32],
    iconImageOffset: [-8, -30]
  });

  myMap2.geoObjects.add(myPlacemark2);

  myMap3 = new ymaps.Map('map3', {
    center: [55.771422, 37.63711],
    zoom: 15,
    controls: []
  });

  myPlacemark3 = new ymaps.Placemark(myMap3.getCenter(), {
    hintContent: 'ВЕТКЛИНИКА'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/images/marker.svg',
    iconImageSize: [22, 32],
    iconImageOffset: [-8, -30]
  });

  myMap3.geoObjects.add(myPlacemark3);

}
