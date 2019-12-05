var CheckboxGroup = function(){
  var obj={
    init: function(selector, data=null){
      var self = this;
      self.checkboxes = [];
      self.label = '';
      if(data){
        self.checkboxes = data.values;
        self.label = data.displayName;
        self.render(selector)
      }
    },
    render: function(selector){
      var self = this;
      var checkbox_group = document.querySelector(selector);
      var inner = '<div class="checkbox_group p-50 border">';
              inner += '<h2 class="title">'+self.label+'</h2>';
              for(var i=0;i<self.checkboxes.length;i++){
                inner += '<div class="row">';
                  inner += '<div class="custom-control custom-checkbox col-md-12">';
                    inner += '<input type="checkbox" class="custom-control-input" id="'+self.label+'_"'+i+'>';
                    inner += '<label class="custom-control-label" for="'+self.label+'_"'+i+'>'+self.checkboxes[i]+'('+self.checkboxes[i+1]+')</label>';
                  inner+='</div>';
                inner+='</div>';
                i++;
              }
          inner+='</div>';
      checkbox_group.innerHTML =  inner;
    },
  };
  return obj;
}
