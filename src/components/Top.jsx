export const Top = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div class="mr-8 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Takuma Inoue
            </h1>
            <p class="mb-8 leading-relaxed">
              沖縄県で作業療法士として働きながらカメラマンとしても活動していました。業務効率化のためにプログラミングに興味を持ったことがきっかけでアイディアを書き溜めながら学習を続けています。いろんな乗り物を運転できます。
            </p>
          </div>
          <div class="object-fill">
            <img
              src={`${process.env.PUBLIC_URL}/images/_TAK3617-2.jpg`}
              alt="test img"
            />
          </div>
        </div>
      </section>
    </>
  );
};
