function httpGetAsync(theUrl)
{
    var self = this;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            self.getSearchResult(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

var Shell = function(){
  var obj={
    init: function(selector){
      var self = this;
      self.render(selector)
      self.renderTopPane()
      self.renderLeftPane()
      self.renderRightPane()
    },
    getSearchResult:function(data){
      var self=this;
      var json_data = JSON.parse(data);
      card_data = json_data.response.products;
      color_data = json_data.facets.color_uFilter;
      size_data = json_data.facets.size_uFilter;
      self.renderRightPane(card_data)
      self.renderLeftPane(color_data, size_data)
    },
    renderTopPane:function(){
      var self = this;
      var topPane= new TopPane();
      topPane.init('.top-pane-wrapper', 'search');
      var url= 'http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q=*';
      httpGetAsync.call(self, url);
      var input = document.getElementById('search');
      input.onchange= function(e){
        var value = e.target.value;
        var url= 'http://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?&q='+value;
        httpGetAsync.call(self, url);
      }
    },
    renderLeftPane:function(color_data, size_data){
      var leftPane= new LeftPane()
      leftPane.init('.left-pane-wrapper', color_data, size_data)
    },
    renderRightPane:function(card_data){
      var rightPane= new RightPane()
      rightPane.init('.rigth-pane-wrapper', card_data)
    },
    render: function(selector){
      var self = this;
      var wrapper = document.querySelector(selector);
      var shell = '<div class="shell">';
            shell += '<div class="top-pane-wrapper"></div>'
            shell += '<div class="row">'
              shell += '<div class="left-pane-wrapper col-md-4"></div>'
              shell += '<div class="rigth-pane-wrapper col-md-8"></div>'
            shell+='</div>'
          shell+='</div>'
      wrapper.innerHTML =  shell;
    },
  };
  return obj;
}
