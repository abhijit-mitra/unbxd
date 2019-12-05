var TextField = function(){
  var obj={
    init: function(selector, input_id){
      var self = this;
      self.input_id = input_id;
      self.render(selector);
    },
    render: function(selector, id){
      var self = this;
      var handleEnter = self.handleEnter;
      var textField = document.querySelector(selector);
      var inner = '<div class="input-group mb-3">';
            inner += '<input type="text" class="form-control" id="'+self.input_id+'" />'
          inner+='</div>'
      textField.innerHTML =  inner;
    },
  };
  return obj;
}
