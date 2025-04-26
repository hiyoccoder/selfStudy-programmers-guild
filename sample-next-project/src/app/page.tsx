import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/profile/profile.jpg"
        alt="プロフィール画像"
        width={200}
        height={200}
      ></Image>
      <div>
        <div>hiyoccoder</div>
        <div>自己紹介</div>
        <div>
          初めまして！
          <br />
          デザイナー2年、コーダー1年半のひよっこです！
          <br />
          主に、HTML,CSS,JavaScriptでの開発経験があります。
          <br />
          よろしくお願いいたします！
          <br />
          <div>
            <div>趣味</div>
            <div>お仕事</div>
          </div>
        </div>
      </div>
    </div>
  );
}
