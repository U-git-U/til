参照[JavaScript Primer](https://jsprimer.net/basic/string/)
ty!




# 関数と宣言



- functinoから始まる文を関数、関数宣言



- return文の値、return文そのものを省略した場合はundefinedが返されるんだと



-宣言された関数(A)、呼び出された関数(B)での引数の個数


	A < B、差異はUndefined

	A > B、余った分は無視



	デフォルト値が指定されていれば非Undefined

		`function XXX(x = "デフォルト値"){}`


	＊Nullish coalesscing演算子

		`const XXX = YYY ?? "デフォルト";`


	Rest parametersは動的な引数でも受け取れる

	Spread構文は配列を順に渡せる

	arguments文（わかりにくくないのか）

	*Rwst paramentersが使える場合は利用機会は少ない



	分割代入、オブジェクト・配列からプロパティを直接に参照できる

	`const XXX = {id: 12}`

	`console.log(XXX.id);`


	*[分割代入](https://jsprimer.net/basic/function-declaration/#function-destructuring)




- 関数はオブジェクト


	ファーストクラスファンクション、変数に値を代入するように関数も代入できる

	↑を省略できる`const XXX = function() { "式or処理" return YYY }`

	匿名関数・無名関数



- Arrow Function


	[有難い参照](https://jsprimer.net/basic/function-declaration/#function-destructuring)


	`this`が静的に決定、arguments変数を参照できない


	arguments変数を参照できない！非推奨！！**functinoでは非推奨**



	*** `this`の関係上、Arrow関数 > function関数 ***





	同名の関数があれば後述の関数で上書きされる



- コールバック関数



	***`ふわふわと`した理解でしかない***




	配列を渡してforEach関数で分解できたりする`だって`



	毎回、関数を定義してその関数をコールバック関数として渡すのは、少し手間がかかります。 そこで、関数はファーストクラスであることを利用して、コールバック関数となる匿名関数をその場で定義して渡せます。

	＊使い慣れねば



	
- メソッド



	> オブジェクトのプロパティである関数をメソッドと呼びます。


	





~~~

Nullish coalescing演算子（??）



省略式は慣れないと難しい



「コールバック関数」...あわあわ（頭の中で知識と理解が綱がらない）





とにかく、抽象と具体・知識と行動を近づけたい
