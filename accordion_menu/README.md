## 概要

- シンプルなアコーディオンメニュー

## 使用言語

- HTML
- CSS
- JavaScript

## 動作

- メニューをクリックするとサブメニューが表示される
- 常に 1 つのメニュー配下のサブメニューのみ表示される

![demo](https://raw.github.com/wiki/yankeno/Frontend-training/images/accordion_menu/demo.gif)

## 要点

- サブメニューは `diplay: none` を指定しておく
- `open` クラスに `display: block` を付与しておく(初期状態ではどの要素にも CSS を当てない)
- メニューがクリックされたときに以下の処理を行う
  - クリックされた要素のサブメニューに `open` を付与する
  - クリックされた要素以外のサブメニューから `open` を削除する

## 所要時間

- 2 時間ほど

## 参考 URL

- [ナビメニュー 100 連発！CSS で表現できるコピペ可能な HTML スニペットまとめ](https://photoshopvip.net/97481)
