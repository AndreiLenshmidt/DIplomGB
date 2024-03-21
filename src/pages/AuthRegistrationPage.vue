<template>
  <div class="registration-authentication-wrap">
    <div class="wrap">
      <div v-if="authentication" class="authentication-box">
        <h2 class="cabin-700 title">ВХОД</h2>
        <div class="authentication">
          <form class="authentication__form">
            <label class="authentication__label">
              <p class="oxygen-regular txt">Email</p>
              <input
                class="authentication__input"
                type="email"
                v-model="login"
                required
                placeholder="Email"
                pattern="^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@.+(\..{1,11})?)$"
              />
            </label>
            <div class="flex">
              <p class="oxygen-regular txt">Пароль</p>
              <a class="oxygen-regular txt link">Забыли пароль?</a>
            </div>
            <label class="authentication__label">
              <input
                class="authentication__input"
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Должен содержать по меньшей мере одну цифру, одну большую и одну маленькую буквы латинского алфавита и быть в длину не менее 8 символов"
                required
              />
            </label>
            <div>
              <label class="authentication__label">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked
                  v-model="remember"
                />
                <span class="oxygen-regular">Запомнить меня?</span>
              </label>
            </div>
            <GreenButton class="green-btn">Войти</GreenButton>
          </form>
          <div class="authentication__container">
            <h3 class="cabin-500 title2">Регистрация</h3>
            <p class="oxygen-regular text2">
              Регистрация в магазине только сделает процесс покупок проще и
              удобнее.
            </p>
            <a href="#">
              <GreenButton
                @click="authentication = !authentication"
                class="green-btn"
                >Зарегистрироваться</GreenButton
              >
            </a>
          </div>
        </div>
      </div>
      <div v-else class="registration-box">
        <h2 class="cabin-700 title">Регистрация</h2>
        <form>
          <div class="registration">
            <div class="registration__box">
              <label class="registration__label">
                <p class="oxygen-regular text">Фамилия</p>
                <input
                  class="registration__input"
                  type="text"
                  placeholder="Фамилия"
                  required
                  pattern="(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)"
                />
              </label>
              <label class="registration__label">
                <p class="oxygen-regular text">Телефон</p>
                <input
                  class="registration__input"
                  type="tel"
                  value="+7"
                  placeholder="Телефон"
                  pattern="^\+7[1-9]{10}$"
                  required
                />
              </label>
              <label class="registration__label">
                <p class="oxygen-regular text">Пароль</p>
                <input
                  class="registration__input"
                  :type="showpass ? 'text' : 'password'"
                  v-model="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Должен содержать по меньшей мере одну цифру, одну большую и одну маленькую буквы латинского алфавита и быть в длину не менее 8 символов"
                  required
                />
              </label>
            </div>
            <div class="registration__box">
              <label class="registration__label">
                <p class="oxygen-regular text">Имя</p>
                <input
                  class="registration__input"
                  type="text"
                  placeholder="Имя"
                  required
                  pattern="(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)"
                />
              </label>
              <label class="registration__label">
                <p class="oxygen-regular text">Email</p>
                <input
                  class="registration__input"
                  type="email"
                  placeholder="Email"
                  required
                  pattern="^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@.+(\..{1,11})?)$"
                />
              </label>
              <label class="registration__label">
                <p class="oxygen-regular text">Подтвердите пароль</p>
                <input
                  class="registration__input"
                  :type="showpass ? 'text' : 'password'"
                  title="Пароль не совпал"
                  required
                  :pattern="password"
                />
              </label>
            </div>
            <div class="registration__box">
              <label class="registration__label">
                <p class="oxygen-regular text">Отчество</p>
                <input
                  class="registration__input"
                  type="text"
                  placeholder="Отчество"
                  pattern="(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)"
                />
              </label>
              <label class="registration__label">
                <p class="oxygen-regular text">Адрес</p>
                <input
                  class="registration__input"
                  type="text"
                  placeholder="Адрес"
                />
              </label>
              <div class="registration__show-pass">
                <input type="checkbox" id="show" v-model="showpass" />
                <span class="oxygen-regular"
                  >{{
                    showpass ? "Скрыть пароль" : "Показать поле ввода пароля"
                  }}
                </span>
              </div>
            </div>
          </div>
          <div>
            <input type="checkbox" v-model="agree" />
            <span class="oxygen-regular"
              >Я даю своё согласие на обработку моих персональных данных и
              принимаю
              <a class="link3" href="#">Пользовательское соглашение</a></span
            >
          </div>
          <div class="registration__btn-box">
            <GreenButton class="green-btn">РЕГИСТРАЦИЯ</GreenButton>
          </div>
        </form>
        <p class="oxygen-regular">
          Уже регистрировались?
          <a
            @click="authentication = !authentication"
            class="link2 oxygen-regular"
            href="#"
            >Вход</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import GreenButton from "@/components/GreenButton.vue";

