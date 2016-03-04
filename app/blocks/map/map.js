ymaps.ready(init);
let myMap;
let myPlacemark;
let myMap2;
let myPlacemark2;

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

  myPlacemark2 = new ymaps.Placemark([55.771422, 37.63711], {
    hintContent: 'ВЕТКЛИНИКА'
  });
  myMap2.geoObjects.add(myPlacemark2);
}
