// Copyright (c) Martin McCarthy 2015
// version 0.0.3
// Chrome Browser Script
//
// Make some tweaks to (potentially) improve the readability of the
// Getty Contributor Forums, at least for iStock folks.
//
// v0.0.1 08 Jul 2015 Martin McCarthy
//        First public release
// v0.0.2 08 Jul 2015 Martin McCarthy
//        Wording tweaks. Because the world is insane.
// v0.0.3 08 Jul 2015
//        Change the "Like" button to "Say Thanks", at least for English
//        versions
// v0.0.4 07 Aug 2015
//		  Link to iStock
//
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

  text_tweaks=function() {
    jQ("span[id^='dvThankBox'] span:contains('Like')").text("Say Thanks");
  };
  
  add_links=function() {
	  var linkItem=jQ("<li class='menuGeneral'><a title='iStock' href='http://istockphoto.com/user_view.php' target='_blank'>iStock</a></li>");
	  jQ("#yafheader ul.menuList:last").append(linkItem);
  };

  fix_styles();
  close_non_istock_forums();
  text_tweaks();
  add_links();
}


// load jQuery and kick off the meat of the code when jQuery has finished loading
function addJQuery(callback) {
	window.jQ=jQuery.noConflict(true);
	main(); 
}

addJQuery(main);

