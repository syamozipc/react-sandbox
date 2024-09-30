## アプリ作成

- ルーター：react-router
- UI：ant design v4.24、styled component
- フォーム：ant design の FormItem, useForm
- バリデーション：ant design
- フェッチ：axios、React query
- 状態管理：react-redux

### やること

- [x] react router を実装
- [x] ant design を実装
- [x] ant design チュートリアルを流す
- [x] ant design の form（FormItem, useForm）、validation を実装
- [x] axios を実装
- [ ] React Query を実装
- [ ] React Redux を実装
- [ ] react router チュートリアルを流す
- [x] CSS in JS と CSS Modules を試す
- [ ] React 実践入門を読み直し
- [ ] React 公式を読む

## React Router

できること

- SPA でのルーティングを実現する
- ネストも可能
- 動的パス（:id）も可能
- NavLink を使って isActive 的なのも用意されている
- コンポーネント読み込み前の loader も用意
  - data mutation が呼び出されたら全て再読み込み（最新データになる）
  - redirect も可能（user 存在しなければ/signup へとか）
  - load 中は loading spinner を使うとか
- Suspense コンポーネントで予め UI を用意（data load できたら対象の UI に差し替え）
- Form コンポーネントが submit されたら、action に指定した route へ formData ごと投げてくれる
  - デフォルトのページ読み込みもキャンセルしてくれている
  - 送信中画面の制御も可能
  - 楽観チェック（送信できたら OK。バックエンドからのレスポンス待たない）での制御も可能
- useFetcher で並行にデータ送信可能
  - レースコンディションもハンドルしてくれる
- エラーハンドリング機能もある（errorElement props にコンポーネント渡す）
  - 全コンポーネントに設置しなくても m、直近の先祖コンポーネントにある errorElement を取得してくれる
- scroll 位置もリカバーできる

## Ant Design

できること

- MUI とほぼ同じ
  - コンポーネントに色や UI をカスタマイズする props を渡せる
  - 基調デザインは決まっているので、ありがちな UI になる
- Form 要素は手厚い
  - React Hook Form に近いことが出来るので、form library は不要かも
