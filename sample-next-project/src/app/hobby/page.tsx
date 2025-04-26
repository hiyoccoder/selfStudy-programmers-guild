import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Image
        className="rounded-full"
        src="/hobby/hobby.png"
        alt="漫画"
        width={200}
        height={200}
      ></Image>
      <div className="flex flex-col items-center gap-3 mt-10">
        <div className="text-center text-5xl">Hobby</div>
        <div className="text-left">趣味</div>
        <div className="leading-lg text-center">
          漫画を描くことが好きです。
          <br />
          描いた漫画をコミケの出張編集部などでぶった斬ってもらっています。
        </div>
        <div className="flex gap-5 mt-5">
          <Link
            href="/"
            className="flex justify-center items-center text-center box-border h-20 w-20 rounded-full shadow-xl bg-gray-300 hover:bg-gray-200"
          >
            TOPに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
