// JavaScript Document
<!--
//添加到收藏夹
function MyAddPanel(title,url,desc) {
	if((typeof window.sidebar == 'object') && (typeof window.sidebar.addPanel == 'function')) {
		window.sidebar.addPanel(title,url,desc);
	}
	else
	{
		window.external.AddFavorite(url,title);
	}
}

//改变文字大小
function doZoom(ob,font_size,line_height) {
	document.getElementById(ob).style.fontSize=font_size+"px";
	document.getElementById(ob).style.lineHeight=line_height+"px"
}
//-->