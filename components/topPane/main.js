var TopPane = function(){
  var obj={
    init: function(selector, input_id){
      var self = this;
      self.input_id = input_id;
      self.render(selector)
      self.renderTextField()
    },
    renderTextField:function(){
      var self = this;
      var textField = new TextField();
      textField.init('.text-field-wrapper', self.input_id);
    },
    render: function(selector){
      var self = this;
      var topPane = document.querySelector(selector);
      var inner = '<div class="top-pane border relative p-50">';
            inner+='<div class="text-field-wrapper"></div>'
          inner+='</div>'
      topPane.innerHTML =  inner;
    },
  };
  return obj;
}
