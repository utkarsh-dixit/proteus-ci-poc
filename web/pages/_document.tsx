import Document, { Html, Head, Main, NextScript } from "next/document";

// import loadScript from 'load-external-script';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  loadingIcon(width) {
    return (
      <svg
        width={width + "px"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-rolling"
        style={{ background: "none" }}
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          ng-attr-stroke="{{config.color}}"
          ng-attr-stroke-width="{{config.width}}"
          ng-attr-r="{{config.radius}}"
          ng-attr-stroke-dasharray="{{config.dasharray}}"
          stroke="#f3f3f3"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(53.9402 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </svg>
    );
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#FFFFFF" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <body>
          <div id="root"></div>
          <Main />
          <div
            id="document_loading_sign"
            style={{
              alignItems: "center",
              background: "white",
              display: "flex",
              height: "100vh",
              justifyContent: "center",
              left: "0",
              position: "fixed",
              top: "0",
              width: "100vw"
            }}
          >
            {this.loadingIcon(20)}
          </div>
          <NextScript />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
