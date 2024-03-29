const housing = document.querySelector('.container__housing');
const hotel = housing.querySelector('.hotels');
const hostel = housing.querySelector('.hostels');
const apartment = housing.querySelector('.apartments');
const reset = housing.querySelector('.reset');


database = [
    {
        type: "apartment",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$1917",
        name: "Bella Vista At Warner Ridge",
        cover: "https://photos.zillowstatic.com/cc_ft_768/ISes2lgv1yxk311000000000.jpg",
        style: 'block'
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "2",
        guest: "4",
        price: "$2546",
        name: "Bella Vista At Warner Ridge",
        cover: "https://photos.zillowstatic.com/p_f/IS27afkiwa0za11000000000.jpg"
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "3",
        guest: "5",
        price: "$3334",
        name: "Bella Vista At Warner Ridge",
        cover: "https://photos.zillowstatic.com/p_f/ISek84dfn172p11000000000.jpg"
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$1804",
        name: "Versailles",
        cover: "https://photos.zillowstatic.com/cc_ft_768/ISuo23tkwxd54u0000000000.jpg"
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "3",
        guest: "5",
        price: "$2699",
        cover: "https://photos.zillowstatic.com/cc_ft_768/ISuoq9apgdck5v0000000000.jpg",
        name: "Versailles"
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$1804",
        name: "Versailles",
        cover: "https://photos.zillowstatic.com/cc_ft_768/ISyzhx8zzgfv5v0000000000.jpg"
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$1804",
        name: "Versailles",
        cover: "https://photos.zillowstatic.com/cc_ft_768/IS7ixjh7utunuo1000000000.jpg"
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$2381",
        name: "Triana Apartments",
        cover: "https://photos.zillowstatic.com/cc_ft_768/ISvwkyv0ucaz9p1000000000.jpg"
    },
    {
        type: "apartment",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$1804",
        name: "Triana Apartments",
        cover: "https://photos.zillowstatic.com/cc_ft_768/ISe0dq1em34rpt0000000000.jpg"
    },
    {
        type: "hostel",
        room: "entire bed",
        bed: "1",
        guest: "1",
        price: "$180",
        name: "USA Hostels Hollywood",
        cover: "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/6/699/36.jpg"
    },
    {
        type: "hostel",
        room: "entire bed",
        bed: "1",
        guest: "2",
        price: "$185",
        name: "Freehand Los Angeles",
        cover: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_329,h_240,c_fill,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/2/272919/25.jpg"
    },
    {
        type: "hostel",
        room: "entire bed",
        bed: "1",
        guest: "2",
        price: "$135",
        name: "Hi Los Angeles - Santa Monica",
        cover: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_329,h_240,c_fill,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/8/824/5024.jpg"
    },
    {
        type: "hostel",
        room: "entire bed",
        bed: "1",
        guest: "2",
        price: "$118",
        name: "Walk of Fame Hollywood Hostel",
        cover: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_329,h_240,c_fill,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/1/1851/30.jpg"
    },
    {
        type: "hostel",
        room: "entire bed",
        bed: "1",
        guest: "2",
        price: "$89",
        name: "Banana Bungalow West Hollywood",
        cover: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_329,h_240,c_fill,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/32211/goxw32i9lvalbxlvxtn9"
    },
    {
        type: "hostel",
        room: "entire bed",
        bed: "1",
        guest: "2",
        price: "$89",
        name: "Samesun Venice Beach",
        cover: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_329,h_240,c_fill,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/1/16860/1.JPG"
    },
    {
        type: "hostel",
        room: "entire bed",
        bed: "1",
        guest: "2",
        price: "$27",
        name: "Melrose Hostell",
        cover: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_329,h_240,c_fill,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/1/1826/48.jpg"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$109",
        name: "Hollywood Historic Hotel",
        cover: "https://content.r9cdn.net/rimg/kimg/7f/d0/0e547a1b-1525448e1cd.jpg?width=452&height=418&xhint=290&yhint=427&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$183",
        name: "The Rose Hotel",
        cover: "https://content.r9cdn.net/rimg/himg/5f/69/7c/arbisoftimages-2224107-6O6A9844-554732.jpg?width=452&height=418&xhint=377&yhint=687&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$190",
        name: "The Hollywood Roosevelt",
        cover: "https://content.r9cdn.net/rimg/kimg/db/04/8336174d-15d802a71ab.jpg?width=452&height=418&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$151",
        name: "Hotel Indigo Los Angeles Downtown",
        cover: "https://content.r9cdn.net/rimg/himg/88/c9/cc/leonardo-2011355-LAXFS_4973010433_S-image.jpg?width=452&height=418&xhint=1871&yhint=1402&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$191",
        name: "The Garland",
        cover: "https://content.r9cdn.net/rimg/himg/4b/ae/b7/leonardo-1315561-The_Garland_-_Hotel_Exterior_S-image.jpg?width=452&height=418&xhint=1272&yhint=675&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$202",
        name: "Ace Hotel Downtown Los Angeles",
        cover: "https://content.r9cdn.net/rimg/kimg/94/4b/c440ed04-15e7b987665.jpg?width=452&height=418&xhint=273&yhint=190&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$109",
        name: "Shelter Hotel Los Angeles",
        cover: "https://content.r9cdn.net/rimg/himg/d7/9f/0b/revato-28804-10959445-530489.jpg?width=452&height=418&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$209",
        name: "Kimpton Hotel Wilshire",
        cover: "https://content.r9cdn.net/rimg/himg/94/5a/3c/tripxpackage-8568-bb5_37781dfc78fdeeaee508b44a18c0c8f0f064d94d-601206.jpg?width=452&height=418&xhint=380&yhint=692&crop=true&watermarkheight=28&watermarkpadding=10"
    },
    {
        type: "hotel",
        room: "entire room",
        bed: "1",
        guest: "2",
        price: "$229",
        name: "Loews Hollywood Hotel",
        cover: "https://content.r9cdn.net/rimg/himg/4a/ab/cc/leonardo-1286409-DOUBLE_ROOM_HIGH_RES_DAY_S-image.jpg?width=452&height=418&xhint=173&yhint=113&crop=true&watermarkheight=28&watermarkpadding=10"
    },
];

