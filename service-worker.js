/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d72d0d37cc576741eca6cc0e2f1f07e5"
  },
  {
    "url": "architecture/index.html",
    "revision": "11fab4d124d302df8dc53b8fb443dbde"
  },
  {
    "url": "architecture/大型系统核心技术.html",
    "revision": "37e0026d759c3fd9ed5a82a27b70caf8"
  },
  {
    "url": "architecture/系统伸缩性架构.html",
    "revision": "a6fb28f0c7abc0f87749567eca6d4dd2"
  },
  {
    "url": "architecture/系统安全性架构.html",
    "revision": "66a059287de638d1bf48577f8e47c155"
  },
  {
    "url": "architecture/系统扩展性架构.html",
    "revision": "a437f2db579bcdf8fc3c0d0099ccb732"
  },
  {
    "url": "architecture/系统架构概述.html",
    "revision": "87f3c825c033c4978c65c7a4183a00b9"
  },
  {
    "url": "architecture/系统架构面试.html",
    "revision": "26b46c84aba4144f4d31fa43e71aa208"
  },
  {
    "url": "architecture/系统测试架构.html",
    "revision": "2f9aecd421741a557ec8db3261aa2cf6"
  },
  {
    "url": "architecture/系统高可用架构.html",
    "revision": "2267645b9e1aa5f438456551a61e949e"
  },
  {
    "url": "architecture/系统高性能架构.html",
    "revision": "f3e2d0432675e5e7b682c0ff1334ce2e"
  },
  {
    "url": "architecture/领域驱动设计.html",
    "revision": "d9e4236647b74396f310aad488fcb9c1"
  },
  {
    "url": "assets/css/0.styles.e97f331a.css",
    "revision": "3bc12e00e5ffeb9657b88cc8817fff86"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.11455032.js",
    "revision": "7cb1cc7e3d1085cf6d23858cd694d5fd"
  },
  {
    "url": "assets/js/11.9800c58f.js",
    "revision": "7ad659e991c912c76f615bf28edebb4e"
  },
  {
    "url": "assets/js/12.73ca0b6c.js",
    "revision": "e21a45879f1d09ce36b5ec6c095b8e61"
  },
  {
    "url": "assets/js/13.f2aad97a.js",
    "revision": "23c9081da899d2987c035cf9481413aa"
  },
  {
    "url": "assets/js/14.f10b1cf9.js",
    "revision": "5f8be8277ee0c03eb24859ad5866b4aa"
  },
  {
    "url": "assets/js/15.4761ccfa.js",
    "revision": "29aea48ea22384fc5c3eca38cd28feef"
  },
  {
    "url": "assets/js/16.9530f6f8.js",
    "revision": "55abc242d38c54dc75c7dd9afc72b28e"
  },
  {
    "url": "assets/js/17.d14c549a.js",
    "revision": "3034f9e24b014aa8e009bd3740c5da6d"
  },
  {
    "url": "assets/js/18.b23395ba.js",
    "revision": "df94b71dd46360623d9c7502aa370ac5"
  },
  {
    "url": "assets/js/19.3334ca2c.js",
    "revision": "f7499fc322555498d4e7e172a9a8ea1f"
  },
  {
    "url": "assets/js/20.d8673224.js",
    "revision": "3a2869d9b425de799daf1c20e3c089dd"
  },
  {
    "url": "assets/js/21.cbe5e2e4.js",
    "revision": "47c23558a86d4186527ba2f2161bf8e1"
  },
  {
    "url": "assets/js/22.9405b89d.js",
    "revision": "d81f5a6407314df7586f644ffb319434"
  },
  {
    "url": "assets/js/23.db1d44e9.js",
    "revision": "3c99ff9aad41ca000fb719122d6e62c1"
  },
  {
    "url": "assets/js/24.1a585721.js",
    "revision": "ed8e8cca43efe9a19eab58df600bd145"
  },
  {
    "url": "assets/js/25.caaabf3a.js",
    "revision": "d41eff901386060287611643a1f224c6"
  },
  {
    "url": "assets/js/26.2976d2c8.js",
    "revision": "fe3a93d3df15b99a4e67877732136e30"
  },
  {
    "url": "assets/js/27.6bf15cd2.js",
    "revision": "1efaf953e52f96a7aef043d36837a32e"
  },
  {
    "url": "assets/js/28.772a84fa.js",
    "revision": "334eeb762386b45106136e2eb17e79a8"
  },
  {
    "url": "assets/js/29.d89c5d64.js",
    "revision": "5bf88cc04aa01350f21626ef2fd5f30f"
  },
  {
    "url": "assets/js/30.f441aaa4.js",
    "revision": "9d661e0bdd99d4ffa133c6fe1580f46f"
  },
  {
    "url": "assets/js/31.f8ffdbff.js",
    "revision": "545c92372aea68ae9cda9a89527c9385"
  },
  {
    "url": "assets/js/32.04e014c0.js",
    "revision": "2f8d69d33181b78ead60983c3294d708"
  },
  {
    "url": "assets/js/33.ca172c3d.js",
    "revision": "ff4977b5805ea75d2355b6ba4ff4a3ff"
  },
  {
    "url": "assets/js/34.fe5e6c3c.js",
    "revision": "fccecd73e5d19b7ef4613b1a624ddb76"
  },
  {
    "url": "assets/js/35.5b0a89e9.js",
    "revision": "4f9ac8e0fcb5ff919fc59a1b024d452d"
  },
  {
    "url": "assets/js/36.91ff3589.js",
    "revision": "0c9ebfa792969c2956aa8cfb635a8b8d"
  },
  {
    "url": "assets/js/37.f3112401.js",
    "revision": "56193543e02cdb50d9c8debbc50c053f"
  },
  {
    "url": "assets/js/38.381b4c5c.js",
    "revision": "4312445f9750fffe2d34031e68240d32"
  },
  {
    "url": "assets/js/39.9252656c.js",
    "revision": "c20411308f567266e4ede336690400b0"
  },
  {
    "url": "assets/js/4.7cb9a872.js",
    "revision": "ade5f6ec59ba8529e6b5446a3c89605a"
  },
  {
    "url": "assets/js/40.a5e8c7e8.js",
    "revision": "61febbaa23f1070c2e093aa03bea2ed3"
  },
  {
    "url": "assets/js/41.e7a55908.js",
    "revision": "1f81580fe3e6b07f29b575e0ef7ee9ee"
  },
  {
    "url": "assets/js/42.9537e9cc.js",
    "revision": "902172b588a020ce1312315236a253c0"
  },
  {
    "url": "assets/js/43.de2306a6.js",
    "revision": "ff73f070cb29fcbb33ed90dcb638d237"
  },
  {
    "url": "assets/js/44.33baafe3.js",
    "revision": "0d797977b28e8832af5ec33575e959b6"
  },
  {
    "url": "assets/js/45.b8198cea.js",
    "revision": "fb309963e8e39b1d6d1e07b4c90edacc"
  },
  {
    "url": "assets/js/46.a02a081f.js",
    "revision": "ab77c5f76dbb5bca844f65a611ea0dd4"
  },
  {
    "url": "assets/js/47.0fdfbc62.js",
    "revision": "a66915993544829e68d5c98caddff907"
  },
  {
    "url": "assets/js/48.fb6dad02.js",
    "revision": "d2de3c6b5115d0b582c6ca6b9d90e64f"
  },
  {
    "url": "assets/js/49.aedbf81a.js",
    "revision": "5d4aa48771040c041e3d66f29cd42f5d"
  },
  {
    "url": "assets/js/5.76f4dda0.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/50.361ef4ce.js",
    "revision": "9ef863ff435a7588c5b401ebeb33036d"
  },
  {
    "url": "assets/js/51.d27801ee.js",
    "revision": "33ee6d1643dd6ed053dbcdd4055b255b"
  },
  {
    "url": "assets/js/52.c7964000.js",
    "revision": "e7f70324d907bdb916e3abc9933059cf"
  },
  {
    "url": "assets/js/53.a78c310b.js",
    "revision": "1ce573c7f2ac6305099523fefcd40812"
  },
  {
    "url": "assets/js/54.57ff9881.js",
    "revision": "4d04afdc3e71501e2ade5976676ce293"
  },
  {
    "url": "assets/js/55.6249cad7.js",
    "revision": "cd021e3035f4a0c78ea7a95fa2fa4740"
  },
  {
    "url": "assets/js/56.64296d5d.js",
    "revision": "9f2f4786d5eb3dfc48f2bb1547a781e9"
  },
  {
    "url": "assets/js/57.fbebbc82.js",
    "revision": "fa33d9385c1803d514281b59bb6893c1"
  },
  {
    "url": "assets/js/58.24606fe0.js",
    "revision": "1d5b2ca5c1e3c5e00587536a6f031231"
  },
  {
    "url": "assets/js/59.63b63b53.js",
    "revision": "ca53c6c2873c3e70ff57b5ded4df91b8"
  },
  {
    "url": "assets/js/6.b49c6230.js",
    "revision": "cee7c104dd66fbf24cef4705d87a2b5d"
  },
  {
    "url": "assets/js/60.d82d35d7.js",
    "revision": "b2ca96063363bc011de2e4cbb9d1044f"
  },
  {
    "url": "assets/js/7.eb699c6f.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.a97c8043.js",
    "revision": "840f68b0d2e492e2d2779e62d131946d"
  },
  {
    "url": "assets/js/9.4787378f.js",
    "revision": "96f2ab64211a1188121c336645b453da"
  },
  {
    "url": "assets/js/app.846e7f4b.js",
    "revision": "5e677ef7ec40988be0b5ba54aa351965"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "638ae7d61be62e630561f9472a3780eb"
  },
  {
    "url": "microservices/kong.html",
    "revision": "a76d17325b802c7392e1fe24cfc8dadf"
  },
  {
    "url": "paradigm/index.html",
    "revision": "745082805c98877cb73e34200a58adb9"
  },
  {
    "url": "paradigm/错误处理.html",
    "revision": "270ee3c03a9f3f6fabf4b7751bae1d53"
  },
  {
    "url": "pattern/index.html",
    "revision": "6c3dea8851ded7978367cdbb960804fb"
  },
  {
    "url": "pattern/中介者模式.html",
    "revision": "52a89a13bc9cba0288bce206f7941035"
  },
  {
    "url": "pattern/享元模式.html",
    "revision": "ab18cfe9a4734fb7cf5f050c9c2f7776"
  },
  {
    "url": "pattern/代理模式.html",
    "revision": "56a3d718be0e707b9a8895fe3bfc4e3d"
  },
  {
    "url": "pattern/单例模式.html",
    "revision": "e0350fa3ce10cc156e0956c276b150e2"
  },
  {
    "url": "pattern/原型模式.html",
    "revision": "ceee420ad138804f0f0ae7e7685ee8b7"
  },
  {
    "url": "pattern/命令模式.html",
    "revision": "73337b8c743bfbc8f57f21c55b91409a"
  },
  {
    "url": "pattern/备忘录模式.html",
    "revision": "4dae80627a0f5d758cc9915bd4bd57ab"
  },
  {
    "url": "pattern/外观模式.html",
    "revision": "20cf7d51da93959e59a03f111042e3b5"
  },
  {
    "url": "pattern/工厂方法模式.html",
    "revision": "8087894dca78d159a89f7c30f32dea3a"
  },
  {
    "url": "pattern/抽象工厂模式.html",
    "revision": "72ccff4d7ef626355e39556258447887"
  },
  {
    "url": "pattern/构造者模式.html",
    "revision": "7997acf052119f40bcb12b0e57aef6c7"
  },
  {
    "url": "pattern/桥接模式.html",
    "revision": "16ce68e152c1344a82aa6888d86fdab2"
  },
  {
    "url": "pattern/模板方法模式.html",
    "revision": "ad144eb4cb94b7e7c4c93315328b5a15"
  },
  {
    "url": "pattern/状态模式.html",
    "revision": "ee1100199e336efab5bb15f5a1206402"
  },
  {
    "url": "pattern/策略模式.html",
    "revision": "6d5f5d6248ae719ad45af13e9b89079e"
  },
  {
    "url": "pattern/简单工厂模式.html",
    "revision": "12f65ff2a795fef91fac8e4012016182"
  },
  {
    "url": "pattern/组合模式.html",
    "revision": "2c6ff51c86ff957736c219710fcf28d8"
  },
  {
    "url": "pattern/职责链模式.html",
    "revision": "3bb60d1da93fc55190451cfb8474be9d"
  },
  {
    "url": "pattern/装饰者模式.html",
    "revision": "f09a120220dc2326d374c5fa43874bd1"
  },
  {
    "url": "pattern/观察者模式.html",
    "revision": "93859428c85ceedacef5f56c467b651a"
  },
  {
    "url": "pattern/解释器模式.html",
    "revision": "29bb39819a11849de1f99878c6087a4b"
  },
  {
    "url": "pattern/设计模式概述.html",
    "revision": "7a5f91703ff7bc3eda0ad6dd7798822f"
  },
  {
    "url": "pattern/访问者模式.html",
    "revision": "84846c0d722f1bc3b0e9ee861089d480"
  },
  {
    "url": "pattern/迭代器模式.html",
    "revision": "9eaf95420b30968f804605d2826eb01e"
  },
  {
    "url": "pattern/适配器模式.html",
    "revision": "d2a80a52f22aa06f3de842627fabec3a"
  },
  {
    "url": "refactor/index.html",
    "revision": "e7df2136411fd280dc43087cafd51277"
  },
  {
    "url": "refactor/代码坏味道之代码臃肿.html",
    "revision": "1d83947528311db16a405f4b2975f675"
  },
  {
    "url": "refactor/代码坏味道之变革的障碍.html",
    "revision": "1a8c526c11e39faf290e46557764e9e0"
  },
  {
    "url": "refactor/代码坏味道之滥用面向对象.html",
    "revision": "da0c53552ca92a0cfac130b5ecd0ecab"
  },
  {
    "url": "refactor/代码坏味道之耦合.html",
    "revision": "dfbd59791c42ab4939d4890286396998"
  },
  {
    "url": "refactor/代码坏味道之非必要的.html",
    "revision": "bc68bbfd29e8234152de947cc2892067"
  },
  {
    "url": "refactor/代码的坏味道和重构.html",
    "revision": "b57b3b9fff3934b1eb22d3a9888d0443"
  },
  {
    "url": "uml/index.html",
    "revision": "6a16db7a468714ef2760bdf3445805fd"
  },
  {
    "url": "uml/uml-quickstart.html",
    "revision": "779c916402087e4397e29b777cedcca4"
  },
  {
    "url": "uml/UML结构建模图.html",
    "revision": "478b4be413deeb6d18c514a7e17e0bc7"
  },
  {
    "url": "uml/UML行为建模图.html",
    "revision": "2059153b368e635db7ddd74c0d8892de"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
