
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1646073183.8285155
!function(n,r,e,t,c){var i,o="Promise"in n,u={then:function(){return u},catch:function(n){
return n(new Error("Airship SDK Error: Unsupported browser")),u}},s=o?new Promise((function(n,r){i=function(e,t){e?r(e):n(t)}})):u
;s._async_setup=function(n){if(o)try{i(null,n(c))}catch(n){i(n)}},n[t]=s;var a=r.createElement("script");a.src=e,a.async=!0,a.id="_uasdk",
a.rel=t,r.head.appendChild(a)}(window,document,'https://aswpsdkeu.com/notify/v1/ua-sdk.min.js',
  'UA', {
    vapidPublicKey: 'BP50vnYTGc7SL8oQ7sTgXC22p1mU8JKxpRcbuWyWF9CeYD6RLJ13Bsh4aj3I5UbjXM-76TAtv_lHQPAV8cJaShM',
    appKey: 'bPjUxstCQlqNMebS4BBb0Q',
    token: 'MTpiUGpVeHN0Q1FscU5NZWJTNEJCYjBROkh5dFlobTRpVE9CSTJmc0dfZHR3WS1JdVBZTWJpNEJrNEFrbDJraFprZEk',
    workerUrl: '/acc_sw.js'
  });
