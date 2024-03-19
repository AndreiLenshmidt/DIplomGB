<template>
  <div class="wrap contacts">
    <h2 class="cabin-700 contacts__title">Контакты</h2>
    <div class="flex">
      <div>
        <p class="oxygen-regular contacts__text">Вы можете найти нас здесь:</p>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af86668ee3a3aef21a5624922ab9565474774ff70379931d001b389e157d1bb44&amp;source=constructor"
            width="600"
            height="350"
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
  &__title {
    padding-top: 46px;
    padding-bottom: 30px;
  }
  &__text {
    padding-bottom: 24px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
