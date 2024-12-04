// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.trunc(num));
// console.log(Math.round(num));
// console.log(num.toFixed(5));

//1-misol
//1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).

for (let num = 1; num <= 100; num++) {
  if (num == 50) {
    break;
  }
  console.log(num);
}

//2-misol
//1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).

for (let num = 1; num < 20; num++) {
  if (num == 3) {
    continue;
  }
  console.log(num);
}

//3-misol
//1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).

let num3 = 0;

for (let num = 1; num <= 30; num++) {
  num3++;
  if (num3 == 5) {
    break;
  }
  console.log(num);
}

//4-misol
//1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.

let num4 = 0;

for (let num = 1; num <= 50; num++) {
  if (num % 7 == 0) {
    num4++;
  } else if (num4 == 3) {
    break;
  }
}

console.log(num4);

//5-misol
//Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.

let num5 = +prompt("son");

switch (num5) {
  case 1:
    console.log("Dushnaba");
    break;
  case 2:
    console.log("Seshnaba");
    break;
  case 3:
    console.log("Chorshnaba");
    break;
  case 4:
    console.log("Payshnaba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shnaba");
    break;
  case 7:
    console.log("Yakshnaba");
    break;
  default:
    console.log("Bunday hafta kuni yoq");
    break;
}

//6-misol
//Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.

let num6 = +prompt("son");

switch (num6) {
  case 12:
  case 1:
  case 2:
    console.log("Qish");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Bahor");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Yoz");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Kuz");
    break;
  default:
    console.log("Bunday oy mavjut emas");
    break;
}

//7-misol
//Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.

let num7 = +prompt("son");

switch (num7 % 2) {
  case 0:
    console.log("juft son");
    break;
  case 1:
    console.log("toq son");
    break;
  default:
    console.log("nomalum holat");
    break;
}

//8-misol
//Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.

let num8 = +prompt("son");

switch (num8) {
  case 5:
    alert("A’lo");
    break;
  case 4:
    alert("Yaxshi");
    break;
  case 3:
    alert("Qoniqarli");
    break;
  case 2:
    alert("Qoniqarsiz");
    break;
  case 1:
    alert("Juda yomon");
    break;
  default:
    alert("1 dan 5gacha baho qoying");
}

//9-misol
//1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.

let num9 = 1;

while (num9 <= 10) {
  console.log(num9);
  num9++;
}

//10-misol
//10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.

let num10 = +prompt("son");

while (num10 >= 1) {
  console.log(num10);
  num10++;
}

//11-misol
//Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.

let sum11 = 0;

while (sum11) {
  let num11 = +prompt("son");
  if (num11 == 0) {
    break;
  }
  sum11 += num11;
}

console.log(sum11);

//12-misol
//Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.

let num12 = +prompt("son");

while (num12 >= 0) {
  console.log(num12);
  num12--;
  if (num12 == 0) {
    break;
  }
}

//13-misol
//Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.

let num13 = +prompt("son");

let sum = 0;
while (num13 >= 1) {
  let lastNum = num13 % 10;
  sum += lastNum;
  num = Math.trunc(num / 10);
}

console.log(sum);

//14-misol
//Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.

let num14 = +prompt("son");
let $num14 = 0;

while (num14) {
  if (num14 > 0) {
    break;
  }
  if (num14 % 2 == 0) {
    $num14++;
    console.log($num14);
  }
}

//15-misol
//1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.

let num15 = 1;

while (num15 <= 20) {
  if (num15 % 2 == 1) {
    console.log(num15);
  }
  num15++;
}

//16-misol
//1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.

let num16 = 1;

while (num16 <= 50) {
  if (num16 % 5 == 0) {
    console.log(num16);
  }
  num16++;
}

//17-misol
//Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.

let num17 = +prompt("Butun sonni kiriting:");
let sum17;

while (num17 >= 1) {
  sum17 = sum17 * 10 + (num17 % 10);
  num17 = Math.trunc(num17 / 10);
}

console.log(num17);

//18-misol
//100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.

let num18 = 100;

while (num18 >= 1) {
  if (num18 % 10 == 0) {
    console.log(num18);
  }
  num18--;
}

//19-misol
//1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.

let num19 = 1;

while (num19 <= 100) {
  console.log(num19 ** 2);
  num19++;
}

//20-misol
//Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.

let num20 = +prompt("son");

while (num20) {
  if (num20 % 5 == 0) {
    console.log(num20);
  } else {
    console.log("5ga bolinadigan son kirting");
  }
}

//21-misol
//Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.

let num21;

while (num21) {
  if (num21 > 10) {
    console.log("10 katta son");
    break;
  } else {
    console.log("10 dan katta son kirting");
  }
}

//22-misol
//Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.

let num22 = prompt("son");

let counter = 0;
while (num22 != "stop") {
  if (Number(num22)) {
    counter++;
  }
}

console.log(counter);

//23-misol
//Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).

let num23 = +prompt("son");
let sum23 = 0;

while (num23) {
  sum23 += num23 % 10;
  num23 = Math.trunc(num23 / 10);
}

//24-misol
//Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.

let num24 = +prompt("son");

let resultat =
  num24 > 0 ? "Musbat son" : num24 < 0 ? "Manfiy son" : console.log(resultat);

//25-misol
//Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.

let num25 = +prompt("son");

