import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Image
        className="rounded-full"
        src="/work/work.png"
        alt="仕事"
        width={200}
        height={200}
      ></Image>
      <div className="flex flex-col items-center gap-3 mt-10">
        <div className="text-center text-5xl">Work</div>
        <div className="text-left">仕事</div>
        <div className="leading-lg text-center">
          大学を卒業後、2年間デザイナーとして働きました。
          <br />
          その後webサイト制作コーダーに転職し、現在1年半コーダーとして働いています。
          <br />
          現在はもっとエンジニアとして技術を深めたいと思い、AI分野やフロントエンド領域の勉強を続けています。
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
