// version 0.0.1
function main() {

  fix_styles=function() {
    jQ(".yafnet").css({"font-family":"'Lucida Grande',Verdana,Corbel,'Bitstream Vera Sans','DejaVu Sans',ariel,sans-serif"});
    jQ("tr.forumRow, tr.forumRow_Alt, tr.topicRow, tr.topicRow_Alt").css({"border-top":"thin dashed #999"});
  };

  close_non_istock_forums=function() {
    jQ(".header2 input[src$='/collapse.gif']").each(function(){
      var t=jQ(this);
      var f=t.next().eq(0).attr('href');
      if (!f.match(/&c=10\b/)) {
          t.click();
      }
    });
  };

  fix_styles();
  close_non_istock_forums();
}


// load jQuery and kick off the meat of the code when jQuery has finished loading
function addJQuery(callback) {
	window.jQ=jQuery.noConflict(true);
	main(); 
}

addJQuery(main);

