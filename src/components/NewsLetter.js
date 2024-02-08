const NewsLetter = () => {
  return (
    <div className="bg-blue-600 pb-8 text-white">
      <div className="w-[80%] m-auto py-4 lg:flex gap-4">
        <div className="lg:flex-1">
          <h1 className="text-2xl">Subscribe our newsletter</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words
          </p>
        </div>
        <div className="lg:flex-1">
          <h2 className="mt-8">Your E-mail address</h2>
          <div className="flex ">
            <input
              placeholder="Enter your E-mail"
              className="w-full p-2 outline-none text-blue-600"
            />
            <button className="flex justify-center items-center px-4 bg-black">
              Suscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