export default {
  components: {
    GreenButton,
  },
  data() {
    return {
      authentication: true,
      login: "",
      password: "",
      name: "",
      surname: "",
      lastname: "",
      phone: "",
      adress: "",
      remember: true,
      agree: true,
      showpass: false,
    };
  },
  methods: {
    // validation() {
    //   this.login;
    //    this.password;
    // },
  },
};
</script>

<style lang="scss" scoped>
.registration-authentication-wrap {
  color: #000;
}
.flex {
  align-items: flex-end;
}
.title {
  padding-top: 48px;
  text-transform: uppercase;
  padding-bottom: 24px;
}
.title2 {
  text-transform: uppercase;
  padding-bottom: 24px;
}
.txt {
  margin-bottom: 10px;
}
.text {
  margin-bottom: 10px;
  margin-top: 20px;
}
.text2 {
  padding-bottom: 30px;
  font-size: 12px;
}
.link {
  font-size: 12px;
  color: #12d0a7;
  border-bottom: 1px solid transparent;
}
.link2 {
  color: #12d0a7;
  border-bottom: 1px solid transparent;
}
.link3 {
  color: #12d0a7;
}
.green-btn {
  width: 100%;
  border-radius: 0;
}
.link:hover,
.link2:hover {
  border-bottom: 1px solid #12d0a7;
  cursor: pointer;
}
.authentication {
  padding: 32px;
  box-sizing: border-box;
  width: 100%;
  background-color: #f7f7f7;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__form {
    background-color: #fff;
    width: 300px;
    padding: 16px;
    box-sizing: border-box;
  }
  &__input {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #e4e4e4;
    background-color: #f0f0f0;
    padding: 14px 15px 13px;
    outline: none;
    font-size: 14px;
    border-radius: 0;
    box-shadow: none;
  }
  &__input:hover {
    border-color: #12d0a7;
  }
  &__input:focus {
    border-color: #fc7900;
    color: #0e0e0e;
  }
  &__label {
    display: block;
    padding-bottom: 15px;
  }
  &__label:last-child {
    padding-bottom: 30px;
  }

  &__container {
    width: 300px;
    padding: 16px;
    box-sizing: border-box;
    padding-left: 60px;
  }
}
.registration {
  padding-bottom: 32px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &__box {
    width: 31%;
  }
  &__input {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #e4e4e4;
    background-color: #f0f0f0;
    padding: 14px 15px 13px;
    outline: none;
    font-size: 14px;
    border-radius: 0;
    box-shadow: none;
  }
  &__input:hover {
    border-color: #12d0a7;
  }
  &__input:focus {
    border-color: #fc7900;
    color: #0e0e0e;
  }
  &__btn-box {
    width: 200px;
    padding-top: 32px;
    padding-bottom: 12px;
  }
  &__show-pass {
    margin-top: 55px;
  }
}
</style>
