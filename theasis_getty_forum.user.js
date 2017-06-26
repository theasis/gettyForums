// Copyright (c) Martin McCarthy 2015
// version 0.0.5
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
//        Spell 'arial' correctly
// v0.0.4 09 Jul 2015
//        Make sticky and announcement posts a little more obvious
// v0.0.5 09 Jul 2015
//        Make the user details less...huge
// v0.0.6 07 Aug 2015
//		  Link to iStock
// v0.0.7 09 Dec 2015
//		  Show iStock balance if you're logged in to iS
// v0.0.8 06 Feb 2017
//		  iStock balance is no longer available, so stop checking for it!
// v0.0.9 26 Jun 2017
//      iStock forums are folded im with Getty forums, so don't try to close the non-iStock ones
//
function main() {

  fix_styles=function() {
    jQ(".yafnet").css({"font-family":"'Lucida Grande',Verdana,Corbel,'Bitstream Vera Sans','DejaVu Sans',arial,sans-serif"});
    jQ("tr.forumRow, tr.forumRow_Alt, tr.topicRow, tr.topicRow_Alt").css({"border-top":"thin dashed #999"});
    jQ(".topicImage img[src$='/topic_sticky.gif']").parent().parent().css({"border-left":"4px solid gold","background-image":"linear-gradient(gold,#ffc,#ffe,#ffe,#eeb)"});
    jQ(".topicImage img[src$='/topic_announce.gif']").parent().parent().css({"border-left":"4px solid red","background-image":"linear-gradient(#f44,gold,#ffc,#ffe,#f44)"});
    jQ("div.yafUserBox img.avatarimage").css({"max-height":"48px"});
    jQ("div.yafUserBox").find("div.section:gt(0)").hide();
    jQ("div.yafUserBox").each(function(){
      var t=jQ(this);
      var reveal=jQ("<div class='section'>User details...</div>").css({"cursor":"pointer","background":"url('/forum/Themes/Getty/RightArrow.png') transparent no-repeat 90% 50%"}).click(function(){
        t.find("img.avatarimage").css({"max-height":""});
        t.find("div.section:gt(0)").show();
        jQ(this).hide();
      });
      t.append(reveal);
    });
  };

  text_tweaks=function() {
    jQ("span[id^='dvThankBox'] span:contains('Like')").text("Say Thanks");
  };
  
  add_links=function() {
	  var linkItem=jQ("<li class='menuGeneral'><a id='theasis_link_to_istock' title='iStock' href='http://istockphoto.com/user_view.php' target='_blank'>iStock</a></li>");
	  jQ("#yafheader ul.menuList:last").append(linkItem);
  };
  
  fix_styles();
  text_tweaks();
  add_links();
}


// load jQuery and kick off the meat of the code when jQuery has finished loading
function addJQuery(callback) {
	window.jQ=jQuery.noConflict(true);
	main(); 
}

addJQuery(main);

