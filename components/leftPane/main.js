var LeftPane = function(){
  var obj={
    init: function(selector, color_data, size_data){
      var self = this;
      self.color_data = color_data;
      self.size_data = size_data;
      self.render(selector)
      self.renderCheckboxGroup();
    },
    renderCheckboxGroup:function(){
      var self= this;
      var checkboxGroup = CheckboxGroup();
      checkboxGroup.init('.checkbox-group-wrapper_1', self.color_data)
      checkboxGroup.init('.checkbox-group-wrapper_2', self.size_data)
    },
    render: function(selector){
      var self = this;
      var leftPane = document.querySelector(selector);
      var inner = '<div class="left-pane p-50 border">';
            inner += '<div class="checkbox-group-wrapper_1 border"></div>';
            inner += '<div class="checkbox-group-wrapper_2 border"></div>';
          inner+='</div>';
      leftPane.innerHTML =  inner;
    },
  };
  return obj;
}
