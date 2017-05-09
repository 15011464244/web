
<!DOCTYPE html>
<html>
<head>
	<title>\</title>
</head>
<style type="text/css">
	.right{display: block;position: fixed;right: 10px;top: 10px;}
	.login{right: 100px;}
</style>
<body>
	<h1>我是主页</h1>
<!-- <form action="sign.php" method="post">
	姓名<input type="text" name="name">
	年龄<input type="text" name="age">
	<input type="submit">
</form> -->
<span class="right login">
		<?php
		session_start();
		if (!$_SESSION) {
			echo "<a href='login.html'>登录</a>";
		}else{echo $_SESSION["Name"];}
		?>	
</span>
<span class="right">
	<?php 
		if (!$_SESSION) {
			echo "<a href='zhuce.html'>注册</a>";
		}else{
			echo "<a href='login.php'>退出登录</a>";
		}
	?>
</span>

	
</body>
</html>