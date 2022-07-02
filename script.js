$(document).ready(function () {
    $("#wrapper-about").css({'background-color': '#F2F1ED'});
    $("#wrapper-about").animate({margin: '20px 0px'}, 0);
    $(".sub").fadeIn(900);
    $(".description").fadeIn(900);
    
    const a = $(".description").find("a");
    const i = $(".description").find("i");
    $(a).hover(function () { 
        $(i).animate({"padding-left": "70px"}, 500);
     },function () { 
        $(i).animate({"padding-left": "20px"}, 500);
      })
    var bg = document.getElementById("content");
    var title = document.getElementById("title");
    var explain = document.getElementById("explain");
    var img = document.querySelectorAll("img");

    function foregroundColor (color){
        title.style.color = color;
        explain.style.color = color;
    };

    img[0].onclick = ()=>{
        $(".wrapper").css({"background-color": "transparent", 'margin':  '20px 90px'});
        bg.style.backgroundImage = "url('assets/image/anjungan.jpg')"; 
        title.innerHTML = "Anjungan";
        explain.innerHTML = "Spot wisata di TMII yang tak boleh dilewatkan adalah anjungan. Di sana terdapat banyak anjungan atau replika rumah daerah mulai dari Aceh hingga Papua. Pengunjung bisa berfoto di anjungan rumah adat itu."
        foregroundColor("white");
    };img[1].onclick = ()=>{
        $(".wrapper").css({"background-color": "transparent", 'margin':  '20px 90px'});
        bg.style.backgroundImage = "url('assets/image/ppiptek.JPG')";
        title.innerHTML = "PP-IPTEK";
        explain.innerHTML = "Bagi pengunjung yang ingin wisata edukasi, di TMII juga ada PP-IPTEK merupakan Pusat Peragaan Ilmu Pengetahuan dan Teknologi. Di sana pengunjung bisa mencoba wahana listrik, magnet, laboratorium komputer, hingga patung dinosaurus."
        foregroundColor("white");
    };img[2].onclick = ()=>{
        $(".wrapper").css({"background-color": "transparent", 'margin':  '20px 90px'});
        bg.style.backgroundImage = "url('assets/image/Jakarta-TMII_1920x1080px-1030x579.jpg')";
        title.innerHTML = "Keong Mas";
        explain.innerHTML = "Taman Legenda Keong Emas ini menawarkan sejumlah wahana taman bermain yang seru dan menarik. Ada Petualangan Dinosaurus, Mata Legenda, Ulat Selur, Bajak Laut, Mobil Tanjak, Kereta Beos, Baby Dino, Perang Galaksi, dan Nirwata Kisar."
        foregroundColor("black");
    };img[3].onclick = ()=>{
        $(".wrapper").css({'background-color': '#F2F1ED'});
        $(".wrapper").animate({margin: '20px 0px'}, 0);
        bg.style.backgroundImage = "url('assets/image/Taman.jpg')";
        title.innerHTML = " Miniatur Arsipel Indonesia";
        explain.innerHTML = "Miniatur Arsipel Indonesia memperlihatkan secara nyata keindahan dan wujud bentang darat Indonesia berikut gunung, bukit, dan lembah dalam wujud mini. Tumbuh-tumbuhan dan tanaman bunga menghiasi tinggi rendahnya pulau-pulau mencerminkan keindahan alam Indonesia."
        foregroundColor("black");
    };
    
});



$(document).ready(function () {
    $(window).scroll(function () { 
        console.log(window.scrollY);
        if (window.scrollY > 50) {
            $("#history-wrapper").animate({margin: '0px 0px'}, 0).css({'background-color': '#F2F1ED'});
        }else{
            $("#history-wrapper").animate({margin: '30px 90px'}, 0).css("background-color", "transparent");
        }
    });
});

