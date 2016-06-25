$(function(){
			
	var searchTimer = null;
	var libsArr = (function(){
		var i, arr = [];
		for(i in libs) {
			arr.push(i);
		}
		return arr.sort();
	})();
	
	

	var cdnpath = "http://apps.bdimg.com/";
	
	function buildUnit (item){
		var cdnpath = "http://apps.bdimg.com/libs/";
		return '<dd><h3><a name="' + item.name + '">' + item.name.toLowerCase() + '</a></h3><div>' + cdnpath + item.name + '/' + item.version + "/" + item.filename + '</div></dd>'
	}
	
	function buildTitle(){
		return '<dt class="ff"><h3>库名称</h3><div>地址</div></dt>';
	}
	
	function search(kw){
		var libnames = libsArr.filter(function(libname){
			return libname.toLowerCase().indexOf(kw.toLowerCase()) >= 0;
		});
		libnames.sort(function(a,b){
			return (a.length - b.length);
		});
		return libnames;
	}
			
	function initOpts(sel, vers, detail){
		var str = "";
		vers.forEach(function(ver){
			str += '<option value="' + ver + '">' + ver + '</option>';
		});
		sel.html($(str));
		sel[0].lastChild.setAttribute("selected","selected");
		renderFiles(vers[vers.length-1], detail);
	}
	
	function renderFiles(ver, detail){
		$("#libversion").text(ver);
		var str = "";
		detail.forEach(function(file){
			str = str + '<li>' + cdnpath + file + '</li>';
		});
		$("#libfiles").html($(str));
	}
	
	
	var $select = $("#libselect");
	var $intro = $("#libintro");
	var $title = $("#libtitle");
	var $md = $(".md-content");
	
	function renderModal (target, name){
		
		var url = "/v/" + name;
		
		
		window.$popajax = $.ajax({
			url : url,
			beforeSend : function(){
				$title.html("Loading...");
				$intro.find("a").text("Loading...");
				$intro.find("p").text("Loading...");
				$intro.find("i").text("Loading...");
			},
			success : function (data){
					
				var info = data;
				
				
				
				$title.html(name);
				
				var hp = info.homepage || info.url || (info.repositories && info.repositories[0].url) || undefined;
				$intro.find("a").attr("href",  hp || "https://github.com");
				$intro.find("a").text(hp || "作者没有留下homepage");
				$intro.find("p").text(info.description || "作者没有留下描述信息");
				$intro.find("i").text(info.keywords && info.keywords.join(", "));
				
				if(info.err){
					return ;
				}
				
				var latestVersion = info.versions[info.versions.length - 1];
				initOpts($select, info.versions, info[latestVersion] || []);
				
				$("#libselect").off("change");
				$("#libselect").on("change", function(e){
					var version = e.target.value;
					renderFiles(version, info[version]);
				});
				
				//hover effect
				$("#libfiles").off("mouseenter", "li");
				$("#libfiles").on("mouseenter", "li", function(e){
					var text = $(this),
						range, 
						selection;
					
					if(!text.length) return;
					text = text[0];
					
					if (document.body.createTextRange) {
						range = document.body.createTextRange();
						range.moveToElementText(text);
						range.select();
					} else if (window.getSelection) {
						selection = window.getSelection();
						range = document.createRange();
						range.selectNodeContents(text);
						selection.removeAllRanges();
						selection.addRange(range);
					}
				});
				
			},
			error : function(err){
				console.log(err);
			}
		});
	}
	
	function init(){
		
		//render
		render(libsArr);
		
		$(".md-overlay").css('min-height', screen.availHeight);
		
		//hover effect
		$("#resultbox").on("mouseenter", "dd div", function(e){
			return false;
			var text = $(this),
				range, 
				selection;
			
			if(!text.length) return;
			text = text[0];
			
			if (document.body.createTextRange) {
				range = document.body.createTextRange();
				range.moveToElementText(text);
				range.select();
			} else if (window.getSelection) {
				selection = window.getSelection();
				range = document.createRange();
				range.selectNodeContents(text);
				selection.removeAllRanges();
				selection.addRange(range);
			}

		});

		ModalEffects(function(target){

			var name = target.getAttribute("name");
			renderModal(target,name);
			
		});
		
	}
	
	function render(libnames){
		var rst = "";
		libnames.forEach(function(libname){
			rst += buildUnit(libs[libname])
		});
		rst = buildTitle() + rst;
		$("#resultbox").html($(rst));
	}
	
	init();
	
	$("#searchbox").on('input', function(e){
		clearTimeout(searchTimer);
		searchTimer = setTimeout(function(){
			if(e.target.value === ""){
				init();
			} else {
				var libnames = search(e.target.value);
				render(libnames);
			}
		}, 300);
	});
	
	
	$("#intro").on('click', "img", function(){
		
		var name = this.getAttribute("name");
		renderModal(this, name);
		
	});
});