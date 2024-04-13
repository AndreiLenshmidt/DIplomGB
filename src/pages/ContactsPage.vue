<template>
  <div class="wrap contacts">
    <h2 class="cabin-700 contacts__title">Контакты</h2>
    <div class="flex column">
      <div>
        <p class="oxygen-regular contacts__text">Вы можете найти нас здесь:</p>
        <div>
          <iframe
            class="contacts__map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af86668ee3a3aef21a5624922ab9565474774ff70379931d001b389e157d1bb44&amp;source=constructor"
            
            frameborder="1"
          ></iframe>
        </div>
      </div>
      <div class="contacts__box">
        <p class="oxygen-regular contacts__text">
          Время работы: понедельник—воскресенье с 10:00 до 21:00.
        </p>
        <p class="oxygen-regular contacts__text">Телефон: +7 999 635 47 59</p>
        <p class="oxygen-regular contacts__text">
          Email: lenshmidt.andrei@gmail.com
        </p>
        <p class="oxygen-regular contacts__text">
          Адрес: г. Город ул. Улица д. Дом/2
        </p>
        <p class="oxygen-regular contacts__text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contacts {
  color: #000;
  @media (width < 540px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  &__title {
    padding-top: 46px;
    padding-bottom: 30px;
  }
  &__text {
    padding-bottom: 24px;
  }
  &__map {
    width:600px;
    height:350px;
    @media (width < 1200px) {
      width: 500px;
    }
    @media (width < 1024px) {
      width: 400px;
      padding-right: 20px;
    }
    @media (width < 768px) {
      width: 330px;
      height: 280px;
    }
    @media (width < 540px) {
      width: 300px;
      padding-right: 0;
    }

  }
  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.column {
  @media (width < 540px) {
    flex-direction: column;
  }
}
</style>
