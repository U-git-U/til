参照[JavaScript Primer](https://jsprimer.net/basic/string/)
ty!




# 非同期処理:コールバック




- 代表的な非同期処理の関数にsetTimeoutがある


- 同期的に処理がストップする工程があるとブラウザに影響がでる
JSはブラウザのメインスレッド(UIスレッド)で実行されるため、ページの表示や操作に係る


- JSの非同期処理は一部を除き並行処理で扱う。

	並行処理は処理を一定の単位ごとに分けて、切り替えながら実行すること。

	*非同期処理実行中に重い処理をすると非同期処理が遅れることがある


- 非同期処理と例外処理


	- setTimeout関数のコールバック関数における例外は、コールバック関数内で同期的なエラーとしてキャッチする必要がある

	- 上記の通り非同期中にエラーをキャッチできても非同期外ではわからないので処理が必要



- エラーファーストコールバック



- Promise（ビルトインオブジェクト）



	- Promiseでは非同期処理に成功するとコールバック関数としてthenメソッドへ、失敗するとchatchメソッドへ渡す

	- then(第一、第二)メソッドの第一引数に成功時、第二引数に失敗時に呼ばれるコールバック関数を渡す

	成功時の処理のみ

	`XXX().then(() => {

		処理

	});`

	失敗時の処理のみ

	`XXXU("エラーメッセージ").catch(error => {
		consol.log(error.message);`
	});


	- Promiseで例外が発生すると自動的にキャッチされ、reject関数の呼び出し同じように失敗を同じ反応になる

		Proimse内で発生した例外は、thenメソッドの第二引数・catchメソッドで登録されたコールバック関数が呼ばれる


	- Promiseインスタンスは Fulfilled, Reject, Pendingの3つの状態が存在する

	- thenメソッドで登録したコールバック関数は状態が変化する際の一度だけ呼び出される
	`resolve`や`catch`も


	- `new Promise ...`の糖衣構文として`Promise.resolve(引数)`と書ける


- Pomiseチェーン（メソッドチェーン）


	- `then`や`catch`メソッドは常に新しいPromiseインスタンスを作成する仕組み

	`then`メソッドの返り値のPromiseインスタンス内に、`then`メソッドを追加できる



	- 失敗時に`catch`が呼び出された後に続く`then`に続いていく

	- コールバックで返す値を次に引き継げるので`return`で次の`then`へと渡せる

	- `catch`の次は`then`が呼び出されるが、`Promise.reject`を返すことでRejectedな状態を継続できる

	`return Promise.reject(error);`


	- try...catch...finally構文、finallyは成功・失敗に関わらず最後に呼び出される

	＊[参考](https://jsprimer.net/basic/string/)のt.c.f構文を使って判定を管理する変数を扱うサンプルコードがとても勉強になったアザス




- Promise.all([])


	- `Promise.all([])`は配列でプロミスを実行

	順不同で同時処理、条件が問題なければ逐次処理(チェーン)より早い

	- 個別にエラーハンドリングしたい場合にも使える

	[参考](https://qiita.com/OsakaKaiyukan/items/94acab101b4e3556b31b)


- Promise.race()


	- 複数のPromiseを競争(race)させる

	最初にSettledになったPromiseがFulfilledかRejectedかの結果を返す（2着以降のProise処理はスルー）

	＊例、非同期処理のタイムアウト。一定時間内に処理が終わらなければエラー処理

	`Promise.race([

		check1(""),
		timeout(500)
	]).then...catch`



- Async Function


	・必ずPromiseインスタンスを返す関数を定義する

	async function XXX(){return "YYY";}

	async function XXX(){return Promise.rject(new Error(YYY");}

	async function XXX(){throw new Error('YYY');}


- await式


	- Async Function関数内の直下 or ECMAモジュールの直下

	- 非同期処理を実行して完了するまで次の処理に進まない。同期処理のように順番に実行される

	非同期処理の中でもtry...catchでエラーに反応できる？


	- Async Function内でtry...catchされるためコールバック関数で渡されてからはtry...catchは実行されない

	- チェーンもawait式で逐次的・スムーズに書ける


	- AsyncFunctionの直下でなければエラーになるので、コールバック関数との関係に注意

	XXX.forEach(function(YYY){}); /// error

		XXX.forEach(async function(YYY){});


	- Module の直下AsyncFunction内でなくてもawait式を利用可能




~~~

Promise構文にしっかり慣れる
