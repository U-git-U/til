参照[JavaScript Primer](https://jsprimer.net/basic/string/)
ty!


# 例外処理




- throw文・Error


	- 基本的にErrorオグジェクトのインスタンスを投げることが推奨される。スタックトレースのため

	- Errorオブジェクトの`message`プロパティでエラーメッセージを表示


- ビルトインエラー


	- Errorオブジェクト同様にnewでインスタンスを作成

	- RefadenceError,SyntaxError,TypeErrorなど

	- `console.error()`でスタックトレースをコンソールへ出力