let result = num25 % 2 === 0 ? "Juft son" : "Toq son";
console.log(result);

//26-misol
//Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.

let num26 = +prompt("son");

let $num26 =
  num26 > 100
    ? "100 dan katta"
    : num26 < 100
    ? "100 dan kichkina"
    : console.log(num26);

//27-misol
//Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.

let num27 = +prompt("son");
let $num27 = +prompt("son");

let _num27 = num27 > $num27 ? console.log(num27) : console.log($num27);

//28-misol
//Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.

let num28 = +prompt("son");

let $num28 =
  num28 % 3 == 0 && num28 % 5 == 0
    ? "3 va 5 ga bolinadi"
    : "3 va 5 ga bolinmaydi";

console.log($num28);

//29-misol
//0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.

let num29 = Math.floor(Math.random() * 100);
console.log(num29);

//30-misol
//Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).

let num30 = +prompt("Son");

let $num30 = Math.trunc(num30);
console.log($num30);

//31-misol
//Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).

let num31 = +prompt("son");

let $num31 = Math.ceil(num31);
console.log($num31);

//32-misol
//Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).

let num32 = +prompt("son");

let $num32 = Math.abs(num32);
console.log($num32);

//33-misol
//1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

//34-misol
//10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//35-misol
//1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//36-misol
//1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

//37-misol
//1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.

let sum2 = 0;
for (let i = 1; i <= 100; i++) {
  sum2 += i;
}
console.log("1 dan 100 gacha yig‘indisi", ":", sum2);

//38-misol
//Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.

let userInput = +prompt("son");
let num38 = parseInt(userInput);
let product = 1;

for (let i = 1; i <= num38; i++) {
  product *= i;
}

console.log(product);

//39-misol
//1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.

for (let i = 1; i <= 20; i++) {
  let square = i * i;
  console.log(square);
}

//40-misol
//Foydalanuvchi kiritgan sonning faktorialini hisoblang.

let num = +prompt("son");
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);

//41-misol
//1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.

for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}

//42-misol
//Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.

let num42 = parseInt(userInput);

if (num42 > 0) {
  for (let i = 1; i <= num42; i++) {
    let cube = i ** 3;
    console.log(cube);
  }
}

//43-misol
//1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.

let sum43 = 0;
for (let i = 2; i <= 100; i += 2) {
  sum43 += i;
}
console.log(sum);

//44-misol
//1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.

let num44 = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
    num44++;
  }
  if (num44 === 10) {
    break;
  }
}

//45-misol
//Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.

let num45 = parseInt(userInput);
let sum45 = 0;

if (num45 > 0) {
  for (let i = 1; i <= num45; i++) {
    sum45 += i;
  }
  console.log(sum45);
}

//46-misol
//1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.

let num46 = 0;

for (let i = 1; i <= 10; i++) {
  num46 += i * i;
}

console.log(num46);

//47-misol
//Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.

let num47 = +prompt("son");

if (num47 > 0) {
  for (let i = 1; i <= num47; i++) {
    if (num47 % i == 0) {
      console.log(i);
    }
  }
}

//48-misol
//Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.

let num48 = +prompt("son");

let sum48 =
  num48 % 3 == 0 ? console.log("3ga bolinadi") : console.log("3ga bolinmaydi");
for (let num = 1; num < sum; num++) {
  console.log(num);
}

//49-misol
//Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.

let num49 = +prompt("son");

if (num49 >= 1 && num49 <= 12) {
  switch (num49) {
    case 12:
    case 1:
    case 2:
      console.log(Qish);
      break;
    case 3:
    case 4:
    case 5:
      console.log(Bahor);
      break;
    case 6:
    case 7:
    case 8:
      console.log(Yoz);
      break;
    case 9:
    case 10:
    case 11:
      console.log(Kuz);
      break;
    default:
      console.log(Nomalum);
  }

  console.log(num49);
  for (let i = 1; i <= num49; i++) {
    console.log(i);
  }
}

//50-misol
//Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).

let num50 = Math.random() * 100;
console.log(num50);

if (num50 % 2 == 0) {
  console.log(num50, " son juft");
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}

//51-misol
//Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).

let son = +prompt("son");

let fact = 1;
let num55 = 1;
while (num55 <= son) {
  fact *= num55;
  num55++;
}

console.log(fact);

let mod = Math.abs(son);
console.log(mod);

//52-misol
//Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).

let num52 = +prompt("son");

if (num52 % 2 == 0) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

switch (num52) {
  case 1:
    console.log("Dushnaba");
    break;
  case 2:
    console.log("Seshnaba");
    break;
  case 3:
    console.log("Chorshnaba");
    break;
  case 4:
    console.log("Payshnaba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shnaba");
    break;
  case 7:
    console.log("Yakshnaba");
    break;
  default:
    console.log("Bunday hafta kuni yoq");
    break;
}

//53-misol
//Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).

let num53 = Math.random() * 100;
let butun = Math.trunc(num53);

console.log(num53);
console.log(butun);

let sum53 = 0;
let i = 1;
while (i <= butun) {
  sum53 += i;
  i++;
}

console.log(sum53);

//54-misol
//Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.

do {
  num54 = +prompt("son ");

  if (num54 >= 0) {
    sum += num54;
    count++;
  }
} while (num54 >= 0);

if (count > 0) {
  let orta = sum / count;
  console.log(orta);
}
