export const WeaveSpinner = () => {
  return (
    <>
      <style>
        {`
          .weave-spinner-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .weave-spinner-container {
            position: relative;
            width: 160px;
            height: 160px;
            transform-style: preserve-3d;
            perspective: 1200px;
          }

          .weave-spinner-node {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 12px;
            height: 12px;
            background: #C3E41D;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            box-shadow:
              0 0 20px #C3E41D,
              0 0 40px rgba(195, 228, 29, 0.6);
            animation: weaveSpinnerNodePulse 1.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
          }

          .weave-spinner-thread {
            position: absolute;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(195, 228, 29, 0.8),
              transparent
            );
            box-shadow: 0 0 10px rgba(195, 228, 29, 0.5);
            transform-origin: center;
          }

          .weave-spinner-t1 {
            width: 100%;
            height: 2px;
            top: 30%;
            left: 0;
            animation: weaveSpinnerWeave1 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          }

          .weave-spinner-t2 {
            width: 2px;
            height: 100%;
            top: 0;
            left: 70%;
            animation: weaveSpinnerWeave2 2.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
          }

          .weave-spinner-t3 {
            width: 100%;
            height: 2px;
            bottom: 30%;
            left: 0;
            animation: weaveSpinnerWeave3 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
          }

          .weave-spinner-t4 {
            width: 2px;
            height: 100%;
            top: 0;
            left: 30%;
            animation: weaveSpinnerWeave4 2.6s cubic-bezier(0.36, 0, 0.66, -0.56) infinite;
          }

          @keyframes weaveSpinnerNodePulse {
            0%,
            100% {
              transform: translate(-50%, -50%) scale(1);
              box-shadow:
                0 0 20px #C3E41D,
                0 0 40px rgba(195, 228, 29, 0.6);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.4);
              box-shadow:
                0 0 30px #C3E41D,
                0 0 60px rgba(195, 228, 29, 0.8);
            }
          }

          @keyframes weaveSpinnerWeave1 {
            0% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(40px) rotateX(60deg) rotateZ(20deg);
              opacity: 1;
            }
            100% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weaveSpinnerWeave2 {
            0% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateX(-40px) rotateY(60deg) rotateZ(-20deg);
              opacity: 1;
            }
            100% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weaveSpinnerWeave3 {
            0% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-40px) rotateX(-60deg) rotateZ(15deg);
              opacity: 1;
            }
            100% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weaveSpinnerWeave4 {
            0% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateX(40px) rotateY(-60deg) rotateZ(-15deg);
              opacity: 1;
            }
            100% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }
        `}
      </style>
      <div className="weave-spinner-wrapper">
        <div className="weave-spinner-container">
          <div className="weave-spinner-thread weave-spinner-t1" />
          <div className="weave-spinner-thread weave-spinner-t2" />
          <div className="weave-spinner-thread weave-spinner-t3" />
          <div className="weave-spinner-thread weave-spinner-t4" />
          <div className="weave-spinner-node" />
        </div>
      </div>
    </>
  );
};
