import "./gridHas.scss";

const supportedBrowsers = [
  "Chrome",
  "Edge",
  "Safari",
  "Opera",
  "Chrome for Android",
];

export const GridHas = () => {
  const userAgent = navigator.userAgent; // userAgent is a string that contains the browser name and version
  let isSupportedBrowser = false;
  for (let i = 0; i < supportedBrowsers.length; i++) {
    if (userAgent.indexOf(supportedBrowsers[i]) !== -1) {
      // if the browser name is found in the userAgent string
      isSupportedBrowser = true;
      break;
    }
  }
  return (
    <>
      {isSupportedBrowser && (
        <section className="gridHas__container">
          <img
            src="https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/206784/pexels-photo-206784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/315658/pexels-photo-315658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
          <img
            src="https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="an img should be here :,)"
          />
        </section>
      )}
    </>
  );
};
