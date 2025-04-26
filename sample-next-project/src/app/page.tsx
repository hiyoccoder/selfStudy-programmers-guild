import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image
        className="rounded-full"
        src="/profile/profile.jpg"
        alt="プロフィール画像"
        width={200}
        height={200}
      ></Image>
      <div className="flex flex-col gap-3 ml-10">
        <div className="text-center text-5xl">hiyoccoder</div>
        <div className="text-left mt-5">自己紹介</div>
        <div className="leading-lg">
          初めまして！
          <br />
          デザイナー2年、コーダー1年半のひよっこです！
          <br />
          主に、HTML,CSS,JavaScriptでの開発経験があります。
          <br />
          よろしくお願いいたします！
        </div>
        <div className="flex gap-5 mt-5">
          <Link
            href="/hobby"
            className="flex justify-center items-center text-center box-border h-20 w-20 rounded-full shadow-xl bg-yellow-300 hover:bg-yellow-200"
          >
            趣味
          </Link>
          <Link
            href="/work"
            className="flex justify-center items-center text-center box-border h-20 w-20 rounded-full shadow-xl bg-red-300 hover:bg-red-200"
          >
            お仕事
          </Link>
        </div>
      </div>
    </div>
  );
}
