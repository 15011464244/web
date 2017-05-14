(function (){
	window.Slider = function Slider(argsJSON){
		if (!argsJSON.ID) {
			throw new Error("对不起，你传入的参数");
			return;
		}
		this.index = 0;
		this.interval = argsJSON.interval;
		this.carousel = document.getElementById(argsJSON.ID);
		this.list	 =	document.getElementsByTagName("li");
		this.tween = argsJSON.tween||function(t,b,c,d){
			return c * t / d + b;
		}

	}
	/*
	Slider.prototype._findTagByClassname = function(classname){
		var elems = this.carousel.getElementsByTagName("*");
		var arr = [];
		for (var i = 0; i < elems.length; i++) {
			if(elems[i].nodeType == 1&&elems[i].className.indexOf(classname)!= -1){
				arr.push(elems[i]);
			}
		}
		return arr;
	}*/
	Slider.prototype._next = function(){
		var self = this;
		setInterval(function(){
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
		},2000)
		
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

})();