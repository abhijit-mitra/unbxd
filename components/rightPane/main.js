var RightPane = function(){
  var obj={
    init: function(selector, card_data){
      var self = this;
      self.card_data = card_data;
      self.render(selector);
      self.renderCard();
    },
    renderCard:function(){
      var self = this;
      var cards = Card()
      cards.init('.card-wrapper', self.card_data);
    },
    render: function(selector){
      var self = this;
      var rightPane = document.querySelector(selector);
      var inner = '<div class="right-pane p-50 border min-heigth-v">';
            inner += '<div class="card-wrapper row"></div>';
          inner+='</div>';
      rightPane.innerHTML =  inner;
    },
  };
  return obj;
}
