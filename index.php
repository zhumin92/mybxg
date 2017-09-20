<?php
	header('content-type:text/html; charset=utf8');
	//include
	// $path = $_SERVER['PATH_INFO'];
	// var_dump($_SERVER);
	$dir = 'main';
	$filename = 'index';

	if(array_key_exists('PATH_INFO', $_SERVER)){
		// console.log(1);
		$path = $_SERVER['PATH_INFO'];
		$str = substr($path, 1);
		$ret = explode('/', $str);
		if(count($ret) == 2){
			$dir = $ret[0];
			$filename = $ret[1];
		}else{
			$filename = 'login';
		}
	}


	include('./views/'.$dir.'/'.$filename.'.html');
	
?>