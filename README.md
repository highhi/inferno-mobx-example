# inferno-mobx-example

## stores
+ mobxのstore
+ classで実装する
+ storeは何にも依存しない
+ 状態の保持と、引数を受け取って状態を更新するためのシンプルなメソッドを持つ
+ 自分以外のstoreに対する関心はない
+ `getStore()`でStoreをまとめたオブジェクトを返し`inferno-mobx`の`Provider`へ渡す。関数にしているのはシングルトンを避けるため

## actions
+ store依存
+ 関数で実装する
+ actionは`containers`から呼ばれるがdomに対する関心はない（引数で`Event`オブジェクトを受け取ったりしない）
+ storeのメソッドが発火する場所
+ 非同期通信、storeをまたいだ処理、storeが実装すべきでないロジックはここに書く
+ 全てのactionは第1引数にstoreを受け取る

## components
+ storeやactionに依存しないコンポーネント
+ viewを書く場所

## containers
+ storeやactionに依存するコンポーネント
+ storeとコンポーネントをマッピングする
+ actionを発火するハンドラをもつ
+ viewは`components`からインポートする
