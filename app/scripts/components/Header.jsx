import React from 'react';

class Header extends React.Component {
  static propTypes = {
    addSteps: React.PropTypes.func.isRequired,
    addTooltip: React.PropTypes.func.isRequired,
    joyrideOverlay: React.PropTypes.bool.isRequired,
    joyrideType: React.PropTypes.string.isRequired,
    onClickSwitch: React.PropTypes.func.isRequired
  }

  componentDidMount() {
    /* this.props.addSteps({
     text: 'React Joyride is a ReactJS component for creating tours for your app.<br/><br/>It is fully responsive and customizable.',
     selector: '.intro',
     position: 'bottom'
     }); */

    this.props.addTooltip({
      title: 'Standalone Tooltips',
      text: '<h2 style="margin-bottom: 10px; line-height: 1.6">Now you can open tooltips independently!</h2>And even style them one by one!',
      selector: '.intro h2 a',
      position: 'bottom',
      event: 'hover',
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '0',
        color: '#fff',
        mainColor: '#ff67b4',
        textAlign: 'center',
        width: '29rem'
      }
    });

    this.props.addTooltip({
      text: 'Change how you want to play your tour!',
      selector: '.sw-right',
      trigger: '.sw-right span a',
      position: 'bottom',
      style: {
        backgroundColor: '#232323',
        borderRadius: '1rem',
        color: '#ff67b4',
        textAlign: 'center',
        width: '18rem'
      }
    });
  }

  render() {
    const props = this.props;

    return (
      <header className="main-header">
        <div className="container">
          <div className="intro">
            <h1>React Joyride</h1>

            <h2>Create walkthroughs and guided tours for your ReactJS apps.<br />Now with standalone tooltips!
              <a href="#"><i className="fa fa-question-circle" /></a></h2>
          </div>

          <div className="row row-menu">
            <div className="col-xs-6 col-md-4">
              <div className="switch-wrapper">
                <span>Overlay</span>
                <div className="switch">
                  <a
                    href="#"
                    className={props.joyrideOverlay ? 'active' : ''}
                    data-key="joyrideOverlay"
                    data-type="active"
                    onClick={props.onClickSwitch}>On</a>
                  <a
                    href="#"
                    className={!props.joyrideOverlay ? 'active' : ''}
                    data-key="joyrideOverlay"
                    data-type="disabled"
                    onClick={props.onClickSwitch}>Off</a>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-md-4">
              <div className="switch-wrapper sw-right">
                <span>Tour Type<a href="#"><i className="fa fa-question-circle" /></a></span>

                <div className="switch">
                  <a
                    href="#" className={props.joyrideType === 'continuous' ? 'active' : ''}
                    data-key="joyrideType"
                    data-type="continuous"
                    onClick={props.onClickSwitch}>Continuous</a>
                  <a
                    href="#" className={props.joyrideType === 'single' ? 'active' : ''}
                    data-key="joyrideType"
                    data-type="single"
                    onClick={props.onClickSwitch}>Single</a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4 github">
              <a href="https://github.com/gilbarbara/react-joyride">
                <svg
                  width="122px" height="35px" viewBox="0 0 122 35" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <path
                      d="M58.6201465,16.2589305 L52.0230749,16.2589305 C51.8529006,16.2589305 51.7147669,16.3974559 51.7147669,16.5679109 L51.7147669,19.7986957 C51.7147669,19.9691506 51.8529006,20.1078398 52.0230749,20.1078398 L54.5966128,20.1078398 L54.5966128,24.1218004 C54.5966128,24.1218004 54.0187397,24.319109 52.4211289,24.319109 C50.536298,24.319109 47.9032563,23.6292658 47.9032563,17.8298671 C47.9032563,12.0291584 50.6450068,11.265959 53.2190352,11.265959 C55.4471571,11.265959 56.407064,11.6589387 57.017795,11.848224 C57.209711,11.907171 57.3872414,11.715757 57.3872414,11.5451384 L58.1231919,8.42356916 C58.1231919,8.34382702 58.096219,8.24771073 58.0053287,8.18237784 C57.7573419,8.00520947 56.2440825,7.15702816 52.4211289,7.15702816 C48.0170327,7.15702816 43.499487,9.03383397 43.499487,18.0559942 C43.499487,27.0784819 48.6717376,28.4229639 53.0302251,28.4229639 C56.6390306,28.4229639 58.8282462,26.878226 58.8282462,26.878226 C58.9184827,26.8282848 58.928291,26.70204 58.928291,26.6440755 L58.928291,16.5679109 C58.928291,16.3974559 58.7903207,16.2589305 58.6201465,16.2589305 Z M92.6007214,8.28635373 C92.6007214,8.11442509 92.4647129,7.97573598 92.2945385,7.97573598 L88.5799669,7.97573598 C88.4102829,7.97573598 88.2723128,8.11442509 88.2723128,8.28635373 C88.2723128,8.28717244 88.2732934,15.476737 88.2732934,15.476737 L82.4832827,15.476737 L82.4832827,8.28635373 C82.4832827,8.11442509 82.3466201,7.97573598 82.1767729,7.97573598 L78.4623644,7.97573598 C78.2933348,7.97573598 78.1555278,8.11442509 78.1555278,8.28635373 L78.1555278,27.755717 C78.1555278,27.9274819 78.2933348,28.0673172 78.4623644,28.0673172 L82.1767729,28.0673172 C82.3466201,28.0673172 82.4832827,27.9274819 82.4832827,27.755717 L82.4832827,19.4279848 L88.2732934,19.4279848 C88.2732934,19.4279848 88.2631585,27.755062 88.2631585,27.755717 C88.2631585,27.9274819 88.4009651,28.0673172 88.5708123,28.0673172 L92.2942116,28.0673172 C92.464386,28.0673172 92.6003945,27.9274819 92.6007214,27.755717 L92.6007214,8.28635373 Z M65.6177242,10.8893534 C65.6177242,9.5496199 64.5453486,8.46696068 63.2223706,8.46696068 C61.9007004,8.46696068 60.8275074,9.5496199 60.8275074,10.8893534 C60.8275074,12.2276132 61.9007004,13.3132198 63.2223706,13.3132198 C64.5453486,13.3132198 65.6177242,12.2276132 65.6177242,10.8893534 Z M65.3229844,23.658903 L65.3229844,14.6717835 C65.3229844,14.5011648 65.1855045,14.361657 65.0156573,14.361657 L61.3128555,14.361657 C61.1430082,14.361657 60.9909793,14.537188 60.9909793,14.7078067 L60.9909793,27.5836246 C60.9909793,27.9620314 61.2263788,28.0745218 61.5310904,28.0745218 L64.8672248,28.0745218 C65.2332383,28.0745218 65.3229844,27.8945699 65.3229844,27.5775662 L65.3229844,23.658903 Z M106.797602,14.361657 L103.111474,14.361657 C102.942443,14.361657 102.804801,14.5011648 102.804801,14.6729297 L102.804801,24.2193904 C102.804801,24.2193904 101.868433,24.9056313 100.539243,24.9056313 C99.2102171,24.9056313 98.8574447,24.3015887 98.8574447,22.9980421 L98.8574447,14.6729297 C98.8574447,14.5011648 98.7201284,14.361657 98.5509347,14.361657 L94.8098804,14.361657 C94.6410144,14.361657 94.5027169,14.5011648 94.5027169,14.6729297 L94.5027169,23.6284471 C94.5027169,27.5002801 96.6571132,28.4475251 99.620858,28.4475251 C102.052176,28.4475251 104.012531,27.1020607 104.012531,27.1020607 C104.012531,27.1020607 104.105873,27.8110617 104.148049,27.8952248 C104.190388,27.9790605 104.300404,28.0637149 104.419249,28.0637149 L106.799236,28.0532354 C106.968102,28.0532354 107.1064,27.9134001 107.1064,27.7424539 L107.105255,14.6729297 C107.105255,14.5011648 106.967448,14.361657 106.797602,14.361657 Z M115.290456,24.9129997 C114.011943,24.8740292 113.144724,24.2929104 113.144724,24.2929104 L113.144724,18.1273855 C113.144724,18.1273855 114.000336,17.6021026 115.049989,17.5081149 C116.377381,17.3890748 117.656385,17.7907328 117.656385,20.962407 C117.656385,24.3069921 117.079166,24.9670344 115.290456,24.9129997 Z M116.744375,13.9434611 C114.650791,13.9434611 113.226787,14.8790804 113.226787,14.8790804 L113.226787,8.28635373 C113.226787,8.11442509 113.089634,7.97573598 112.920277,7.97573598 L109.195244,7.97573598 C109.025887,7.97573598 108.888243,8.11442509 108.888243,8.28635373 L108.888243,27.755717 C108.888243,27.9274819 109.025887,28.0673172 109.195734,28.0673172 L111.780225,28.0673172 C111.896616,28.0673172 111.984728,28.007224 112.049789,27.9019382 C112.114034,27.7973074 112.206723,27.0043069 112.206723,27.0043069 C112.206723,27.0043069 113.729954,28.450145 116.613434,28.450145 C119.99861,28.450145 121.940002,26.7302036 121.940002,20.7289115 C121.940002,14.7276194 118.839431,13.9434611 116.744375,13.9434611 Z M76.0138826,14.3282537 L73.2275042,14.3282537 C73.2275042,14.3282537 73.223254,10.6419399 73.223254,10.6411212 C73.223254,10.5016133 73.1514898,10.4318595 72.99047,10.4318595 L69.1933449,10.4318595 C69.0457298,10.4318595 68.9664459,10.4968649 68.9664459,10.6389925 L68.9664459,14.4492587 C68.9664459,14.4492587 67.0636331,14.9093725 66.9349807,14.9465419 C66.8068188,14.9837112 66.7124955,15.1020963 66.7124955,15.2432416 L66.7124955,17.6376345 C66.7124955,17.8098906 66.8498119,17.9487435 67.0196592,17.9487435 L68.9664459,17.9487435 L68.9664459,23.7088442 C68.9664459,27.9872476 71.9625587,28.4075722 73.9843791,28.4075722 C74.9081588,28.4075722 76.0132286,28.1103812 76.1956632,28.0429197 C76.3060068,28.0023118 76.3700878,27.8878565 76.3700878,27.7637403 L76.3731938,25.1297935 C76.3731938,24.9580286 76.2283578,24.819012 76.0652128,24.819012 C75.9028853,24.819012 75.4875031,24.8851636 75.0598607,24.8851636 C73.691274,24.8851636 73.2275042,24.2477177 73.2275042,23.4226239 C73.2275042,22.5981852 73.2273408,17.9487435 73.2273408,17.9487435 L76.0138826,17.9487435 C76.1837298,17.9487435 76.3212099,17.8098906 76.3212099,17.6376345 L76.3212099,14.638544 C76.3212099,14.4667791 76.1837298,14.3282537 76.0138826,14.3282537 Z M17.9428397,0 C8.03458183,0 0,8.03319092 0,17.9430513 C0,25.8707613 5.1411697,32.5965828 12.2704089,34.9691612 C13.1671348,35.1352564 13.4963504,34.5799216 13.4963504,34.1060003 C13.4963504,33.6781338 13.4797113,32.2646892 13.471986,30.7653743 C8.4802707,31.8507878 7.42695935,28.648327 7.42695935,28.648327 C6.61075442,26.5743638 5.4347301,26.0228915 5.4347301,26.0228915 C3.80677721,24.9092505 5.55744307,24.9321294 5.55744307,24.9321294 C7.35921465,25.0587065 8.30793767,26.7811658 8.30793767,26.7811658 C9.90825785,29.5242646 12.5054354,28.7312262 13.5293314,28.2727554 C13.6903736,27.1130594 14.1553757,26.3215065 14.6685121,25.8734353 C10.6831622,25.4197187 6.49368686,23.8811826 6.49368686,17.005905 C6.49368686,15.0469307 7.19460684,13.4462947 8.34240429,12.1897344 C8.15610631,11.7378005 7.54194707,9.91283163 8.51622294,7.44130915 C8.51622294,7.44130915 10.0229485,6.95906808 13.4517815,9.2805402 C14.8830371,8.88298107 16.4179894,8.68360722 17.9428397,8.67677326 C19.4676898,8.68360722 21.0038308,8.88298107 22.4377604,9.2805402 C25.8624338,6.95906808 27.3670793,7.44130915 27.3670793,7.44130915 C28.3437323,9.91283163 27.7292759,11.7378005 27.5429779,12.1897344 C28.6934495,13.4462947 29.3896154,15.0469307 29.3896154,17.005905 C29.3896154,23.8975248 25.1921177,25.4149648 21.1966655,25.8591731 C21.8402403,26.4159938 22.4136933,27.5079443 22.4136933,29.1819715 C22.4136933,31.5827773 22.3928945,33.5150098 22.3928945,34.1060003 C22.3928945,34.5834873 22.7158703,35.1429819 23.6253727,34.9667841 C30.7507492,32.5915315 35.8853822,25.8680871 35.8853822,17.9430513 C35.8853822,8.03319092 27.851989,0 17.9428397,0 Z M6.72017693,25.5602553 C6.68065916,25.6493941 6.54041571,25.6761357 6.4126516,25.6149272 C6.28251042,25.5563926 6.20941748,25.4348667 6.25160936,25.3454308 C6.29023571,25.2536177 6.43077627,25.2280647 6.56062028,25.2895703 C6.69105859,25.3481049 6.76534005,25.4708194 6.72017693,25.5602553 Z M7.60276527,26.3477865 C7.51719302,26.42712 7.34991113,26.3902759 7.23640902,26.2648874 C7.11904427,26.1397959 7.09705698,25.972512 7.18381772,25.8919899 C7.27206411,25.8126563 7.43429489,25.8497975 7.55195676,25.974889 C7.66932144,26.1014661 7.69220016,26.2675614 7.60276527,26.3477865 Z M8.20825429,27.3554056 C8.09831772,27.4317679 7.91855655,27.3601597 7.80743145,27.2006012 C7.69749485,27.0410427 7.69749485,26.8496913 7.80980847,26.773032 C7.92123064,26.6963726 8.09831772,26.7653066 8.21092842,26.9236767 C8.32056792,27.0859093 8.32056792,27.2772605 8.20825429,27.3554056 Z M9.2322658,28.5223709 C9.13391714,28.6308234 8.92444339,28.6017046 8.77112638,28.4537342 C8.61424393,28.309032 8.57056642,28.1037157 8.66921223,27.9952634 C8.76874937,27.8865141 8.97941165,27.9171184 9.13391714,28.0639004 C9.28961113,28.2083054 9.33715126,28.4151074 9.2322658,28.5223709 Z M10.5557013,28.9163254 C10.512321,29.0568676 10.3105725,29.1207504 10.1073383,29.0610274 C9.90440131,28.9995216 9.77158604,28.8349121 9.81258941,28.6928842 C9.85478127,28.5514506 10.0574211,28.4848935 10.2621409,28.5487762 C10.4647808,28.609985 10.5978932,28.7734061 10.5557013,28.9163254 Z M12.0618265,29.0834305 C12.0668776,29.2314009 11.8945445,29.3541153 11.6812082,29.3567896 C11.4666833,29.3615437 11.2931617,29.2418005 11.2907847,29.0962071 C11.2907847,28.946751 11.4592551,28.825225 11.67378,28.8216595 C11.8871164,28.8174997 12.0618265,28.9363514 12.0618265,29.0834305 Z M13.5414257,29.0267136 C13.5669785,29.1711186 13.4187127,29.319386 13.2068619,29.3589042 C12.9985766,29.3969367 12.8057419,29.307798 12.7792977,29.1645817 C12.7534478,29.0166111 12.9043877,28.8683436 13.1123758,28.830014 C13.3245237,28.79317 13.5143872,28.8799316 13.5414257,29.0267136 Z"
                      fill="#11110F" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
