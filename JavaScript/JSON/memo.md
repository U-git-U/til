参照[JavaScript Primer](https://jsprimer.net/basic/string/)
ty!



# JSON



- JSON.parseメソッド


	- 引数に与えられた文字列をJSONとしてパースして、オブジェクトとして返す関数

	JSONの配列が与えられた場合は配列として返す


	パースできなければ例外が投げられるため、JSON.parseは基本的にtry...catch構文での例外処理が必要



- JSON.stringigy


	第一引数に与えられたオブジェクトをJSON形式に変換する

	第二引数 JSON.replacer

	第三引数の数だけインデントして整形される、Tabも設定可能。 space



- JSON.replacer


	指定した条件でJSONデータの中身をフィルタできる。関数を与えてカスタマイズされた条件にすることも可能


-~~~


例外処理を忘れずに
