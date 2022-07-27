参照[JavaScript Primer](https://jsprimer.net/basic/string/)
ty!



# 関数とthis




- ベースオブジェクト


	- 関数ないで宣言されただけのthisはUndifine


	- obj内で宣言されると直近のobjがベースオブジェクトになりthisはObjになる


	- obj内のメソッドを変数に'個別'で代入した場合は親となるobjから'抜けた'ような状態になりUndefineに

	
	- メソッドでの対処、thisのベースが不要の場合はnullを（null, ...）を渡す

		`関数.call(thisのベース, 関数の引数);`

		`関数.call(thisのベース, [引数],[引数]);` ///　配列で


		「thisをオブジェクトに関連させた関数をラップした」関数を作る		

		`関数.bind(thisのベース, 関数の引数);`

		`conse X = Y.bind( obj, 引数)`

	

- コールバック関数でのthisはUndefineになるので注意（関数として呼び出されたから）

	- thisを変数に代入しておく（コールバック関数の内容が未定義の段階で対応できるように等）

	- mapメソッドなどは第二引数にthisとなる値を渡すことができるので利用する

	- Arrow Functionでコールバック関数を使う

	Arrow Functionは「this」を持たないのでスコープチェンと同じように外側を参照するため自然と「this」のフォーカスが上のオブジェクトへ移る。静的（定義）に決まる

	逆にArrow Funvtionはthisを持たないためbind()できない。一つ外側のメソッドなどへは可能




~~~

thisの静的な動きなどを実用的になれるように触らねば
