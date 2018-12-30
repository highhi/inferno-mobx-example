// infernoの`linkEvent`と通常のイベントハンドラを扱うための型
declare type LinkEventHander<E extends Event> = 
  | ((event: E) => void)
  | { data: any, event(data: any, event: E): void }
  | null　// `linkEvent`の戻り値がnullの場合もある

