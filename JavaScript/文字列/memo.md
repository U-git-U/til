参照[JavaScript Primer](https://jsprimer.net/basic/string/)
ty!



# 文字列




- 文字列を検索して真偽値を取得

	検索した文字列を含むか
	`String.prototype.includes(検索文字列)`

	検索した文字列が先頭にあるか
	`String.prototype.startsWith(検索文字列)`

	検索した文字列が末尾にあるか
	`String.prototype.endsWith(検索文字列)`


	- RegExp.prototype.test


- 正規表現のパターンにマッチした箇所のインデックスを返す、なければ-1
	String.prototype.search(正規表現パターン);


- 正規表現のパターン検索でマッチした情報を取得、マッチなしだとnull
	String.prototype.match();
	String.prototype.match(/g);
			matchAll
	RegExp.prototype.exec

	- 正規表現の()で囲んだ部分「キャプチャリング」範囲だけ取り出すことも可能



- Stringのreplaceメソッドで文字列の一部を削除したような挙動に



- 正規表現のgフラグを使って繰り返し処理を短くシンプルに実装できそう
	const str = "にわにはにわにわとりがいる";
	console.log(str.replace("にわ", "niwa")); // => "niwaにはにわにわとりがいる"
	console.log(str.replace(/にわ/g, "niwa")); // => "niwaにはniwaniwaとりがいる"


	- replaceAllでまとめて置き換えることも可能


- 正規表現のキャプチャをコールバック関数で置き換えられる。かなり便利そうわーい
　「2020-07-23」→「2020月07月23日」


- タグ付きテンプレート関数



---
タグつきテンプレート関数
