$(document).ready(function(){
  $(".calculate").click(function (){
    var totalCost=0;
      $("input").each(function(){
        if($(this).prop('checked')){
<<<<<<< HEAD

=======
>>>>>>> 1f6a1bc45d7871d78a2ee55231cdcf42f11026e1
          var thisCost = parseFloat($(this).val());
          totalCost=totalCost + thisCost;
        }
      });
      // var filter = $(this).val();
<<<<<<< HEAD


//var totalCostMoneyFormat = format(totalCost,"$");
//console.log(totalCostMoneyFormat);
$(".TotalFines").find("span").text(totalCost);


    //  $(".item.active").removeClass("active");

      //$("." + filter).addClass("active");


  });
  //function format(n, currency) {
    //return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
//}
=======
//var totalCostMoneyFormat = format(totalCost,"$");
//console.log(totalCostMoneyFormat);
$(".TotalFines").find("span").text(format(totalCost, "$"));
    //  $(".item.active").removeClass("active");
      //$("." + filter).addClass("active");
  });
  function format(n, currency) {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }
>>>>>>> 1f6a1bc45d7871d78a2ee55231cdcf42f11026e1
});
