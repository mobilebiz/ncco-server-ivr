# IVR sample program for Vonage(Nexmo) Voice API

Vonage を使って、IVR を実装するサンプルプログラムになります。  
NCCO を作成するアプリケーションサーバーとして、Twilio Functions を利用しています。

## 実装要件

本プログラムを実装するには、以下の要件が必要となります。

- Vonage のアカウント
- Vonage 上で購入した電話番号
- Twilio のアカウント
- Twilio CLI のセットアップと Serverless プラグインのセットアップ

## 環境変数の設定

`.env.sample`を`.env`という名前に変更し、内容を以下のように更新してください。

| 変数名            | 値                                              |
| :---------------- | :---------------------------------------------- |
| VONAGE_API_KEY    | Vonage の API Key                               |
| VONAGE_API_SECRET | Vonage の API Secret                            |
| FROM_NUMBER       | Vonage 上で購入した電話番号（例：8150xxxxxxxx） |
| TO_NUMBER         | 転送先の電話番号（例：81xxxxxxxxxx）            |
| BRAND_NAME        | SMS 送信時の送信元識別子（デフォルト：Vonage）  |

TO_NUMBER は、電話を転送するときの転送先になりますので、皆さんがお持ちの携帯電話などの番号を指定してください。