hotel.addEventListener("click", pickHotel);
hostel.addEventListener("click", pickHostel);
apartment.addEventListener("click", pickApartment);
reset.addEventListener("click", pickAll);


function pick(selectedType) {
    for (const i in database) {
        document.getElementById('el-' + i).style.display = 'flex';
        if (database[i].type !== selectedType) {
            document.getElementById('el-' + i).style.display = 'none';
        }
    }
}
function pickAll(){
    displayOptions();
    reset.classList.toggle("active");

    hotel.classList.remove("active");
    hostel.classList.remove("active");
    apartment.classList.remove("active");

}
function pickHotel() {
    pick('hotel');
    hotel.classList.toggle("active");

    hostel.classList.remove("active");
    apartment.classList.remove("active");
    reset.classList.remove("active");

}
function pickHostel() {
    pick('hostel');
    hostel.classList.toggle("active");

    hotel.classList.remove("active");
    apartment.classList.remove("active");
    reset.classList.remove("active");

}
function pickApartment() {
    pick('apartment');
    apartment.classList.toggle("active");

    hostel.classList.remove("active");
    hotel.classList.remove("active");
    reset.classList.remove("active");
}


function displayOptions(option) {
    const list = document.querySelector(".container__list");
    let result = '';
    let counter = 0;
    database.forEach(option => {
        result += `
     <div class="list__item" id="el-${counter}">
                <div class="item__img">
                    <img src="${option.cover} " alt="">
                </div>
                <div class="item__text">
                    <div>
                        <div class="item__text--main">${option.name}</div>
                        <div class="item__text--price">${option.price}</div>
                    </div>
                    <div class="item__text--sec">
                        <span>${option.room}</span>
                        <span>${option.bed} bed</span>
                        <span>${option.guest} Guests</span>
                    </div>
                </div>
            </div>
      `;
        counter++;
    });

    list.innerHTML = result;
}
displayOptions();

// Initialize and add the map
function initMap() {

    //Map options
    var options = {
        zoom: 8,
        center: {lat: 34.2083, lng: -118.6059}
    };

    //New map
    var map = new google.maps.Map(document.getElementById("map"), options);


    //listen for click on map
    google.maps.event.addListener(map, "click", function (event) {
        //add marker
        addMarker({coords: event.latLng});
    });
    /*
    //add marker
    var marker = new google.maps.Marker({
        position: {lat: 34.0101, lng: -118.4959},
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"//to set your customized marker
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Santa Monica Pier</h1>'
    });

    marker.addListener("click", function () {//pay attention -  NOT addEventListener, but just ADDLISTENER
        infoWindow.open(map, marker)
    })
*/

    //array of markers
    var markers = [
        {
            coords: {lat: 34.0101, lng: -118.4959},
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: "<h1>Santa Monica Pier</h1>"
        },
        {
            coords: {lat: 34.0639, lng: -118.3592},
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: "<h1>LACMA</h1>"
        },
        {
            coords: {lat: 34.0689, lng: -118.4452},
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: "<h1>UCLA</h1>"
        }

    ];

    //loop through markers
    for (var i = 0; i < markers.length; i++) {
        //add marker
        addMarker(markers[i]);
    }


    //Add marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords, //pay attention - no {} braces
            map: map,
            // icon: props.iconImage//to set your customized marker
        });
        //check for custom icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage);
        }
        //check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            })
        }

        marker.addListener("click", function () {//pay attention -  NOT addEventListener, but just ADDLISTENER
            infoWindow.open(map, marker)
        })
    }
}
