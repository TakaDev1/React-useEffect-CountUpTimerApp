# React-useEffect-CountUpTimerApp

Reactの `useEffect` を使って、タイマーによるカウントアップ処理を実装する練習用アプリです。

## 📌 概要

一定間隔でカウントを1ずつ増加させるタイマーアプリです。

`useEffect` を使用してタイマーを開始し、コンポーネントがアンマウントされた際にはクリーンアップ処理によってタイマーを停止します。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useState
* useEffect
* setInterval
* clearInterval

## 📂 コンポーネント構成

```text
src/
├── components/
│   ├── HandleCounter.tsx
│   └── DisplayCount.tsx
├── App.tsx
└── main.tsx
```

### HandleCounter.tsx

カウントの状態管理とタイマー処理を担当します。

* `useState` でカウントを管理
* `useEffect` でタイマーを設定
* `setInterval` で一定間隔ごとにカウントを更新
* クリーンアップ処理で `setInterval` を解除
* `DisplayCount` にカウントをPropsとして渡す

### DisplayCount.tsx

`HandleCounter` から受け取ったカウントを画面に表示します。

## 🔄 処理の流れ

```text
コンポーネント表示
      ↓
useEffect実行
      ↓
setIntervalでタイマー開始
      ↓
一定間隔でカウント更新
      ↓
setCount()
      ↓
再レンダリング
      ↓
DisplayCountに現在のカウントを表示
      ↓
コンポーネントアンマウント
      ↓
clearIntervalでタイマー解除
```

## 🧹 useEffectのクリーンアップ

`setInterval` を使用する場合、コンポーネントが不要になったときにタイマーを解除する必要があります。

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

クリーンアップを行うことで、コンポーネントがアンマウントされた後もタイマーが動き続けることを防ぎます。

## 🎯 学習ポイント

* `useState` による状態管理
* `useEffect` の基本的な使い方
* `setInterval` による定期処理
* `clearInterval` によるタイマー解除
* `useEffect` のクリーンアップ
* 関数型更新によるState更新
* コンポーネント分割
* Propsによるデータ受け渡し

## 🚀 起動方法

```bash
npm install
npm run dev
```

ブラウザで表示すると、カウントが1秒ごとに増加します。
