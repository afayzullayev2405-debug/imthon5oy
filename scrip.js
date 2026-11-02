
    // Ortacha ballga qarab baho beruvchi funksiya
    function bahoBer(ortacha) {
      if (ortacha >= 86) {
        return "A'lo (5)";
      } else if (ortacha >= 71) {
        return "Yaxshi (4)";
      } else if (ortacha >= 56) {
        return "Qoniqarli (3)";
     } else {
        return "Qoniqarsiz (2)";
      }
    }

    function tahlilQilish() {
      const input = document.getElementById("ballarInput").value.trim();
      const natijaDiv = document.getElementById("natija");

      // Agar kiritish maydoni bo'sh bo'lsa
      if (!input) {
        natijaDiv.innerHTML = "Ballarni 0 dan 100 gacha, vergul bilan kiriting";
        return;
      }

      // Matnni vergul bo'yicha ajratib, massivga o'tkazamiz
      const elementlar = input.split(",");
      const ballar = [];

      // Har bir elementni tekshiramiz va son ko'rinishiga o'tkazamiz
      for (let i = 0; i < elementlar.length; i++) {
        const str = elementlar[i].trim();
        const num = Number(str);

        // Son emasligi yoki 0-100 oralig'ida emasligini tekshirish
        if (str === "" || isNaN(num) || num < 0 || num > 100) {
          natijaDiv.innerHTML = "Xatolik: Ballar 0 va 100 oralig'idagi sonlar bo'lishi kerak!";
          return;
        }

        ballar.push(num);
      }

      const fanlarSoni = ballar.length;
      let yigindi = 0;
      let otganFanlar = 0;

      let engYuqori = ballar[0];
      let engPast = ballar[0];

      // for tsikli orqali hisob-kitoblarni amalga oshiramiz
      for (let i = 0; i < ballar.length; i++) {
        const ball = ballar[i];
        yigindi += ball;

        // 56 va undan yuqori ball olgan fanlar soni
        if (ball >= 56) {
          otganFanlar++;
        }

        // Math.max va Math.min dan foydalanish yoki if/else bilan aniqlash:
        engYuqori = Math.max(engYuqori, ball);
        engPast = Math.min(engPast, ball);
      }

      // O'rtacha ball (bir xona aniqlikda)
      const ortachaBall = (yigindi / fanlarSoni).toFixed(1);
      const umumiyBaho = bahoBer(ortachaBall);

      // Natijani ekranga chiqarish
      natijaDiv.innerHTML = `
        Fanlar soni: ${fanlarSoni}<br>
        O'rtacha ball: ${ortachaBall}<br>
        Eng yuqori: ${engYuqori}<br>
        Eng past: ${engPast}<br>
        O'tgan fanlar: ${otganFanlar} ta<br>
        Umumiy baho: ${umumiyBaho}
      `;
    }