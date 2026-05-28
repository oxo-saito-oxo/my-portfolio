import ProductDetail from "../../components/ProductDetail"
import { notFound } from "next/navigation"

const productsData: Record<string, { title: string; summary: string; description: string; images: string[]; tags: string[]; githubUrl?: string; deployUrl?: string }> = {
    "singalyzar": {
        title: "Singalyzar",
        summary: "カラオケで歌いやすいキーを自動提案。",
        description: "第1回MUDSハッカソンで作成。キー選択に悩むユーザーのために、声域データと楽曲データを比較して最適なキーを提案するWebアプリケーションです。初めてのチーム開発として実装・UI設計を担当しました。",
        githubUrl: "https://github.com/YzkSK/20250627_0705_MusicPitchFinder",
        images: ["/Singalyzer.png"],
        tags: ["React", "Supabase", "Python"],
    },
    "MyFitCoach": {
        title: "MyFitCoach",
        summary: "個人に寄り添い、無理のないボディメイクをサポート。",
        description: "技育CAMPハッカソンで制作したモバイルアプリケーション。ダイエットや筋トレが長続きしない課題を解決するため、ユーザーの生活習慣に最適化されたメニューを提供します。",
        githubUrl: "https://github.com/YzkSK/training-app",
        images: ["/MyFitCoach.png"],
        tags: ["ReactNative", "TypeScript"],
    },
    "machiawase": {
        title: "待ちあわせアプリ",
        summary: "第2回MUDSハッカソン【優秀賞】受賞プロダクト。",
        description: "「近くにいるのに会えない」を解消するため、位置情報をリアルタイムに共有し、合流をもっと簡単・スムーズにするアプリ。Flutterを用いて爆速で動作するUI/UXを実装し、学内で高い評価をいただきました。",
        githubUrl: "https://github.com/iwashi-v3/appointment-app",
        images: ["/machiawase1.png", "/machiawase2.png", "/machiawase3.png"],
        tags: ["Flutter"],
    },
    "Tea-Pallet": {
        title: "Tea-Pallet",
        summary: "自分好みの紅茶レシピを、記憶のパレットに管理。",
        description: "個人開発プロダクト。紅茶の茶葉、淹れ方の秒数、温度、自分だけのお気に入りレシピを詳細に記録・ストックできるアプリです。Flutter build webにより、GitHub Pagesへのデプロイまで完遂させました。",
        githubUrl: "https://github.com/oxo-saito-oxo/tea_pallet",
        deployUrl: "https://oxo-saito-oxo.github.io/tea_pallet/",
        images: ["/Teapallet1.png", "/Teapallet2.png", "/Teapallet3.png", "/Teapallet4.png", "/Teapallet5.png"],
        tags: ["Flutter", "Firebase"],
    },
    "Feliz": {
        title: "Feliz",
        summary: "体調や気分に合わせて無理なく習慣化。",
        description: "個人開発プロダクト。体調が良い日も悪い日も、その時の状態に応じてタスクの難易度を自動調整し、モチベーションの維持を優しくサポートする習慣化アプリ。iOSネイティブ（Swift）で開発を進めています。",
        githubUrl: "https://github.com/oxo-saito-oxo/Feliz",
        images: ["/Feliz1.png", "/Feliz2.png", "/Feliz3.png", "/Feliz4.png"],
        tags: ["Swift"],
    },
}

export async function generateStaticParams() {
    return Object.keys(productsData).map((id) => ({
        id: id,
    }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const decodedId = decodeURIComponent(id)
    const data = productsData[decodedId]

    if (!data) notFound()
    return <ProductDetail {...data} />
}