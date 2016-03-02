ymaps.ready(init);
let myMap;
let myPlacemark;

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
}
