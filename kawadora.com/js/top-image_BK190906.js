var randomname = function() {
   var array = [
      "img/menu-top/menu001-rebanirateisyoku.jpg",
      "img/menu-top/menu002-horumonteisyoku.jpg",
      // "img/menu-top/menu003-kawadorateisyoku.jpg",
      "img/menu-top/menu004-nikuyasaiteisyoku.jpg",
      "img/menu-top/menu005-mixfryteisyoku.jpg",
      "img/menu-top/menu006-cyukateisyoku.jpg",
      "img/menu-top/menu007-tonkatsuteisyoku.jpg",
      // "img/menu-top/menu008-yakinikuteisyoku.jpg",
      "img/menu-top/menu009-sakanataisyoku.jpg",
      "img/menu-top/menu010-nikunabeteisyoku_syoyu.jpg",
      "img/menu-top/menu011-nikunabeteisyoku-miso.jpg",
      "img/menu-top/menu012-hamburgteisyoku.jpg",
      "img/menu-top/menu013-tenpurateisyoku.jpg",
      "img/menu-top/menu014-torikaraageteisyoku.jpg",
      "img/menu-top/menu015-barikoroteisyoku.jpg",
      "img/menu-top/menu016-okosamalunch.jpg",
      "img/menu-top/menu017-ebichiriteisyoku.jpg"
      // "img/menu-top/menu018-chukadon.jpg",
      // "img/menu-top/menu019-tenju.jpg",
      // "img/menu-top/menu020-katsuju.jpg",
      // "img/menu-top/menu021-oyakodon.jpg",
      // "img/menu-top/menu022-carryrice.jpg",
      // "img/menu-top/menu023-katsucarry.jpg",
      // "img/menu-top/menu024-hamburgcarry.jpg",
      // "img/menu-top/menu025-ramen.jpg",
      // "img/menu-top/menu026-chasyumen.jpg",
      // "img/menu-top/menu027-misoramen.jpg",
      // "img/menu-top/menu028-tonkararamen.jpg",
      // "img/menu-top/menu029-kantonmen.jpg",
      // "img/menu-top/menu030-gomokuramen.jpg",
      // "img/menu-top/menu032-kakeudon.jpg",
      // "img/menu-top/menu033-tsukimiudon.jpg",
      // "img/menu-top/menu034-nikuudon.jpg",
      // "img/menu-top/menu035-tenpuraudon.jpg",
      // "img/menu-top/menu036-yakiudon.jpg",
      // "img/menu-top/menu037-kakesoba.jpg",
      // "img/menu-top/menu038-tsukimisoba.jpg",
      // "img/menu-top/menu039-nikusoba.jpg",
      // "img/menu-top/menu040-tenpurasoba.jpg",
      // "img/menu-top/menu041-yakisoba.jpg",
      // "img/menu-top/menu042-naporitan.jpg",
      // "img/menu-top/menu043-gomokuyakisoba.jpg",
      // "img/menu-top/menu044-tenpuramori.jpg",
      // "img/menu-top/menu045-torikaraage.jpg",
      // "img/menu-top/menu046-chashumori.jpg",
      // "img/menu-top/menu047-subuta.jpg",
      // "img/menu-top/menu048-katsutama.jpg",
      // "img/menu-top/menu049-tonjiru.jpg",
      // "img/menu-top/menu050-yasaisalad.jpg",
      // "img/menu-top/menu051-shumai.jpg",
      // "img/menu-top/menu052-gakko.jpg",
      // "img/menu-top/menu053-barikoroyaki.jpg",
      // "img/menu-top/menu054-gyoza.jpg",
      // "img/menu-top/menu055-barikoroteisyoku.jpg",
      // "img/menu-top/menu000-otemoto.jpg"
   ];
   var l = array.length;
   var r = Math.floor(Math.random()*l);
   var imgurl = array[r];
   $("img#random-img").attr({"src":imgurl});
};

$(document).ready(function(){
  randomname();
});
$('.random-left, .random-right').click(function() {
  location.reload();
});
