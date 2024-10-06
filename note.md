## やること

- [x] React Router を実装
- [x] ant design チュートリアル → 実装
- [x] ant design の form（FormItem, useForm）、validation を実装
- [x] axios を実装
- [x] React Query を実装
- [ ] Redux チュートリアル
- [ ] React Redux チュートリアル(React 用) → 実装
- [ ] React Router チュートリアル
- [ ] axios と Tanstack Query で mutation したい
- [ ] Mock Service Worker 導入
- [ ] StoryBook 導入
- [ ] React Testing Library 導入
- [ ] Playwright 導入
- [ ] Web history API を触る
- [x] CSS in JS と CSS Modules を試す
- [ ] React 実践入門を読み直し
- [ ] React 公式を読む

## パッケージメモ

### React Router

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

### Ant Design

できること

- MUI とほぼ同じ
  - コンポーネントに色や UI をカスタマイズする props を渡せる
  - 基調デザインは決まっているので、ありがちな UI になる
- Form 要素は手厚い
  - React Hook Form に近いことが出来るので、form library は不要かも

### Tanstack Query

できること

- server state の状態管理
  - どうデータを取得するかは関心がないため、axios でも fetch でも promise さえ返せば OK
- steal 状態の query はバックグラウンドで refetch され、レンダリングされる
- fresh である限りは refetch せずキャッシュを使う
- inactive 状態の query はデフォルトでは 5 分で garbage collection される
  - rendaring 外になると inactive になるっぽい
- devtool を使うと各 query の状況が見られる（デフォルトでは`process.env.NODE_ENV === 'development'`でのみ動作するので prod では表示されない）

### React Redux
