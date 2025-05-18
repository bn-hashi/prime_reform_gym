import Image from "next/image"
import Link from "next/link"
import { Dumbbell, Phone, Mail, MapPin, Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="w-full bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2">
          <Link
            href="#counseling"
            className="text-sm hover:text-amber-400 transition-colors py-2 px-4 border border-gray-800 bg-black/80"
          >
            体験・カウンセリングの予約はこちら
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-sm">お気軽にお問い合わせください</p>
            </div>
            <div className="flex gap-2">
              <Link
                href="tel:03-6356-5355"
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 transition-colors py-2 px-4"
              >
                <Phone className="h-4 w-4" />
                <span>03-6356-5355</span>
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 bg-white text-black hover:bg-gray-100 transition-colors py-2 px-4"
              >
                <Mail className="h-4 w-4" />
                <span>ネットからお問い合わせ</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative w-full bg-black text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/images/placeholder-exhxi.png')] bg-cover bg-center opacity-40"></div>
        <div className="container mx-auto relative z-10 px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-6 w-6 text-amber-400" />
                <h2 className="text-xl font-medium">Fitness Garage exe</h2>
              </div>
              <p className="text-xl md:text-2xl font-light">良質なプライベートジムがあなたの街に——</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-amber-400 font-bold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                  カッコいい大人を作る
                </span>
                <br />
                <span className="text-amber-400 font-bold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                  秘密基地
                </span>
              </h1>
              <p className="text-xl">Fitness Garage exe</p>
              <p className="text-lg">あなたも自分史上最高のカラダを手に入れませんか。</p>

              <div className="bg-amber-500 text-black rounded-full py-2 px-6 inline-block transform rotate-3 shadow-lg">
                <p className="font-bold">大人に選ばれる3つの理由</p>
              </div>

              <div className="pt-6">
                <Link
                  href="#counseling"
                  className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-md shadow-lg transition-all hover:translate-y-1"
                >
                  無料カウンセリングを予約する
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 relative">
              <Image
                src="/muscular-male-fitness-model.png"
                alt="筋肉質な男性モデル"
                width={600}
                height={800}
                className="rounded-md shadow-2xl"
              />
              <div className="absolute -bottom-10 right-0 bg-amber-500 text-black rounded-full p-6 shadow-lg">
                <div className="text-center">
                  <p className="font-bold text-lg">無料</p>
                  <p className="font-bold">カウンセリング</p>
                  <p className="font-bold">受付中</p>
                  <p className="text-xs mt-1">※体験トレーニング（有料）もございます！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 悩みセクション */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/5">
              <Image
                src="/placeholder-5x6vi.png"
                alt="悩む女性"
                width={500}
                height={600}
                className="rounded-md shadow-lg"
              />
            </div>

            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                あなたは今
                <br />
                <span className="text-amber-500">こんなお悩み</span>を<br />
                お持ちではありませんか？
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🍩", title: "ぽっこりお腹" },
                  { icon: "⏰", title: "時間がない" },
                  { icon: "👗", title: "体型の崩れ" },
                  { icon: "💦", title: "運動が苦手" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プライベートジム紹介セクション */}
      <section className="w-full bg-amber-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-amber-600">プライベート空間</span>で<br />
              あなただけのトレーニング
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Fitness Garage exeでは、完全個室のプライベート空間で、
              あなた専属のトレーナーがマンツーマンでサポートします。
              他の人の目を気にすることなく、集中してトレーニングに取り組めます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "完全個室のプライベート空間",
                desc: "他のお客様と顔を合わせることなく、プライベートな空間でトレーニングできます。",
                image: "/private-gym-warm-lighting.png",
              },
              {
                title: "専属トレーナーによるマンツーマン指導",
                desc: "経験豊富なトレーナーがあなたの目標に合わせたプログラムを提案します。",
                image: "/personal-trainer-client-gym.png",
              },
              {
                title: "科学的根拠に基づいたトレーニング",
                desc: "最新の研究に基づいた効果的なトレーニング方法で、効率よく理想のカラダへ。",
                image: "/scientific-fitness-equipment.png",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成果セクション */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-amber-500">実績</span>で選ばれる理由
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              多くのお客様が理想のカラダを手に入れています。 あなたも変わることができます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {[1, 2].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/2 space-y-4">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Before</p>
                        <Image
                          src={`/fitness-before-photo.png?height=300&width=200&query=fitness+before+photo+person+${item}`}
                          alt="ビフォー写真"
                          width={200}
                          height={300}
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">After</p>
                        <Image
                          src={`/fitness-after-photo.png?height=300&width=200&query=fitness+after+photo+fit+person+${item}`}
                          alt="アフター写真"
                          width={200}
                          height={300}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-sm text-gray-500">体重</p>
                          <p className="font-bold">-8.5kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">体脂肪率</p>
                          <p className="font-bold">-12.3%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">筋肉量</p>
                          <p className="font-bold">+2.1kg</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 bg-white p-6 rounded-md shadow-md">
                    <div className="flex items-start gap-2 mb-4">
                      <div className="text-amber-500 text-2xl">"</div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {item === 1
                            ? "40代になって諦めていた体型が戻りました"
                            : "無理なく続けられるトレーニングで人生が変わりました"}
                        </h3>
                        <p className="text-sm text-gray-500">{item === 1 ? "40代男性・会社員" : "30代女性・自営業"}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {item === 1
                        ? "年齢とともに増えていく体重に悩んでいましたが、exeのトレーナーさんの指導のおかげで、無理なく体重を落とすことができました。食事指導も的確で、日常生活に取り入れやすかったです。"
                        : "運動が苦手で続かないタイプでしたが、マンツーマンで丁寧に指導してもらえるので安心して取り組めました。今では週に2回のトレーニングが楽しみになっています。"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#counseling"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-md shadow-lg transition-all hover:translate-y-1"
            >
              あなたも変わりたいなら、まずは無料カウンセリングへ
            </Link>
          </div>
        </div>
      </section>

      {/* フィロソフィーセクション */}
      <section className="w-full bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-amber-400">自分のカラダに</span>
                <br />
                <span className="text-amber-400">惚れ直す</span>ジム
              </h2>
              <p className="mb-6 text-gray-300">
                Fitness Garage exeは単なるボディメイクの場所ではありません。
                あなたが自分自身を好きになり、自信を持って生きるための場所です。
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "一人ひとりに合わせたオーダーメイドプログラム",
                  "食事指導から生活習慣の改善までトータルサポート",
                  "リバウンドしにくい体質改善を重視",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { title: "地域No.1", desc: "顧客満足度" },
                  { title: "95%", desc: "リピート率" },
                  { title: "1,000+", desc: "成功事例" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4 text-center">
                    <p className="text-amber-400 font-bold text-xl">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/fit-woman-confident.png"
                  alt="自信に満ちた女性"
                  width={500}
                  height={600}
                  className="rounded-md shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black rounded-md p-4 shadow-lg transform rotate-3">
                  <p className="font-bold">あなたも変われる</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section id="price" className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-amber-500">料金プラン</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              あなたのライフスタイルや目標に合わせて選べる3つのプラン
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "スタンダードプラン",
                price: "68,000",
                color: "bg-pink-500",
                features: ["月8回のパーソナルトレーニング", "体組成測定", "食事指導", "LINEサポート"],
              },
              {
                title: "プレミアムプラン",
                price: "98,000",
                color: "bg-blue-500",
                features: [
                  "月12回のパーソナルトレーニング",
                  "体組成測定",
                  "詳細な食事指導・管理",
                  "24時間LINEサポート",
                  "オリジナルサプリメント付き",
                ],
                recommended: true,
              },
              {
                title: "エリートプラン",
                price: "148,000",
                color: "bg-green-500",
                features: [
                  "月16回のパーソナルトレーニング",
                  "体組成測定",
                  "完全オーダーメイド食事プラン",
                  "24時間LINEサポート",
                  "オリジナルサプリメント付き",
                  "専属栄養士によるカウンセリング",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${plan.recommended ? "ring-2 ring-amber-500 transform scale-105" : ""}`}
              >
                <div className={`${plan.color} text-white p-6 text-center`}>
                  <h3 className="font-bold text-xl">{plan.title}</h3>
                  {plan.recommended && (
                    <span className="inline-block bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full mt-2">
                      おすすめ
                    </span>
                  )}
                </div>
                <div className="bg-white p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-500">月額</p>
                    <p className="text-4xl font-bold">¥{plan.price}</p>
                    <p className="text-sm text-gray-500">（税込）</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link
                      href="#counseling"
                      className={`inline-block w-full py-3 px-6 rounded-md font-bold transition-all hover:translate-y-1 ${plan.recommended ? "bg-amber-500 hover:bg-amber-400 text-black" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
                    >
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#counseling"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-md shadow-lg transition-all hover:translate-y-1"
            >
              無料体験を申し込む
            </Link>
          </div>
        </div>
      </section>

      {/* トレーナー紹介セクション */}
      <section className="w-full bg-amber-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-amber-600">トレーナー</span>紹介
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">あなたの目標達成をサポートする専属トレーナー</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "佐藤 健太",
                title: "チーフトレーナー",
                desc: "10年以上のパーソナルトレーニング経験を持ち、数百名の会員様の体型改善をサポートしてきました。特に40代以上の方の体質改善を得意としています。",
                image: "/smiling-trainer-gym.png",
              },
              {
                name: "田中 美咲",
                title: "栄養士・トレーナー",
                desc: "管理栄養士の資格を持ち、食事指導とトレーニングの両面からサポート。女性特有の悩みに寄り添ったプログラム作成が得意です。",
                image: "/placeholder.svg?height=400&width=300&query=female+fitness+trainer+nutritionist+in+gym",
              },
            ].map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="font-bold text-xl">{trainer.name}</h3>
                  <p className="text-amber-600 mb-4">{trainer.title}</p>
                  <p className="text-gray-600 mb-4">{trainer.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "パーソナルトレーニング",
                      "ボディメイク",
                      "食事指導",
                      index === 0 ? "筋力トレーニング" : "産後ケア",
                      index === 0 ? "姿勢改善" : "ダイエット",
                    ].map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくあるご質問セクション */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-amber-500">よくあるご質問</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">お客様からよくいただくご質問にお答えします</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "体験トレーニングの時間はどのくらいですか？",
                answer:
                  "およそ90分です。15分のカウンセリング後、通常レッスン同様60分のトレーニングを行い、最後にその日の質問にお答えして終了です。無理にご入会は勧めておりません.",
              },
              {
                question: "効果はどれくらいで出ますか？",
                answer:
                  "減量目的で2ヶ月程度、体質改善・ボディメイクはおよそ2～3ヶ月目から続ければ続けるほど効果を実感していただけます.",
              },
              {
                question: "運動に自信がないのですが…",
                answer:
                  "大丈夫です。むしろ「運動神経がいらない」と言われるのが、ウエイトトレーニングのよいところです。もちろん必要なコツはお伝えしますが、その教え方にも定評をいただいております.",
              },
              {
                question: "過去にケガをして関節が動きません",
                answer:
                  "お医者様に止められていなければ大丈夫です。お客様の体調・特性を考慮し、フリーウエイト・ケーブル・チューブなど組み合わせてご提案します.",
              },
              {
                question: "食事制限はどの程度ですか？",
                answer:
                  "およそ2ヶ月ずつ、除脂肪体重に合わせた糖質管理を行いながら目標体重を目指していきます。ただし、「糖質を食べてはいけない」とストレスを抱えるのは、脂肪燃焼効率から見てもマイナスです。食材を「選ぶ」ことで、食事に対する満足度は保ったまま、体重をコントロールすることをねらいます.",
              },
              {
                question: "追加購入が必要なものは？",
                answer:
                  "一切ございません。トレーニング時のサプリメント、タオル貸出、食事指導などはすべて料金に含まれております。しかも料金は月謝制お支払いの総額ですので、これ以上に分割手数料などもありません。より充実したトレーニング生活を送るためにサプリメントなどをご紹介はいたしますが、当店で売りつけたりもしておりません.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-4">
                <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="font-bold text-lg">{faq.question}</h3>
                      <div className="w-5 h-5 border border-amber-500 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                        <span className="border-r border-b border-amber-500 w-2 h-2 transform rotate-45 translate-y-[-2px] group-open:rotate-[-135deg] transition-transform"></span>
                      </div>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 設備・アクセスセクション */}
      <section className="w-full bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-amber-400">施設案内</span>
              </h2>

              {/* 施設画像を横一列に配置 */}
              <div className="flex flex-wrap md:flex-nowrap gap-4 mb-12">
                {[
                  "/placeholder.svg?height=200&width=300&query=private+gym+room+equipment",
                  "/placeholder.svg?height=200&width=300&query=gym+shower+room+luxury",
                  "/placeholder.svg?height=200&width=300&query=gym+lounge+area+modern",
                  "/placeholder.svg?height=200&width=300&query=gym+training+equipment+modern",
                ].map((image, index) => (
                  <div key={index} className="w-full md:w-1/4 rounded-md overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`ジム施設 ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* 設備情報 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">設備情報</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "完全個室トレーニングルーム",
                    "シャワールーム完備",
                    "タオル・アメニティ無料",
                    "プロテイン無料サービス",
                    "更衣室・ロッカー完備",
                    "Wi-Fi完備",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-amber-400 flex-shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* アクセス */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">アクセス</h3>
                <div className="bg-gray-800 p-4 rounded-md mb-8">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030689816!2d139.76493611525882!3d35.68123618019432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1621499296284!5m2!1sja!2sjp"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="rounded-md"
                    ></iframe>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">Fitness Garage exe</p>
                        <p>〒100-0001 東京都千代田区丸の内1-1-1 丸の内センタービル5F</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-amber-400 mt-1 flex-shrink-0">
                        🚶
                      </div>
                      <p>東京駅丸の内北口より徒歩5分</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                      <p>03-6356-5355</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center text-amber-400 mt-1 flex-shrink-0">
                        🕒
                      </div>
                      <div>
                        <p>営業時間：平日 7:00〜23:00 / 土日祝 9:00〜20:00</p>
                        <p className="text-sm text-gray-400">※完全予約制</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 無料カウンセリング予約 */}
              <div id="counseling" className="max-w-3xl mx-auto">
                <div className="bg-black p-8 rounded-lg shadow-2xl border border-amber-500 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">無料カウンセリング予約</h3>
                  <p className="mb-8 text-lg">まずは無料カウンセリングで、あなたの目標や悩みをお聞かせください。</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-bold py-4 px-10 rounded-md shadow-lg transition-all hover:translate-y-1 text-lg w-full md:w-auto"
                  >
                    無料カウンセリングを予約する
                  </Link>
                  <p className="mt-4 text-gray-400 text-sm">※無理な勧誘は一切行っておりません</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="w-full bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Dumbbell className="h-6 w-6 text-amber-400 mr-2" />
              <h2 className="text-xl font-bold">Fitness Garage exe</h2>
            </div>

            <div className="flex gap-6">
              <Link href="#" className="hover:text-amber-400 transition-colors">
                ホーム
              </Link>
              <Link href="#price" className="hover:text-amber-400 transition-colors">
                料金プラン
              </Link>
              <Link href="#counseling" className="hover:text-amber-400 transition-colors">
                無料カウンセリング
              </Link>
              <Link href="#contact-form" className="hover:text-amber-400 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                〒100-0001 東京都千代田区丸の内1-1-1 丸の内センタービル5F
              </p>
              <div className="flex gap-4">
                <Link
                  href="tel:03-6356-5355"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  03-6356-5355
                </Link>
                <Link
                  href="mailto:info@fitnessexe.com"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@fitnessexe.com
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Fitness Garage exe All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
