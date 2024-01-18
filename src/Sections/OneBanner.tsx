import OneCTAButton from "../Components/OneCTAButton"

export default function OneBanner() {
  return (
    <div className="pt-12">
      <h1 className="text-3xl text-center lg:text-5xl">
        Master the Markets and Realise Your Potential with{" "}
        <strong>Masterclass One.</strong>
      </h1>
      <p className="mt-4 text-center lg:text-xl">
        Masterclass One is a personalised 1-1 Mentoring Program that spans over
        a 3 Month Period to teach you how to trade financial markets and achieve
        consistency.
      </p>

      <iframe
        src="https://player.vimeo.com/video/524933864?h=1ac4fd9fb4&autoplay=1&title=0&byline=0&portrait=0"
        className="w-full aspect-video mt-6"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="mt-6">
        <OneCTAButton />
      </div>
    </div>
  );
}
