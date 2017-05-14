(function (){
	window.Slider = function Slider1(argsJSON){
		if (!argsJSON.ID) {
			throw new Error("对不起，你传入的参数");
			return;
		}
		this.index = 0;
		this.interval = argsJSON.interval;
		this.carousel = document.getElementById(argsJSON.ID);
		this.list	 =	document.getElementsByTagName("li");
		this.leftbtn  = document.getElementsByClassName("leftbtn")[0];
		console.log(this.leftbtn);
		this.rightbtn = document.getElementsByClassName("rightbtn")[0];
		// 缓冲公式
        // 第一个参数是 t 表示当前的帧编号
        // 第二个参数是 b 表示起始位置
        // 第三个参数是 c 表示变化量
        // 第四个参数是 d 表示总帧数
		this.tween = argsJSON.tween||function(t,b,c,d){
			return c * t / d + b;
		}
		console.log(parseInt("08"));
	}
	
	// Slider.prototype._findTagByClassname = function(classname){
	// 	var elems = this.carousel.getElementsByTagName("*");
	// 	var arr = [];
	// 	for (var i = 0; i < elems.length; i++) {
	// 		if(elems[i].nodeType == 1&&elems[i].className.indexOf(classname)!= -1){
	// 			arr.push(elems[i]);
	// 		}
	// 	}
	// 	return arr;
	// }
	Slider.prototype._next = function(){
		var self = this;
		if (self.timer) {
			return;
		}
		var oldindex = self.index;
		self.index++;
		 if (self.index > self.list.length - 1) {
            self.index = 0;
        }
		console.log(self.index);
		var arr = [{"obj":self.list[oldindex],
					 "start":0,
					 "end":-600	},
		           {"obj":self.list[self.index],
					 "start":600,
					 "end":0	}]
		self._animate(arr,1000);
		
	}
	Slider.prototype._animate = function(arr,time){
		var self = this;
		var currentFrame = 0;
		var totalFrame =parseInt(time/this.interval);

		
		this.timer = setInterval(function(){
			if (currentFrame>=totalFrame) {
			console.log(currentFrame);
			clearInterval(self.timer);
			self.timer = null;
		    }
			currentFrame ++;
			arr[0].obj.style.left = self.tween(currentFrame,arr[0].start,arr[0].end-arr[0].start,totalFrame)+"px";
			arr[1].obj.style.left = self.tween(currentFrame,arr[1].start,arr[1].end-arr[1].start,totalFrame)+"px";
		},this.interval)	
	}
	Slider.prototype._leftbtn=function(){
		var oldindex = this.index;
		if (this.index<0) {
			this.index=this.
		}
		this.index -- ;
		this._animate([
			{"obj":this.list[this.oldindex],
			 "start":0,
			 "end":-600},
			{"obj":this.list[this.index],
			 "start":600,
			 "ent":0}
			],1000);
		}
	}
	Slider.prototype._rightbtn = function(){
		this._next();
	}
	Slider.prototype._clickbtn = function(){
		var that = this;
		this.rightbtn.onclick =function(){
			that._rightbtn();
		}
		this.leftbtn.onclick = function(){

		}
	}

})();