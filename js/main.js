'use strict';
{
  // 1.
  // 整数の入力値aとbを比較し大きい方の値を出力するcompareNumbers()関数を作成してください．aとbが等しい場合はeqと出力して下さい．
  function compareNumbers(a, b) {
    if (a < b) {
      return b;
    } else if (a > b) {
      return a;
    }else {
      return "eq";
    }
  }

  console.log(compareNumbers(2, 5));    // 5
  console.log(compareNumbers(10, 9));   // 10
  console.log(compareNumbers(2, 2));    // eq



  //   距離nとその単位sが入力されるので，すべての距離をmmに換算し出力するconvertToMm()関数を作成してください．

  // 入力される距離の単位は km, m, cm の3種類で，それぞれ以下のように換算出来ます．

  // 1km = 1000m
  // 1m = 100cm
  // 1cm = 10mm
  function convertToMm(z, s) {
    switch (s) {
      case "km":
        return z * 1000000 + s;
        break;
      default:
        return z * 10 + s;
        break;
    }
  }

  console.log(convertToMm(1, 'km'));    // 1000000
  console.log(convertToMm(54, 'km'));   // 54000000
  console.log(convertToMm(2, 'cm'));    // 20



  // 正の整数nが入力されるので，n奇数ならばodd偶数ならばevenと出力するoddOrEven()関数を作成してください．
  function oddOrEven(n) {
    if (n % 2 == 0) {
      return "even";
    } else {
      return "add";
    }
  }

  console.log(oddOrEven(4));    // even
  console.log(oddOrEven(5));    // odd
  console.log(oddOrEven(2));    // even





  // 2つの西暦aとbを入力し，aからbが何年間あるか出力するcalculateYears()関数を作成してください（a < bとする）．

  function calculateYears(a, b) {
    return b - a;
  }

  console.log(calculateYears(1990, 2014));    // 24
  console.log(calculateYears(1999, 2000));    // 1
  console.log(calculateYears(794, 1192));    // 398

  // 何番目？
  // 以下のような A〜Z (半角英字大文字) の中から1文字入力されます．

  // ABCDEFGHIJKLMNOPQRSTUVWXYZ A を 1番目としてアルファベット順で何番目かを出力するjudgeTh()関数を作成してください．

  // 例えばCを入力した場合は3と出力して下さい．

  function judgeTh(c) {
    const arry = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const pp = arry.lastIndexOf(c);
    return pp + 1;
  }

  console.log(judgeTh('C'));    // 3
  console.log(judgeTh('X'));    // 24



  // 絶対値
  // -100から100までの整数nが与えられるので，絶対値を出力するgetAbs()関数を作成してください．

  function getAbs(n) {
    return Math.abs(n);
  }

  console.log(getAbs(-10));    // 10
  console.log(getAbs(15));     // 15
  console.log(getAbs(0));      // 0


  // 割り算
  // 整数mとnを入力し，mをnで割り算した商と余りを半角スペース区切りの文字列で出力するgetQuotientAndSurplus()関数を作成してください．

  function getQuotientAndSurplus(m, n) {
    const f = parseInt(m / n);
    const l = parseInt(m % n);
    return `${f} ${l}`
  }

  console.log(getQuotientAndSurplus(10, 3));    // 3 1
  console.log(getQuotientAndSurplus(12, 14));    // 0 12




  // 小文字を大文字に
  // 半角アルファベットの小文字で構成された長さnの文字列sが与えられます．

  // 文字列sを大文字に変換して出力するconvertToUppercase()関数を作成してください．

  function convertToUppercase(s) {
    return s.toUpperCase();
  }

  console.log(convertToUppercase('gsacademy'));    //
  console.log(convertToUppercase('abcdefghijklmnopqrstuvwxyz'));    // ABCDEFGHIJKLMNOPQRSTUVWXYZ




  // 掛け算のリスト
  // 正の整数1から9に整数nをそれぞれを掛けた数を半角スペース区切りで出力する関数createList()関数を作成してください．

  // 例えばn=2の場合は

  // 2 4 6 8 10 12 14 16 18

  // となります．

  function createList(n) {
    let num = "";
    for (let i = 1; i <= 9; i++) {
      num += String(`${i * n}\t`);
    }
    return num;
  }

  console.log(createList(2));    // 2 4 6 8 10 12 14 16 18
  console.log(createList(3));    // 3 6 9 12 15 18 21 24 27
  console.log(createList(5));    // 5 10 15 20 25 30 35 40 45



  // 等差数列
  // 以下のような数列を考えます．

  // 5 8 11 14 17 20 23 26 29 32

  // 最初の数字が5で，3ずつ増加していく事がわかります． 一般的にこれを初項5，公差3の等差数列といいます．

  // このような数列を出力するプログラムを作りましょう．

  // 初項mと公差nが入力し，10番目までの数字をスペース区切りで出力するcreateSequence()関数を作成してください．

  function createSequence(m, n) {
    let num = "";
    for (let i = 0; i < 10; i++) {
      num += String(`${m + (n * i)}\t`);
    }
    return num;
  }

  console.log(createSequence(3, 3));    // 3 6 9 12 15 18 21 24 27 30
  console.log(createSequence(5, 10));    // 5 15 25 35 45 55 65 75 85 95
  console.log(createSequence(1, 3));    // 1 4 7 10 13 16 19 22 25 28

  // カウントダウン
  // 正整数nが入力されるので，nから1まで1ずつカウントダウンするcountDown()関数を作成してください．

  // 例えば

  // 3

  // と入力された場合

  // 3 2 1

  // と出力してください．

  function countDown(n) {
    let line = "";
    for (let i = 0; i < n; i++) {
      line += String(`${n - i}\t`);
    }
    return line;
  }

  console.log(countDown(3));     // 3 2 1
  console.log(countDown(10));    // 10 9 8 7 6 5 4 3 2 1



  // N文字目まで出力
  // 半角アルファベットで構成された文字列sと正の整数n入力されます．

  // 1文字目からn文字目までを出力するgetOneToN()関数を作成してください．

  // 例えば

  // abcdefgと4

  // と入力された場合

  // abcd

  // と出力して下さい．

  function getOneToN(s, n) {
    const sub = s.substr(0, n)
    return sub;
  }

  console.log(getOneToN('aabbccdd', 5));    // aabbc
  console.log(getOneToN('gsacademyfukuoka', 9));    // gsacademy

  // 最大と最小
  // 5個の数字 n_1, n_2, n_3, n_4, n_5 が半角スペース区切りで与えられます．

  // それらの数字の最大の数字，最小の数字を半角スペース区切りで出力するgetMaxAndMin()関数を作成してください．

  // 例えば

  // 9 12 3 6 10

  // と入力された場合

  // 12 3

  // と出力してください．

  function getMaxAndMin(s) {
    const n = s.split(" ");
    const m = n.map(Number);
    const t = Math.max(...m);
    const b = Math.min(...m);
    return `${t + "\t" + b}`;




  }

  console.log(getMaxAndMin('9 12 3 6 10'));    // 12 3
  console.log(getMaxAndMin('1 1 2 2 3'));    // 3 1
  console.log(getMaxAndMin('5 9 -1 10 2'));    // 10 -3



  // 文字列からN番目
  // 半角アルファベット文字列sと整数nが入力されます．

  // 文字列sの1番左の文字を1文字目としn文字目のアルファベットを出力するgetNthChar()関数を定義してください．

  // 例えば

  // gsacademyと3

  // と入力された場合

  // a

  // と出力して下さい．

  function getNthChar(s, n) {
    const s_spil = s.split("");
    //  console.log(s_spil);
    return s_spil[n - 1];
  }

  console.log(getNthChar('gsacademy', 3));    // a
  console.log(getNthChar('abcdefg', 5));    // e
  console.log(getNthChar('qwertyu', 1));    // q

  // 文字列の一致
  // 文字列sと文字列tが半角スペース区切りで入力されます．

  // sとtが完全一致していれば「Yes」，それ以外は「No」と出力するisEqual()関数を作成してください．

  function isEqual(s, t) {
    const arry3 = String(s.split(','));
    const arry2 = String(t.split(','));
    // console.log(arry3);
    // console.log(arry2);
    if (arry3 == arry2) {
      return "Yes";
    } else {
      return "No";
    }
  }

  console.log(isEqual('gsacademy', 'gsacademy'));    // Yes
  console.log(isEqual('JavaScript', 'ジャバスク'));    // No
  console.log(isEqual('aaaaa', 'aaaaaa'));    // No

  // Aの個数
  // 半角アルファベットで構成された文字列sが与えられます．

  // sに含まれる半角アルファベット「A」の数を出力するgetNumberOfA()関数を作成してください．

  function getNumberOfA(s) {
    const arry = s.split("");
    console.log(arry);
    let count = 0
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] == "A") {
        count++;
      }
      console.log(count);
    }

  }

  console.log(getNumberOfA('GSACADEMY'));    // 2
  console.log(getNumberOfA('aAaAaA'));    // 3
  console.log(getNumberOfA('JavaScript'));    // 0


  // 表面積の計算
  // 立方体の体積を求めましょう．

  // 一辺の長さaが入力されるので，立方体の表面積を出力するgetSurfaceArea()関数を作成してください．

  function getSurfaceArea(a) {
    return a * a * 6;
  }

  console.log(getSurfaceArea(4));    // 96
  console.log(getSurfaceArea(1));    // 6

  // 三角形の内角の和
  // 平面上の三角形の2つの角の角度a, bを入力し，残りの1つの角の角度を出力するgetAngle()関数を作成してください．

  function getAngle(a, b) {
    return 180 - (a + b);
  }

  console.log(getAngle(30, 90));    // 60
  console.log(getAngle(45, 45));    // 90

  // 数字の出力
  // ある正の整数n（最大2桁）が入力されます．

  // nを0埋め3桁で出力するzeroPadding3()関数を作成してください．

  // 例えば以下のような入力の場合

  // 98

  // 以下のように出力して下さい

  // 098

  function zeroPadding3(n) {
    return ('000' + n).slice(-3);
  }

  console.log(zeroPadding3(98));    // 098
  console.log(zeroPadding3(2));    // 002

  // 一週間の予定
  // あなたは1週間を全て休みにするために有給を申請することにしました．もともと決まっている休みもあります．

  // 半角スペース区切りで7日間の休みが，休みならば「yes」，休みでなければ「no」と入力されます．

  // 有給申請しなくては行けない日数を出力するgetPaidHolidays()関数を作成してください．

  function getPaidHolidays(s) {
    const arry = s.split(' ');
    console.log(arry);
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] == "no") {
        count++;
        console.log(count);
      }
    }
    return count;

  }

  console.log(getPaidHolidays('yes yes yes yes no no yes'));    // 2
  console.log(getPaidHolidays('yes no no no no no yes'));    // 5

  // nまでの和
  // ある2以上の整数nが与えられます．

  // 1からnまでの和を出力するgetSum()関数を作成してください．

  function getSum(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
      count += i;
    }
    return count;
  }

  console.log(getSum(10));    // 55
  console.log(getSum(99));    // 4950


  // 数字の桁数
  // ある10進数の正の整数nが与えられます．

  // nが何桁かを数字で出力するgetNumberOfDigits()関数を作成してください．

  function getNumberOfDigits(n) {

    const str = String(n);
    return str.length;

  }

  console.log(getNumberOfDigits(100));    // 3
  console.log(getNumberOfDigits(114514));    // 6


  // サイコロの裏面

  // 一般的な6面サイコロの目を表す整数nに対し，その裏側にある目を出力するgetBackSide()関数を作成してください．

  function getBackSide(n) {
    return 7 - n;
  }

  console.log(getBackSide(1));    // 6
  console.log(getBackSide(3));    // 4


  // 単位の変換
  // ある正の整数nが入力されます．

  // n分から秒へ変換するconvertToSeconds()関数を作成してください．

  function convertToSeconds(n) {
    return n * 60;
  }

  console.log(convertToSeconds(16));    // 960
  console.log(convertToSeconds(3));    // 180

  // 充電時間
  // 1分間で1%の充電が可能なスマートフォンの充電器があります．

  // 現在のスマートフォンのバッテリーの残量n%からこの充電器で100%まで充電するのに何分かかるかを求めるgetTimeUntilFull()関数を作成してください．

  function getTimeUntilFull(n) {
    return 100 - n;
  }

  console.log(getTimeUntilFull(70));    // 30
  console.log(getTimeUntilFull(25));    // 75


  // 頭文字
  // あなたは半角アルファベットの苗字と名前からそれぞれ 1文字目を取りイニシャルを作ることにしました．

  // 半角スペース区切りで苗字と名前が入力されるので，1文字目を取り "." (半角ドット)で区切った文字列を出力するgetInitialFromName()関数を作成してください．

  function getInitialFromName(s) {
    const ss = s.split(" ");
    const sss = ss[0].split("");
    const sss2 = ss[1].split("");
    return `${sss[0] + "." + sss2[0]}`;
  }

  console.log(getInitialFromName('Dio Brando'));    // D.B
  console.log(getInitialFromName('Pannacotta Fugo'));    // P.F
  console.log(getInitialFromName('Gyro Zeppeli'));    // G.Z

  // どれにしようかな
  // あなたはレストランで何を注文しようか迷っています．しかしあまり時間がないので「どれにしようかな天の神様の言うとおり」で决めてしまいましょう．

  // メニューの数nを入力し，選ばれた1からnまでの数の一つを出力するchoiceOfGod()関数を作成してください．

  // 選ばれるメニューはこの文字数 21 を迷っているメニューの数で割れば求められます．ただし余りが 0 となるときはそのメニューの中で最後のものが選ばれることに注意しましょう．

  function choiceOfGod(n) {
    function getRandom(min, max) {
      var random = Math.floor(Math.random() * (max + 1 - min)) + min;

      return random;
    }
    const rand = getRandom(1, n);
    const iii = 21 % rand;
    if (iii == 0) {
      return n;
    } else {
      return iii;
    }

  }

  console.log(choiceOfGod(4));    // 1
  console.log(choiceOfGod(3));    // 3

  // 日付のデータ
  // スペース区切りで西暦y，月m，日dが入力されます．

  // /区切りで文字列として出力するformatYMD()関数を作成してください．

  // ただし，西暦は4桁，月と日は2桁で出力しましょう．
  ////////////////////////////////////////////////////////////////
  function formatYMD(s) {
    const mata = s.split(" ");
    console.log(mata);
    ('0' + mata).slice(-2);

  }

  console.log(formatYMD('2021 1 1'));    // 2021/01/01
  console.log(formatYMD('2020 10 10'));    // 2020/10/10
  console.log(formatYMD('794 11 29'));    // 0794/11/29



  // アットマーク
  // 半角小文字アルファベットで構成された文字列sが入力されます．

  // 文字列sの中に含まれるatという文字列を全て@(アットマークに)置換して出力するconvertAtToAtMark()関数を作成してください．

  function convertAtToAtMark(s) {
    return s.replace(/at/g, '@');
  }

  console.log(convertAtToAtMark('gsatcodeatquantity'));    // gs@code@quantity
  console.log(convertAtToAtMark('atatatjojoatatat'));    // @@@jojo@@@

  // 花粉症でつらい
  // あなたは花粉症でティッシュを毎日使っては買いに行くのを繰り返していましたが，必要なティッシュ箱の数を計算し一気に注文しようと考えました．

  // ティッシュ1箱が空になるまでの期間をm日，残りの花粉症の季節をn日が入力されるので，花粉症の季節が終わるまでに必要なティッシュ箱の数を求めるgetNeedBox()関数を作成してください．

  function getNeedBox(m, n) {
    return parseInt((n / m) + 1);
  }

  console.log(getNeedBox(7, 30));    // 5
  console.log(getNeedBox(3, 100));    // 34
  console.log(getNeedBox(7, 5));    // 1

  // 本棚選び
  // あなたは新しい本棚を買おうと検討しています．そこで，既に持っている本の幅などから収まるか概算することにしました．

  // 持っている本の幅を合計したものn(cm)，検討している本棚の段数d，本が収まる幅e(cm)がそれぞれ半角スペース区切りで入力し，本が収まるかどうかをOKまたはNGで出力するcanStoreBooks()関数を作成してください．

  // 概算なので本それぞれの違い1段に収まるかは考えないことにします．

  // 例えば，本の幅を合計したものが400(cm)，検討している本棚の段数が5，本が収まる幅が85 (cm)の場合は以下の様な入力になり，

  // 400 5 85

  // 各段の幅を合計したものは85かける5で425(cm)となり，400(cm)の本は収まるので以下のように出力して下さい．

  // OK

  // 収まらない場合はNGを出力してくだだい．

  function canStoreBooks(s) {
    const hatena = s.split(' ');
    console.log(hatena);
    if (hatena[2] * hatena[1] > hatena[0]) {
      return "ok"
    } else {
      return "ng";
    }
  }

  console.log(canStoreBooks('400 5 85'));    // OK
  console.log(canStoreBooks('500 4 70'));    // NG

  // 試合の回数
  // あなたは1対1で戦う競技の大会を開くことにしました．

  // n人の選手で総当り対戦を行う場合，対戦の回数を出力するcalculateNumberOfGames()関数を作成してください．

  // 総当り戦ではn人がそれぞれ自分自身以外と対戦します．

  function calculateNumberOfGames(n) {
    let counter = 0;
    for (let i = 1; i < n; i++) {
      counter += n - i;
    }
    return counter;
  }

  console.log(calculateNumberOfGames(4));    // 6
  console.log(calculateNumberOfGames(10));    // 45

  // ここから提出////////////////
  // 連休の天気

  // あなたは7日間の連休をもらいましたが，降水確率が30%以下ならば外に出掛ける事に決めました．

  // 7日間の降水確率(%)が半角スペース区切りで入力されるので，出掛ける日数の合計を出力するdaysOfGoOut()関数を作成してください．

  function daysOfGoOut(s) {
    const results = s.split(' ');
    const result = results.filter(function (value) {
      return value <= 30;
    })
    return result.length;
  }

  console.log(daysOfGoOut('13 0 15 30 89 100 30'));    // 5
  console.log(daysOfGoOut('0 14 18 22 0 2 4'));    // 7
  console.log(daysOfGoOut('99 99 99 99 99 99 99'));    // 0


  // 正三角形かどうか
  // あなたは，3つの辺の長さが分かっている三角形が正三角形なのかを判別しようとしています．

  // 3つの辺の長さ a, b, c が半角スペース区切りで与えられるので正三角形ならYES, 正三角形でなければNOと出力するisEquilateralTriangle()関数を作成してください．

  function isEquilateralTriangle(s) {
    const results = s.split(' ');
    if (results.length > 3) {
      return "そもそも３角形じゃないし！"
    } else {
      const result = results.every(v => v == results[0]);
      return result ? "yes" : "no";
    }
  }

  console.log(isEquilateralTriangle('10 10 10'));    // yes
  console.log(isEquilateralTriangle('3 4 5'));    // No



  // 天気の表示
  // あなたは0% 〜 100%の降水確率を得て，その数値から天気を文字列で表示をしようと考えました．

  // 表示のルールは以下のよう定めました．

  // 降水確率が 0 % 以上 30 % 以下ならばsunny
  // 降水確率が 31 % 以上 70 % 以下ならばcloudy
  // 降水確率が 71 % 以上ならばrainy
  // 降水確率n(%)が与えられるので上のルールに従って文字列を出力するshowWeather()関数を作成してください．

  function showWeather(n) {
    if (n <= 30) {
      return "sunny";
    } else if (n == 31 || n <= 70) {
      return "cloudy";
    } else {
      return "rainy";
    }
  }

  console.log(showWeather(31));    // cloudy
  console.log(showWeather(2));    // sunny
  console.log(showWeather(71));    // rainy


  //   はじめまして
  // はじめましてのあいさつをしましょう．

  // 名前が文字列s1で，性別が文字列s2(男性はM, 女性はF) で与えられます． これに対し，男性ならHi, Mr.〇〇(名前)と，女性ならHi, Ms.〇〇(名前)と出力するgreet()関数を作成してください．

  function greet(s1, s2) {
    if (s2 == 'M') {
      return `Hi, Mr.${s1}`;
    } else {
      return `Hi, Ms.${s1}`;
    }
  }

  console.log(greet('Stroheim', 'M'));    // Hi, Mr.Stroheim
  console.log(greet('Trish', 'F'));    // Hi, Ms.Trish


  // 通知票
  // ジーズ中学校ではこれまで51の数字で成績をつけていましたが，英語教育に力を入れるため今年度からAからEのアルファベットで成績をつけることにしました．

  // すでに成績を数字でつけてしまったあなたはあわててアルファベットに変換することにしました．

  // 【変換ルール】

  // 5 -> A
  // 4 -> B
  // 3 -> C
  // 2 -> D
  // 1 -> E

  // 5教科について数字の評価が入力されるので，アルファベットの評価を出力するconvertNumberToAlphabet()関数を作成してください．
  // 比嘉さんのやつ（書き方きれい！！）
  function convertNumberToAlphabet(s) {

    return s
      .replace(/5/g, "A")
      .replace(/4/g, "B")
      .replace(/3/g, "C")
      .replace(/2/g, "D")
      .replace(/1/g, "E");
  }

  console.log(convertNumberToAlphabet('53342'));    // ACCBD
  console.log(convertNumberToAlphabet('22222'));    // DDDDD
  console.log(convertNumberToAlphabet('51111'));    // AEEEE


  // 不思議なタマゴ
  // 持ったまま一定の距離を歩くと孵化する不思議なタマゴ（1km, 2km, 5km）があります．

  // あなたはこのタマゴをなるべくいっぺんに孵化させようと思い，3つをまとめて持っていくことにしました．

  // これらをすべて孵化させるのに最低限必要な歩行距離を求めるgetNumberOfSteps()関数を作成してください．

  function getNumberOfSteps(s) {
    const resuts = s.split(' ');
    return Math.max(...resuts);
  }

  console.log(getNumberOfSteps('1 2 5'));    // 5
  console.log(getNumberOfSteps('2 5 5'));    // 5
  console.log(getNumberOfSteps('1 2 1'));    // 2

  // 台風の間隔
  // あなたは気象庁のデータ分析の担当者で，8月の台風の上陸の間隔についてのデータを作るよう求められました．

  // サンプルとなる5個の台風について上陸した日が与えられるので，それぞれ (2個目以降) について直前の上陸日との間隔日数を出力するgetInterval()関数を作成してください．

  function getInterval(s) {
    const aaa = [];
    const result = s.split(' ');
    for (let i = 0; i < result.length - 1; i++) {
      const betw = (result[i + 1]) - result[i];
      aaa.push(betw);
    }
    return aaa.join(' ');
  }

  console.log(getInterval('5 8 19 25 31'));    // 3 11 6 6
  console.log(getInterval('2 3 7 9 28'));    // 1 4 2 19


  // ◯◯の秋
  // あなたは，「わたしの秋は◯◯の秋」というアンケートの集計を任されました．

  // アンケートの回答はまちまちで，「◯◯の秋」と書く人もいれば「◯◯」の部分だけ書く人もいます．これでは不便なのでまず「◯◯」の部分だけを取り出すgetAutumn()関数を作成してください．

  function getAutumn(s) {
    const results = s.replace(/noaki/, "");
    return results;
  }

  console.log(getAutumn('codenoaki'));    // code
  console.log(getAutumn('dokusyo'));    // dokusyo
  console.log(getAutumn('javascriptnoaki'));    // javascript

  //41 お月見だんご
  // あなたはお月見の準備をしています．子供2人にいくつお月見だんごがほしいかをたずねますが，やんちゃな子は明らかに食べきれない数のだんごを要求してきます．

  // 付き合いきれないのであなたは5より大きい数字を要求された場合には5個しか与えないことにしました．もちろん5以下の場合にはその数のだんごを与えます．

  // 必要なだんごの数を求めるgetNumberOfDango()関数を作成してください．

  function getNumberOfDango(s) {
    const results = s.split(' ');
    let num = 0;
    results.forEach(el => {
      const elem = parseInt(el);
      elem <= 5 ? num += elem : num += 5;
    });
    return num;
  }

  console.log(getNumberOfDango('3 50'));    // 8
  console.log(getNumberOfDango('100 500'));    // 10
  console.log(getNumberOfDango('2 4'));    // 6

  // 42 衣替え
  // そろそろ衣替えのシーズンです．冬服をしまって夏服を出しましょう．

  // 10着の服に関してそれが夏物か冬物かの情報が与えられるので，その半分 (5着) 以上が夏物になっているかどうか (なっていればOK，なっていなければNG) を判定するisReadyForSummer()関数を作成してください．

  function isReadyForSummer(s) {
    const results = s.split(' ');
    // console.log(results);
    let countS = 0;
    let countW = 0;
    results.forEach(el => {
      // console.log(el);
      el == "S" ? countS++ : countW++;
      // console.log(countS);
      // console.log(countW);
    });
    if (countS >= 5) return "ok";
    else return "ng";

  }

  console.log(isReadyForSummer('W W W W W S S S S S'));    // OK
  console.log(isReadyForSummer('S S W W S W W W W W'));    // NG
  console.log(isReadyForSummer('W S S S S S S S S W'));    // OK

  //   ピラミッドの作り方
  // あなたのクラスでは，運動会の出し物で人間ピラミッドをやることになりました．段数nのピラミッドを組むのに必要な人数を求めるgetNumberOfHuman()関数を作成してください．

  // 【例】

  // ピラミッドの段数: 5段

  // 1 + 2 + 3 + 4 + 5 = 15

  // → 必要な人数: 15人

  function getNumberOfHuman(n) {
    let count = 0;
    for (let i = 1; i < n + 1; i++) {
      count += i;
    }
    return count;
  }

  console.log(getNumberOfHuman(4));    // 10
  console.log(getNumberOfHuman(10));    // 55
  console.log(getNumberOfHuman(50));    // 1275

  // トリック・オア・トリート
  // Trick or Treat! ハロウィーンのシーズンです．あなたの子供はわがままなのでお菓子といってもキャンディかチョコレートでないと満足してくれません．

  // 文字列が与えられるので，これがcandyかchocolateであればThanks!，その他の場合は No!という子供のリアクションを出力するcandyOrChocolate()関数を作成してください．

  function candyOrChocolate(s) {
    let sss = "";
    s == "chocolate" || s == "candy" ? sss = "thanks!" : sss = "no";
    return sss;
  }


  console.log(candyOrChocolate('chocolate'));    // Thanks!
  console.log(candyOrChocolate('candy'));    // Thanks!
  console.log(candyOrChocolate('pannacotta'));    // No!

  // 11/11
  // 今日はみんなで棒状のチョコレートお菓子を持ち寄るパーティーをします．このお菓子が合計で11本以上あればパーティーが開催できます．

  // このお菓子の1本は数字の1で表され，本数分だけ1が連続する文字列が与えられるので，パーティーが開催できればOK，できなければ必要な本数を出力するcanParty()関数を作成してください．

  // 【例】

  // 111111111111 → 12 ≧ 11本なのでOK

  // 1111111 → 7 < 11 本なのでNG，あと 11 - 7 = 4 本必要

  function canParty(s) {
    const result = s.split("").length;
    let count;
    result >= 11 ? count = "ok" : count = (11 - result);
    return count;
  }

  console.log(canParty('11111111111'));    // OK
  console.log(canParty('1111'));    // 7
  console.log(canParty('1111111111111111'));    // OK

  // ワインのキャッチコピー
  // あなたはあるワインの銘柄のマーケティングを担当しています．良いキャッチコピーを考えるため，とりあえず「〜の中で最高」というフレーズを色々作ってみることにしました．

  // 2つの文字列が与えられるので，"Best in" とそれらの文字列をすべて半角スペース区切りで結合して出力するbestCopy()関数を作成してください．

  // 【例】

  // hundred years → Best in hundred years
  // the universe → Best in the universe
  function bestCopy(s) {
    const result = "best in ";
    return result + s;
  }

  console.log(bestCopy('a decade'));    // Best in a decade
  console.log(bestCopy('the world'));    // Best in the world
  console.log(bestCopy('history ever'));    // Best in history ever

  // ガチャ期待値計算///////////////////////問題がわからん
  // あなたがプレイしているゲームで推しキャラが実装されたので，予算と相談して引ける確率を算出したいと思いました．

  // 推しキャラの当選確率n（%）と試行回数t（数値）を入力し，1回以上推しを引ける確率（%）を出力するprobabilityGetSSR()関数を作成してください．

  // なお，出力する確率の小数点以下は四捨五入してください．
  function probabilityGetSSR(n, t) {

  }

  console.log(probabilityGetSSR(1, 100));    // 63
  console.log(probabilityGetSSR(1.5, 70));    // 65
  console.log(probabilityGetSSR(1, 200));    // 87

  // 調理計画(自力で解けなかったので、若松さんに教えてもらった比嘉さんのみた)//////////////
  // 今日は夕食当番です．コードをギリギリまで書かなければならないので，夕食の準備を開始する時間を決めたいと考えました．

  // 夕食の時間s（hh:mm）と調理に要する時間t（分）を入力し，調理開始時間を出力するgetStartTimeForCook()関数を作成してください．

  function getStartTimeForCook(s, t) {
    // day.jsを使用 年月日は適当に設定 HHは24時間表示 hhはAMPM表示
    // const a = "2019-01-10 " + s;
    // const b = dayjs(a).add(-t, "m");
    // const c = b.format("HH:mm");
    // return c;

  }



  console.log(getStartTimeForCook('19:00', 90));    // 17:30
  console.log(getStartTimeForCook('20:00', 20));    // 19:40
  console.log(getStartTimeForCook('20:30', 80));    // 19:10

  // しかたないから全角にしてやるか
  // システム改修中，全角数字しか入らないデータベースを発見しました．

  // ユーザから送信された7桁の郵便番号を全て全角に変換して出力するconvertToUppercase()関数を作成してください．

  function convertToUppercasep(s) {
    if (!s) return s;
    return String(s).replace(/[!-~]/g, function (all) {
      return String.fromCharCode(all.charCodeAt(0) + 0xFEE0);
    });
  }

  console.log(convertToUppercasep('1234567'));    // １２３４５６７
  console.log(convertToUppercasep('1111111'));    // １１１１１１１
  console.log(convertToUppercasep('1145140'));    // １１４５１４０

  // リストラ計画
  // チューターを解雇することになりました．現在のチューターのリストと解雇したいチューターのリストが入力されるので，残存するチューターを半角スペース区切りで出力するfireEmployees()関数を作成してください．

  function fireEmployees(employees, fireEmployees) {
    let emp = employees;
    const results2 = fireEmployees.split(' ');
    results2.forEach(el => {
      const employ = emp.replace(el, "");
      emp = employ
    });
    return emp.trim();
  }

  console.log(fireEmployees('Jotaro Joseph Avdol Polnareff Tenmei Iggy', 'Avdol Tenmei Iggy'));    // Jotaro Joseph Polnareff
  console.log(fireEmployees('Giorno Bucciarati Abbacchio Mista Narancia Fugo Trish', 'Bucciarati Abbacchio Narancia'));    // Giorno Mista Fugo Trish
  console.log(fireEmployees('Jolyne Ermes Emporio F・F Weather Anasui', 'Jolyne Ermes F・F Weather Anasui'));    // Emporio

  // プロフィールの表示
  // 人事局長のあなたは，毎年行われる新入社員の自己紹介が面倒なので自動化するシステムをつくることにしました．

  // 名前name，年齢age，性別genderが記載されたオブジェクトを入力すると，プロフィールを出力するoutputProfile()関数を作成してください．

  // プロフィールの形式は「彼/彼女の名前はnameでage歳です」とします．彼/彼女はgenderによって区別されるものとします．

  // 3項目揃っていない場合は「情報がありません」と出力してください．

  function outputProfile(obj) {
    let gen = "";
    if (obj.gender == 'male') gen = "彼";
    else gen = "彼女";
    return `${gen}の名前は${obj.name}で${obj.age}歳です`;
  }

  const taro = {
    name: 'Taro',
    age: 25,
    gender: 'male',
  };

  console.log(outputProfile(taro));    //彼の名前はTaroで25歳です

  const hanako = {
    name: 'Hanako',
    age: 30,
    gender: 'female',
  };

  console.log(outputProfile(hanako));    // 彼女の名前はHanakoで30歳です

  const hatena = {
    name: 'hatena',
    age: 20,
  };

  console.log(outputProfile(hatena));   //  情報がありません


  // お買い物リスト
  // 配列でつくられた買い物リストがあります．

  // 買い物に出かけようとしたタイミングで新たにリストに追加しましたが，バグで別の配列に入ってしまいました．

  // 二つの配列を合わせた新しい配列を出力するcombineArray()関数を作成してください．

  function combineArray(a, b) {
    return a.concat(b);
  }

  const abc = ["a", "b", "c"];
  const def = ["d", "e", "f"];

  console.log(combineArray(abc, def));    //["a", "b", "c", "d", "e", "f"]

  const gen = ["米", "トイレットペーパー", "ちゅーる", "酒"];
  const yui = ["洗剤", "肉", "ブロッコリー"];

  console.log(combineArray(gen, yui));    // ["米", "トイレットペーパー", "ちゅーる", "酒", "洗剤", "肉", "ブロッコリー"]

  //   成績を晒す
  // あなたが勤務する学校で小テストを行いました．成績の悪い生徒を晒したく，テストのスコアが悪い順に出力するプログラムを作成しましょう．

  // テストの点数は半角スペース区切りで入力されるため，点数が低い順に半角スペース区切りで出力するcreateBadScoreArray()関数を作成してください．

  function createBadScoreArray(a) {
    function compareFunc(a, b) {
      return a - b;
    }
    const array = a.split(' ');
    const results = array.sort(compareFunc);
    let str = '';
    results.forEach(el => {
     str += `${el} `;
    });
    return str;
  }

  console.log(createBadScoreArray('15 8 9 100 26 1'));    // 1 8 9 15 26 100

  console.log(createBadScoreArray('50 15 89 5 61 2 44'));    // 2 5 15 44 50 61 89


//   特定の文字列を含むか
// 文字列の中に，特定の文字列が含まれているかの判定を出力するcontainStrings()関数を作 成してください． 

// 含まれている場合は「true」含まれていない場合は「false」と出力することとします．


function containStrings(str1, str2) {
  if (str1.indexOf(str2) != -1) {
    return true;  
  } else {
    return false;
  }
}

const a = "あけましておめでとうございます";
const b = "おめでとう";

console.log(containStrings(a, b));    // true

const c = "Love the life you live. Live the life you love.";
const d = "best";

console.log(containStrings(c, d));    // false


// アンケートデータの作成
// 名前と年齢を入力するアンケートを作成しました．回答データを扱いやすくするため，一つのオブジェクトにまとめたデータを作成したいと考えました．

// 入力データ（名前と年齢）からこれら2つ（name, age）をキーとしたオブジェクトを出力するcreateObject()関数を作成してください．


function createObject(a, b) {

}

console.log(createObject('ichiro', 20));    // { name: "ichiro", age: 20, }
console.log(createObject('momoko', 22));    // { name: "momoko", age: 22, }
}

