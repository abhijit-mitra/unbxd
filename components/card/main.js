var Card = function(){
  var obj={
    init: function(selector, data=[]){
      var self = this;
      self.card_data= data;
      self.render(selector);
    },

    render: function(selector){
      var self = this;
      var cardWrapper = document.querySelector(selector);
      var cards = '';
      for(var i=0;i<self.card_data.length;i++){
        var cardData = self.card_data[i];
        var card = '<div id=card'+cardData.productId+' class="col-md-3">';
                    card+='<div class="col-md-12">'
                      card+='<img src='+cardData.imageUrl[0]+' width="200" height="300"/>'
                    card+='</div>';
                    card+='<div class="col-md-12">'
                      card+='<a href="http://demo-unbxd.unbxdapi.com/product?pid='+cardData.productId+'">'+cardData.title+'</a>';
                    card+='</div>';
                    card+='<div class="col-md-12">'
                        card+='<div>'+cardData.displayPrice+'</div>';
                    card+='</div>';
            card+='</div>';
        cards = cards.concat(card)
      }
      cardWrapper.innerHTML =  cards;
    },
  };
  return obj;
}
