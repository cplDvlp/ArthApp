<template>
  <div>
    <br />
    <div v-for="lifes in life" :key="lifes">
      ♡
    </div>
    <br />
    <div>{{ time }} || {{ timerCount }}</div>
    <br />
    <p style="font-size: 30px">{{ randomNumber1 }} + {{ randomNumber2 }}</p>
    <div justify="center">
      <b-button size="lg" variant="outline-dark" @click="button1()">{{
        arrayAnswer[0]
      }}</b-button>
      <b-button size="lg" variant="outline-dark" @click="button2()">{{
        arrayAnswer[1]
      }}</b-button>
      <b-button size="lg" variant="outline-dark" @click="button3()">{{
        arrayAnswer[2]
      }}</b-button>
    </div>
    <b-modal v-model="gameOver" title="Fin del juego"
      @ok="newGame()">
      <!-- @show="$router.push('/')"
      @cancel="$router.push('/')"
      @hidden="$router.push('/')" -->
      <p>Se termino la partida</p>
      <br />
      PUNTUACIÓN FINAL: {{ counter }}
      TIEMPO FINAL: {{ time }}
    </b-modal>
    <br />
    <div>PUNTUACION: {{ counter }}</div>

    <br />
    <router-link to="/">
      <b-button size="lg" pill>Back</b-button>
    </router-link>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "calculate",
  data() {
    return {
      life: 3,
      randomNumber1: 1,
      randomNumber2: 1,
      check: false,
      show: 0,
      operator: "",
      question: "",
      answer: 0,
      min: 1,
      max: 99,
      counter: 0,
      arrayAnswer: [],
      gameOver: false,
      timerCount: 10,
      time: 0,
    };
  },
  created: function () {
    this.getRandomNumber();
    this.countDownTimer();
    this.countUpTimer();
  },
  watch: {},
  computed: mapGetters("drizzle", ["isDrizzleInitialized"]),
  methods: {
    newGame() {
          this.life = this.life = 3;
          this.counter = 0;
          this.time = 0;
          this.timerCount = 10;
          this.gameOver = false;
          this.countUpTimer();
    },
    nextOperation: function (answer) {
      if (answer == this.answer) {
        // Respuesta correcta
        this.counter = this.counter + this.timerCount;
        this.check = true;
        this.show = 2;
      } else {
        // Respuesta incorrecta
        this.check = false;
        this.show = 2;
        this.life = this.life - 1;
        if (this.life == 0) {
          // Fin de la partida
          this.gameOver = true;
        }
      }
      this.arrayAnswer = [];
      this.getRandomNumber();
    },
    getRandomNumber: function () {
      this.randomNumber1 = this.generateNumber(this.min, this.max);
      this.randomNumber2 = this.generateNumber(this.min, this.max);
      if (this.randomNumber1 >= this.randomNumber2) {
        this.question = this.randomNumber1 + " + " + this.randomNumber2;
        this.answer = this.randomNumber1 + this.randomNumber2;
      } else {
        this.question = this.randomNumber2 + " + " + this.randomNumber1;
        this.answer = this.randomNumber2 + this.randomNumber1;
      }

      this.arrayAnswer = this.checkEqualNumber(this.answer);
    },
    checkEqualNumber(answer) {
      let arrayFinal = [];
      let newNumber = this.generateNumber(this.answer - 3, this.answer + 3);
      while (newNumber == answer) {
        newNumber = this.generateNumber(this.answer - 4, this.answer + 4);
      }
      let newNumber2 = this.generateNumber(this.answer - 3, this.answer + 3);
      while (newNumber2 == answer || newNumber2 == newNumber) {
        newNumber2 = this.generateNumber(this.answer - 3, this.answer + 3);
      }
      arrayFinal.push(answer, newNumber, newNumber2);
      this.shuffleArray(arrayFinal);
      return arrayFinal;
    },
    generateNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    shuffleArray(arrayAnswer) {
      arrayAnswer.sort(() => Math.random() - 0.5);
    },
    button1() {
      this.nextOperation(this.arrayAnswer[0]);
      this.timerCount = 10
    },
    button2() {
      this.nextOperation(this.arrayAnswer[1]);
      this.timerCount = 10
    },
    button3() {
      this.nextOperation(this.arrayAnswer[2]);
      this.timerCount = 10
    },
    countDownTimer() {
      if (this.timerCount > 0) {
        setTimeout(() => {
          this.timerCount -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
    countUpTimer() {
      if (!this.gameOver) {
        setTimeout(() => {
          this.time += 10;
          this.countUpTimer();
        }, 100);
      }
    },
  },
};
</script>

<style></style>